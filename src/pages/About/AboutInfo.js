import React from "react";
import img from '../../img/programmer.png'
export default function AboutInfo() {
  return (
    <div className="flex justify-between flex-wrap bg-slate-900">
        <div className="w-96 mt-5">
            <img src={img}/>
        </div>
      <div className="w-1/2 p-6 font-extrabold">
        <div>
          <span className="text-sky-700">Malumotlar</span>
          <h1 className="mt-8 text-5xl text-white font-extrabold">
            Why clients choose to work with us
          </h1>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl text-white">Flexible and experienced</h1>
          <p className="text-2xl text-slate-400 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            deleniti quia dignissimos corporis ducimus! Sunt illo sit
            repellendus doloribus cum labore eum. Porro error necessitatibus
            perferendis tempora quo suscipit ipsa?
          </p>
        </div>
      </div>
      
    </div>
  );
}
