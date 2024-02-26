import React from "react";
import adidas from "../Assets/Images/adidas.png";
import jordan from "../Assets/Images/jordan.png";
import garnier from "../Assets/Images/garnier.png";
import carhartt from "../Assets/Images/carhartt.png";
import johnnyalker from "../Assets/Images/johnnywalker.png";
import nfl from "../Assets/Images/nfl.png";
import gatorade1 from "../Assets/Images/e6d75aecb1baaef981bf37df6c4a8037.png";
import newbalance from "../Assets/Images/newbalance.png";
import jameson from "../Assets/Images/jameson.png";
import nba from "../Assets/Images/nba.png";

const Branding = () => {
  return (
    <div className="flex  flex-col justify-center items-center pb-[3rem]">
      <div className="flex flex-col justify-center items-center gap-[40px] my-[5rem]">
        <div className="h-[32px]">
          <h3 className="text-[24px]">
            BRANDS I HAVE WORKED AND COLLABERATED WITH
          </h3>
        </div>
        <div className="w-[879px] h-[32px] ">
          <ul className="flex gap-10">
            <li>
              <img src={adidas} alt="" className="h-[32px] w-[47.37]" />
            </li>
            <li>
              <img src={jordan} alt="" className="h-[32px] w-[53.33px]" />
            </li>
            <li>
              <img src={garnier} alt="" className="h-[32px] w-[114px]" />
            </li>
            <li>
              <img src={carhartt} alt="" className="h-[32px] w-[48.76px]" />
            </li>
            <li>
              <img src={johnnyalker} alt="" className="h-[32px] w-[56.89px]" />
            </li>
            <li>
              <img src={nfl} alt="" className="h-[32px] w-[32px]" />
            </li>
            <li>
              <img src={gatorade1} alt="" className="h-[32px] w-[38px]" />
            </li>
            <li>
              <img src={newbalance} alt="" className="h-[32px] w-[65px]" />
            </li>
            <li>
              <img src={jameson} alt="" className="h-[32px] w-[58px]" />
            </li>
            <li>
              <img src={nba} alt="" className="h-[32px] w-[81px]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Branding;
