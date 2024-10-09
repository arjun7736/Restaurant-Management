import { getSingleData, updateOrder, OrderForm } from "@/apis/apis"
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const EditOrder = ({
  isEditOpen,
  setEditOpen,
  id,
  setId,
  fetchData
}: {
  isEditOpen: boolean;
  setEditOpen: (isOpen: boolean) => void;
  id: string;
  setId: (id: string) => void;
  fetchData: () => void;
}) => {
  const [formData, setFormData] = useState<OrderForm>({
    name: "",
    price: 0,
    quantity: 0,
    customerName: "",
    location: "",
    status: "pending",
    id: "",
  });

  const getData = async (id: string) => {
    const data = await getSingleData(id);
    setFormData(data); 
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateOrder(id, formData); 
    setEditOpen(false); 
    setId(""); 
    fetchData()
  };

  const handleClose = () => {
    setEditOpen(false);
    setId("");
  };

  return (
    <>
      <div className="relative">
        {isEditOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <form onSubmit={handleSubmit}>
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
                <h2 className="text-lg font-semibold mb-4">Edit Order</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Product Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      type="number"
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Price"
                    />
                  </div>
                  <div className="flex mt-2">
                    <Label htmlFor="status">Status</Label>
                    <select
                      id="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="h-10 mt-4 w-28 rounded-xl"
                    >
                      <option value="pending">Pending</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      type="number"
                      id="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Quantity"
                    />
                  </div>
                  <div>
                    <Label htmlFor="customerName">Customer Name</Label>
                    <Input
                      type="text"
                      id="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      placeholder="Customer Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between items-center mt-4">
                  <Button
                    variant={"destructive"}
                    className="text-white rounded-lg"
                    onClick={handleClose}
                  >
                   Discard
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-500/70 hover:bg-green-700/80"
                  >
                    Update Order
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default EditOrder;
