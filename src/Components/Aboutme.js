import React from "react";
import woman1 from "../Assets/Images/fbf0fd77567e4dd7119dc58b66d8e56a.jpeg";

const Aboutme = () => {
  return (
    <div className="flex justify-center items-center pb-[5rem]">
      <div className="flex flex-col justify-center items-center w-[1440px] gap-[36px] ">
        <h1 className="text-[36px] font-700  leading-[48.6px]">About Me</h1>
        <div className="flex flex-col xl:flex-row gap-[48px]">
          <div className=" bg-[#171717] w-[355px] h-[393px] gap-[6px] py-[8px] px-0 rounded-[16px]">
            <div className="flex justify-center items-center">
              <img
                src={woman1}
                alt=""
                className="w-[340px] h-[308px] rounded-[8px]"
              />
            </div>

            <div className="flex flex-col justify-center items-center  py-[16px] px-[12px]">
              <span className="font-bold">Maxine Augusta</span>
              <span className="font-light">Rome, Italy</span>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] w-[855px]">
            <div>
              <h2 className="gap-[8px] text-[#E2DAE1] leading-[40.5px] text-[30px] font-400">
                I am passionate with telling stories through the lens
              </h2>
            </div>
            <div>
              <p className="leading-[27px]">
                Maxine Augusta, a seasoned luminary in the world of
                cinematography, brings decades of expertise and a profound love
                for storytelling through the lens. With a career spanning
                diverse genres, from classic dramas to cutting-edge
                documentaries, Maxine has left an indelible mark on the
                industry. Her keen eye for composition and mastery of light have
                defined unforgettable moments on the silver screen.{" "}
              </p>
            </div>
            <div>
              <p className="leading-[27px]">
                As a trailblazing senior cinematographer, Maxine not only
                captures images but crafts visual narratives that resonate with
                depth and emotion. Her dedication to the art form has garnered
                accolades, reflecting a lifelong commitment to the magic of
                cinematic expression. Beyond the camera, Maxine is a mentor,
                inspiring the next generation to see the world through the lens
                of possibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
