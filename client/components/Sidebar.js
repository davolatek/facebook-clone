import Image from "next/image";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { MdGroup, MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import {BsStopwatch} from "react-icons/bs"
import { useSession } from "next-auth/react";

const Sidebar = () => {

   const {data:session} =  useSession()
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl min-w-[302px]">
      <div className="flex items-center py-3 pl-4 space-x-2 hover:bg-gray-300 rounded-l-xl cursor-pointer">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full"
        />
        <p className="hidden sm:inline-flex font-medium">{session?.user.name}</p>
      </div>
      <SidebarItem Icon= {ImUser} value = "Friends" />
      <SidebarItem Icon= {MdGroup} value = "Groups" />
      <SidebarItem Icon= {AiOutlineShop} value = "Marketplace" />
      <SidebarItem Icon= {MdOutlineOndemandVideo} value = "Watch" />
      <SidebarItem Icon= {BsStopwatch} value = "Memories" />
      <SidebarItem Icon= {MdOutlineExpandMore} value = "See More" />
    </div>
  );
};

export default Sidebar;
