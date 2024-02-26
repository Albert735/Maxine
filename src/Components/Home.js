import React from "react";
// import maxine1 from "../Assets/Images/fbf0fd77567e4dd7119dc58b66d8e56a.jpeg";

const Home = () => {
  return (
    <div className="flex justify-center items-center pb-[4rem] ">
      <div className="bg-image w-[1440px] h-[1025px] opacity-[38%] blend-overlay">
        <div>
          <h1 className="goldfish text-[246px] text-[#E2DAE1] top-[175px]">
            MAXINE
          </h1>
          <div className="flex flex-col justify-center items-center gap-[32px]">
            <h2 className="text-[32px] leading-[43.2px] text-[#F0D7FC]">
              Transforming scenesinto visuals poetry,
              <span>one frame at a time</span>
            </h2>
            <button className="bg-white text-black leading-[21.6px] py-[12px] px-[20px] rounded-[8px] w-[259px]">
              Shoot me a message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
