import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 lg:ml-64 bg-black h-screen">
        <div className="p-4">
          <Button
            className="lg:hidden text-gray-800 bg-gray-100 p-2 rounded focus:outline-none"
            onClick={toggleSidebar}
          >
            {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </Button>
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p className="mt-2 text-gray-600">
            This is the main content area. The sidebar can be toggled on smaller screens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

