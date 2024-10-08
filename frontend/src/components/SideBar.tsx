import logo from "../assets/logo.png";
import { Button } from "./ui/button";

const SideBar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <div className="flex">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-white text-black transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center">
          <img src={logo} alt="Logo" height={150} width={150} />
          <Button
            className="text-gray-300 bg-inherit hover:text-gray-500 lg:hidden"
            onClick={toggleSidebar}
          >
            ✖
          </Button>
        </div>
        <nav className="mt-5">
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Order List
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Order Detail
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Customer
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Analytics
          </a>{" "}
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Reviews
          </a>{" "}
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Foods
          </a>{" "}
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Food Detail
          </a>{" "}
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Customer Detail
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Calender
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Chat
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm text-black hover:bg-green-200"
          >
            Wallet
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
