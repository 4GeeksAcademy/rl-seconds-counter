import React from "react";

export function Card(props) {
    return (
      

  <div className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <p className="text-gray-700 text-9xl text-center">
    {props.theValue}
    </p>
  </div>
    );
};