import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { createOrder, OrderForm } from "@/apis/apis";

const AddOrder = ({
  isModalOpen,
  toggleModal,
  fetchData
}: {
  isModalOpen: boolean;
  toggleModal: () => void;
  fetchData: () => void;
}) => {

  const [formData, setformData] = useState<OrderForm>({
    name: "",
    price: 0,
    quantity: 0,
    customerName: "",
    location: "",
    status:"pending"
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const id= Math.floor(10000 + Math.random() * 90000).toString(); 
    await createOrder({...formData,id});
    toggleModal()
    fetchData()
    setformData({
      name: "",
      price: 0,
      quantity: 0,
      customerName: "",
      location: "",
      status: "pending",
    });
  };

  return (
    <>
      <div className="relative">
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm ">
            <form onSubmit={handleSubmit}>
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
                <h2 className="text-lg font-semibold mb-4">Add Order</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="name">Product Name</Label>
                    <Input type="text" id="name" placeholder="Product Name"  onChange={handleChange}/>
                  </div>
                  <div>
                    <Label htmlFor="name">Price</Label>
                    <Input type="number" id="price" placeholder="Price"onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="name">Quantity</Label>
                    <Input type="number" id="quantity" placeholder="Quantity"onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="name">Customer Name</Label>
                    <Input
                      type="text"
                      id="customerName"
                      placeholder="Customer Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="name">Location</Label>
                    <Input type="text" id="location" placeholder="Location" onChange={handleChange}/>
                  </div>
                </div>
                <div className="w-full flex justify-between  items-center mt-4">
                  <Button
                    variant={"destructive"}
                    className=" text-white rounded-lg"
                    onClick={toggleModal}
                  >
                    Close Modal
                  </Button>
                  <Button type="submit" className="bg-green-500/70 hover:bg-green-700/80">
                    Create
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
export default AddOrder;



