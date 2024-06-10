import React from "react";
import { Outlet,Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="p-4 bg-red-300">
        <div>Logo</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-black font-semibold">Home</Link>
          <Link to="/owner" className="text-black font-semibold">Owner</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;