import {
  AlignLeft,
  Calendar,
  ChartColumn,
  FilePenLine,
  Home,
  MessageSquareMore,
  Pencil,
  User,
} from "lucide-react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { CiCoffeeCup, CiFileOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";

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
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            <Home /> Dashboard
          </a>
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            <AlignLeft />
            Order List
          </a>
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            <CiFileOn size={24} />
            Order Detail
          </a>
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            <HiOutlineUsers size={24} />
            Customer
          </a>
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            {" "}
            <ChartColumn />
            Analytics
          </a>{" "}
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            <Pencil />
            Reviews
          </a>{" "}
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            <CiCoffeeCup size={26} />
            Foods
          </a>{" "}
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            <FilePenLine />
            Food Detail
          </a>{" "}
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            {" "}
            <User />
            Customer Detail
          </a>
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            <Calendar />
            Calender
          </a>
          <a
            href="#"
            className="flex  mx-0 md:mx-5  rounded-xl items-center gap-5 px-4 py-2 mt-2 text-sm text-black hover:bg-green-200 hover:text-green-500 hover:font-bold"
          >
            <MessageSquareMore />
            Chat
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
