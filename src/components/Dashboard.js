import React, { useState } from "react";
import Menu from "./Menu";
import MultilevelSidebar from "./multilevel-sidebar.component";
import { AiOutlineMenu } from "react-icons/ai";

import Navigation from "./Navigation";
import { Chartart } from "./Chartart";
import { TabularData } from "./TabularData";

export const Dashboard = () => {
  const [open, setOpen] = useState(true);

  //   const handleSidebarToggle = (isOpen) => {
  //     setOpen(isOpen);
  //   };

  return (
    <div>
      <MultilevelSidebar
        open={open}
        options={Menu}
        // onToggle={handleSidebarToggle}
        header=""
      />
      <div>
        {/* <button onClick={() => handleSidebarToggle(false)}>
          <AiOutlineMenu />
        </button> */}
      </div>
      <Navigation />
      <Chartart />
      <TabularData />
    </div>
  );
};
