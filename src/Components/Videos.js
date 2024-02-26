import React from "react";
import gatorade from "../Assets/Images/gatorade.png";
import gatorade1 from "../Assets/Images/e6d75aecb1baaef981bf37df6c4a8037.png";
import newbalancepic from "../Assets/Images/4b48cf1d616684839191b306dea68097.png";
import newbalannce from "../Assets/Images/newbalance.png";
import cocacola from "../Assets/Images/f34332f8454d76995d7bb0f516a3aabc.png";
import cocacola1 from "../Assets/Images/cocacola1.png";
import nba1 from "../Assets/Images/nba.png";
import nba from "../Assets/Images/5e4ebb7f85279ac65b7d556a3678c425.png";
import irish from "../Assets/Images/irish.png";
import jameson from "../Assets/Images/jameson.png";
import everlast from "../Assets/Images/evelasting.png";
import everlast1 from "../Assets/Images/everlastlogo.png";
import woman from "../Assets/Images/woman.png";
import levis from "../Assets/Images/levis.png";
import schoolgirl from "../Assets/Images/schoolgirl.png";

const Videos = () => {
  return (
    <div className=" flex justify-center items-center gap-[64px] pb-[5rem]">
      <div className=" grid grid-cols-3 w-[1302px] gap-[48px]">
        {" "}
        <div className="bg-[#171717] pt-[8px] w-[413px] h-[495px] flex flex-col rounded-[16px] hover:bg-[#E2DAE1] hover:text-black duration-100">
          <div className="flex items-center justify-center ">
            <img
              src={gatorade}
              alt=""
              className="h-[414px] w-[397px] rounded-[16px]  "
            />
          </div>

          <div className="flex flex-row items-center gap-[12px]  py-[16px] px-[12px] h-[73px]">
            <img
              src={gatorade1}
              alt=""
              className="h-[33px] w-[40px] rounded-[200px]"
            />
            <div className="flex flex-col justify-center ">
              <span className="text-[20px]">Gatorade</span>
              <span className="text-[15px]">Commercial</span>
            </div>
          </div>
        </div>
        <div className="bg-[#171717] pt-[8px] w-[413px] h-[495px] flex flex-col rounded-[16px] hover:bg-[#E2DAE1] hover:text-black duration-100">
          <div className="flex items-center justify-center ">
            <img
              src={newbalancepic}
              alt=""
              className="h-[414px] w-[397px] rounded-[16px]"
            />
          </div>

          <div className="flex flex-row items-center gap-[12px]  py-[16px] px-[12px] h-[73px]">
            <img
              src={newbalannce}
              alt=""
              className="h-[33px] w-[40px] rounded-[200px]"
            />
            <div className="flex flex-col justify-center ">
              <span className="text-[20px]">New Balance</span>
              <span className="text-[15px]">Commercial</span>
            </div>
          </div>
        </div>
        <div className="bg-[#171717] pt-[8px] w-[413px] h-[495px] flex flex-col rounded-[16px] hover:bg-[#E2DAE1] hover:text-black duration-100">
          <div className="flex items-center justify-center ">
            <img
              src={cocacola}
              alt=""
              className="h-[414px] w-[397px] rounded-[16px] "
            />
          </div>

          <div className="flex flex-row items-center gap-[12px]  py-[16px] px-[12px] h-[73px]">
            <img
              src={cocacola1}
              alt=""
              className="h-[33px] w-[40px] rounded-[200px]"
            />
            <div className="flex flex-col justify-center ">
              <span className="text-[20px]">Coca-Cola</span>
              <span className="text-[15px]">Commercial</span>
            </div>
          </div>
        </div>
        <div className="bg-[#171717] pt-[8px] w-[413px] h-[495px] flex flex-col rounded-[16px] hover:bg-[#E2DAE1] hover:text-black duration-100">
          <div className="flex items-center justify-center ">
            <img
              src={nba}
              alt=""
              className="h-[414px] w-[397px] rounded-[16px]"
            />
          </div>

          <div className="flex flex-row items-center  gap-[12px]  py-[16px] px-[12px] h-[73px]">
            <img src={nba1} alt="" className="h-[33px] w-[40px] " />
            <div className="flex flex-col justify-center ">
              <span className="text-[20px]">NBA</span>
              <span className="text-[15px]">Commercial</span>
            </div>
          </div>
        </div>
        <div className="bg-[#171717] pt-[8px] w-[413px] h-[495px] flex flex-col rounded-[16px] hover:bg-[#E2DAE1] hover:text-black duration-100">
          <div className="flex items-center justify-center ">
            <img
              src={irish}
              alt=""
              className="h-[414px] w-[397px] rounded-[16px]"
            />
          </div>

          <div className="flex flex-row items-center  gap-[12px]  py-[16px] px-[12px] h-[73px]">
            <img src={jameson} alt="" className="h-[33px] w-[40px] " />
            <div className="flex flex-col justify-center ">
              <span className="text-[20px]">Jameson Irish Whisky</span>
              <span className="text-[15px]">Commercial</span>
            </div>
          </div>
        </div>
        <div className="bg-[#171717] pt-[8px] w-[413px] h-[495px] flex flex-col rounded-[16px] hover:bg-[#E2DAE1] hover:text-black duration-100">
          <div className="flex items-center justify-center ">
            <img
              src={everlast}
              alt=""
              className="h-[414px] w-[397px] rounded-[16px]"
            />
          </div>

          <div className="flex flex-row items-center  gap-[12px]  py-[16px] px-[12px] h-[73px]">
            <img
              src={everlast1}
              alt=""
              className="h-[33px] w-[40px] "
            />
            <div className="flex flex-col justify-center ">
              <span className="text-[20px]">Everlast</span>
              <span className="text-[15px]">Commercial</span>
            </div>
          </div>
        </div>
        <div className="bg-[#171717] pt-[8px] w-[413px] h-[495px] flex flex-col rounded-[16px] hover:bg-[#E2DAE1] hover:text-black duration-100">
            <div className="flex items-center justify-center ">
                 <img
            src={woman}
            alt=""
            className="h-[414px] w-[397px] rounded-[16px]"
          /> 
            </div>
        
          <div className="flex flex-row items-center  gap-[12px]  py-[16px] px-[12px] h-[73px]">
            <img
              src={levis}
              alt=""
              className="h-[33px] w-[40px]"
            />
            <div className="flex flex-col justify-center ">
              <span className="text-[20px]">Levi's</span>
              <span className="text-[15px]">Commercial</span>
            </div>
          </div>
        </div>
        <div className="bg-[#171717] pt-[8px] w-[413px] h-[495px] flex flex-col rounded-[16px] hover:bg-[#E2DAE1] hover:text-black duration-100">
            <div className="flex items-center justify-center " >
                <img
            src={schoolgirl}
            alt=""
            className="h-[414px] w-[397px] rounded-[16px]"
          />
            </div>
          
          <div className="flex flex-row items-center gap-[12px]  py-[16px] px-[12px] h-[73px]">
            <img
              src={gatorade1}
              alt=""
              className="h-[33px] w-[40px] "
            />
            <div className="flex flex-col justify-center ">
              <span className="text-[20px]">Gatorade</span>
              <span className="text-[15px]">Commercial</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
