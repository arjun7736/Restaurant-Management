import { Input } from "./ui/input";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Bell, Gift, MessageSquareMore, Settings } from "lucide-react";

const NavBar = () => {
  return (
    <div className="">
      <div className="flex gap-4 justify-evenly items-center">
        <Input
          className="bg-white w-2/3  focus:outline-none"
          placeholder="Search here"
        />
        <div className="hidden sm:flex gap-4">
          <div className=" flex w-8 h-8 bg-blue-200 items-center justify-center rounded-xl">
            <Bell height={18} />
          </div>
          <div className="flex w-8 h-8 bg-blue-200 items-center justify-center rounded-xl">
            <MessageSquareMore height={18} />
          </div>
          <div className="flex w-8 h-8 items-center justify-center rounded-xl bg-violet-200">
            <Gift height={18} />
          </div>
          <div className="flex w-8 h-8 items-center justify-center rounded-xl bg-red-200">
            <Settings height={18} />
          </div>
        </div>
        <div className="hidden sm:flex gap-4">
          <p>
            Hello ,<span className="">Arjun</span>
          </p>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
