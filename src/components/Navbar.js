import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-16 bg-blue-600  flex items-center px-10 py-2 justify-between">
      <BrowserRouter>
        <Link to="/">
          <h1 className="text-white text-3xl font-semibold font-monterse">
            Crud
          </h1>
        </Link>
        <Link
          to="add-user"
          className="w-48 bg-white text-blue-400 flex justify-center items-center font-semibold h-12 rounded-md py-2"
        >
          Add New User
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
