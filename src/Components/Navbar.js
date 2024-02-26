import React from "react";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex  justify-center items-center  ">
      <div className="flex justify-between items-center w-[1440px]">
        <div className="my-7 leading-[30.25px]">
          <h1 className="goldfish leading-[30.25px] text-[20px]">
            Maxine Augusta
          </h1>
          <span className=" leading-[20.25px] text-[15px] flex justify-center  items-center">
            Cinematographer
          </span>
        </div>
        <div>
          <div>
            <CgMenuMotion size={30} className="xl:hidden" />
          </div>
          <div className="my-7">
            <ul className="flex gap-[3rem]">
              <li className="leading-[27px] text-[20px]">Works</li>
              <li className="leading-[27px] text-[20px]">About Me</li>
              <li className="leading-[27px] text-[20px]">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
