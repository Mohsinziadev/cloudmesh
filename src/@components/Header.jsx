import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import websitelogo from "../assets/images/websiteLogo.png"
const navLinks = [
  {
    Link: "Home",
    To: "home",
  },
  {
    Link: "About Us",
    To: "aboutus",
  },
  {
    Link: "Contact Us",
    To: "contactus",
  },
  {
    Link: "Faqs",
    To: "faqs",
  },
  {
    Link: "Package & Price ",
    To: "packagePrice",
  },
  {
    Link: "Login",
    To: "login",
  },
];

function Header({ services }) {
  const [activeTab, setActiveTab] = useState("home");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col  shadow-md bg-white font-tt-firs-neue w-full relative  ">
      <header className="m-[0_auto] top-[0px] px-10 left-[0] w-[95%] py-0 md:py-5  flex-col box-border items-start justify-start max-w-[1440px] right-[0] z-[1]">
        <div className="self-stretch hidden md:flex flex-row items-center justify-between">
          <a href="/">
            <div className="flex gap-0   justify-center">
              <img src={websitelogo} className="h-10 w-32" />

            </div>
          </a>

          <nav className="hidden md:flex flex-row items-center justify-start gap-[50px] lg:flex lg:gap-[35px]">
            {navLinks.map((data, index) => {
              return (
                <div
                  key={index}
                  href="/"
                  onClick={() => setActiveTab(data.To)}
                  className="flex h-fit"
                >
                  <div
                  >
                    <div className={`text-black  text-base cursor-pointer ${activeTab === data.To ? "underline underline-offset-4 text-primary font-normal" : ""}`} >
                      {data.Link}
                    </div>
                  </div>
                </div>
              );
            })}

          </nav>
          <div>
            <button className="bg-primary px-6 py-2 rounded-full text-sm text-white ">get started</button>
          </div>
        </div>
      </header>
      <div className="md:hidden flex flex-col px-3 z-50">
        <div className="flex w-full py-5 justify-between items-center">
          <a href="/">
            <div className="flex gap-0  justify-center items-center">
              <div className="flex gap-0   justify-center">
                <img src={websitelogo} className="h-12 w-32" />
              </div>
            </div>
          </a>
          <div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl right-4 top-6 cursor-pointer md:hidden"
            >
              {!open ? (
                <div className="flex items-center justify-center">
                  <Bars3Icon className="h-6 w-6" />
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <XMarkIcon className="h-6 w-6" />
                </div>
              )}
            </div>
          </div>

        </div>

        <div
          className={`flex flex-col pt-10  md:items-center h-[100vh] z-10 rounded-l-sm lg:rounded-none lg:h-auto bg-white shadow-lg    lg:bg-transparent md:pb-0 pb-12 absolute md:static gap-10 md:z-auto  w-full  md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${open
            ? "right-[-25vw] top-[5.6rem] lg:top-0 "
            : "right-[-175vw] top-[4.5rem] lg:top-0"
            }`}
        >
          <ul className="md:flex text-white md:items-center m-0  lg:pt-0 lg:gap-10 text-md lg:text-xs font-light space-y-6 lg:space-y-0 ">
            {navLinks.map((data, index) => {
              return (
                <div
                  key={index}
                  href="/"
                  onClick={() => setActiveTab(data.To)}
                  className="flex h-fit"
                >
                  <div
                    className={`${services
                      ? "text-white"
                      : activeTab === data.To
                        ? "text-primary font-normal"
                        : "text-black"
                      } cursor-pointer [text-decoration:none] hover:text-primary relative text-lg text-left inline-block`}
                  >
                    <div className={`dark:text-white  text-base ${activeTab === data.To ? "underline underline-offset-4 font-normal" : ""}`}>
                      {data.Link}
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Header;
