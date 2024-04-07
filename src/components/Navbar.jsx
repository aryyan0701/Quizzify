import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {


  return (
    <>
    <div className="bg-blue-950 p-4 flex justify-between items-center">
      <div className="text-4xl font-bold text-white">Quizzify</div>
      <div className="flex justify-between items-center">
        <input
          className="rounded hidden lg:block border border-gray-600 py-1 px-2 me-4"
          type="text"
          placeholder="Search"
        />
        <FontAwesomeIcon className="text-2xl me-3 cursor-pointer text-white" icon={faMagnifyingGlass} />
        <h3 className="text-3xl font-bold text-white cursor-pointer">About</h3>
      </div>
    </div>
    </>
  );
}

export default Navbar;
