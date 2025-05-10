import React from "react";

import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="max-w-5xl border-l border-r mx-auto">
      <Outlet />
    </div>
  );
};

export default AppLayout;
