import React from "react";

export default function Category() {
  return (
    <div className=" z-auto	 flex justify-center w-full align-middle mt-28">
      <div className="w-screen md:w-10/12 bg-white p-8 rounded-3xl flex justify-around flex-wrap  shadow-lg">
        <button class="border w-auto transition-all lg:w-1/4 	 justify-center hover:bg-blue-600 hover:text-white text-gray-800 font-bold p-4  rounded inline-flex items-center">
          <span className="text-2xl font-medium">Maketi</span>
        </button>
        <button class="border  transition-all lg:w-1/4 justify-center	 hover:bg-blue-600 hover:text-white text-gray-800 font-bold p-4  rounded inline-flex items-center">
          <span className="text-2xl font-medium ">HTML/css</span>
        </button>
        <button class="border  transition-all lg:w-1/4	justify-center hover:bg-blue-600 hover:text-white   text-gray-800 font-bold p-4 rounded inline-flex items-center">
          <span className="text-2xl font-medium ">JavaScript</span>
        </button>
        <button class="border transition-all lg:w-1/4	justify-center hover:bg-blue-600 hover:text-white text-gray-800 font-bold p-4  rounded inline-flex items-center">
          <span className="text-2xl font-medium ">React</span>
        </button>
      </div>
    </div>
  );
}
