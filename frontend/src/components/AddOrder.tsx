import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const AddOrder = ({
  isModalOpen,
  toggleModal,
}: {
  isModalOpen: boolean;
  toggleModal: () => void;
}) => {
  return (
    <>
      <div className="relative">
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm ">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
              <h2 className="text-lg font-semibold mb-4">Add Order</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                <Label htmlFor="name">Product Name</Label>
                <Input type="text" placeholder="Product Name" />
                </div>
                <div>
                <Label htmlFor="name">Price</Label>
                <Input type="number" placeholder="Price" />
                </div>
                <div>
                <Label htmlFor="name">Quantity</Label>
                <Input type="number" placeholder="Quantity" />
                </div>
                <div>
                <Label htmlFor="name">Customer Name</Label>
                <Input type="text" placeholder="Customer Name" />
                </div>
                <div>
                <Label htmlFor="name">Location</Label>
                <Input type="text" placeholder="Location" />
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
                <Button className="bg-green-500/70 hover:bg-green-700/80">
                  Create
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddOrder;
