import React from "react";

export default function Category() {
  return (
    <div className=" flex justify-center w-full align-middle p-28">
      <div className="w-2/3 bg-white p-8 rounded-3xl flex justify-between  shadow-lg">
        <button class="border  transition-all	 hover:bg-blue-600 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span className="text-2xl font-medium pl-10 pr-10">Maketi</span>
        </button>
        <button class="border transition-all	 hover:bg-blue-600 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span className="text-2xl font-medium pl-10 pr-10">Download</span>
        </button>
        <button class="border transition-all	 hover:bg-blue-600 hover:text-white   text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span className="text-2xl font-medium pl-10 pr-10">Download</span>
        </button>
        <button class="border transition-all	 hover:bg-blue-600 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span className="text-2xl font-medium pl-10 pr-10">Download</span>
        </button>
      </div>
    </div>
  );
}
