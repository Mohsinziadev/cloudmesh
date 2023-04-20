import React from "react";
import websitelogoWhite from "../assets/images/burologowhite.png"
import websitelogo from "../assets/images/websiteLogo.png";
import social from "../assets/images/Social.png";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer className="mt-20 font-tt-firs-neue">
      <div className="flex justify-center w-full">
        <div className="w-full  max-w-[1080px] ">
          <div className="flex  w-full px-[5rem] py-34 ">
            <div className="flex flex-col justify-between h-[15rem] py-6 w-full bg-contain   bg-no-repeat bg-footerBgImage">
              <div className="flex gap-0   justify-center">
                <img src={websitelogoWhite} className="h-14 w-44" />
              </div>
              <div className="flex justify-center">
                <h3 className="text-3xl text-white">Lets start your journey with Buro 365</h3>
              </div>
              <div className="flex justify-center">
                <button className="bg-white px-6 py-2 rounded-full text-2xl text-primary ">get started!</button>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between  py-20">
            <div className="w-3/12 flex justify-center">
             <div className="flex flex-col gap-6">
                <img src={websitelogo} className="h-10 w-32" />
                <p className="text-base  font-base">Büro-365 is the ideal invoicing program for craftsmen and moving companies.</p>
                <div className="flex gap-4">
                  <img src={social} className="h-8 w-42" />
                </div>
             </div>
            </div>
            <div className="w-3/12 flex justify-end">
             <div className="flex flex-col w-fit">
                <h3 className="text-primary text-lg font-semibold">Company</h3>
                <ul className="flex text-base text-graySite flex-col gap-4 mt-4">
                  <li>About us </li>
                  <li>Services </li>
                  <li>Packages </li>
                  <li>Pricing </li>
                </ul>
              </div>
            </div>
            <div className="w-3/12 flex justify-end">
              <div className="flex flex-col w-fit">
                <h3 className="text-primary text-lg font-semibold">Help</h3>
                <ul className="flex text-base text-graySite flex-col gap-4 mt-4">
                  <li>Customer Support </li>
                  <li>FAQs</li>
                  <li>Terms & Conditions </li>
                  <li>Privacy Policy </li>
                </ul>
              </div>
            </div>
            <div className="w-3/12 flex justify-end">
              <div className="flex flex-col w-fit">
                <h3 className="text-primary text-lg font-semibold">Contact</h3>
                <ul className="flex text-base text-graySite flex-col gap-4 mt-4">
                  <li className="flex gap-3 items-center">
                  <PhoneIcon className="h-4 w-4 text-primary" />  +123 456 7899 </li>
                  <li className="flex gap-3 items-center">  <EnvelopeIcon className="h-4 w-4 text-primary" /> info@buero-365.com </li>
                  <li className="flex gap-3 items-center">  <MapPinIcon className="h-4 w-4 text-primary" /> Zollwegli 2, 4704 <br /> Niederbipp, Bern </li>
                </ul>
              </div>
            </div>



          </div>

        </div>
      </div>
      <div className="flex mt-5 md:mt-10 bg-primary p-2 justify-center items-center">
        <div className="text-xs font-normal text-white">
          © Developed by Mohsin zia
        </div>
      </div>
    </footer>
  );
}

export default Footer;
