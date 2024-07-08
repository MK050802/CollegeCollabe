import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-orange-400 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-customColor3 border border-white
    duration-500"
    >
      {/* <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  Hover me
</button> */}
      {props.children}
    </button>
  );
};

export default Button;
