import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoVenmo } from "react-icons/bi";
import { FaTwitch } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#E2DAE1]  text-black flex justify-center items-center  ">
      <div className="flex gap-[32px] flex-col justify-center items-center w-[1440px]">
        <div className="flex flex-col justify-center items-center gap-[32px]">
          <div>
            <h2 className="text-[36px] font-700">Contact Me</h2>
          </div>

          <div>
            <p className="text[20px] leading-[27px]">
              Reach out to me about a project or just say hello!
            </p>
          </div>
        </div>
        <div>
          <ul className="gap-[32px] flex justify-center items-center">
            <li>
              <FaYoutube size={24} />
            </li>
            <li>
              <FaTwitter size={24} />
            </li>
            <li>
              <FaLinkedin size={24} />
            </li>
            <li>
              <FaInstagram size={24} />
            </li>
            <li>
              <BiLogoVenmo size={24} />
            </li>
            <li>
              <FaTwitch size={24} />
            </li>
          </ul>
        </div>
        <div className="flex  gap-[90px]">
          <div className="flex items-center leading-[27px] text-[20px] gap-[12px]">
            <MdOutlineMail />
            <span>maxineaugustacinema@yahoo.com</span>
          </div>
          <div className="flex items-center leading-[27px] text-[20px] gap-[12px]">
            <FiPhone />
            <span>+1 (435) 452 7452</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
