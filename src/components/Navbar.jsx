import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="bg-blue-950 p-4 flex justify-between items-center">
      <div className="text-4xl font-bold text-white">Quizzify</div>
      <div>
        <input
          className="rounded hidden lg:block border border-gray-600 py-1 px-2"
          type="text"
          placeholder="Search"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}

export default Navbar;
