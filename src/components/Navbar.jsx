import React from "react";

function Navbar() {
  return (
    <div className="bg-stone-100 p-4 flex justify-between items-center">
      <div className="text-4xl font-bold">Quizzify</div>
      <div>
        <input
          className="rounded border border-gray-600 py-1 px-2"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Navbar;
