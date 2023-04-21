import React from "react";
import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";
import { UserMinusIcon } from "@heroicons/react/24/solid";
import { CloudIcon } from "@heroicons/react/24/solid";

const cardsData = [
  { cardIcon: <ShieldExclamationIcon />, title: "Central Administration", desc:"Write offers and invoices for craftsmen and moving  is companies." },
  {
    cardIcon: <PresentationChartLineIcon/>, title: "Lorem Ipsum dollar", desc: "Write offers and invoices for craftsmen and moving  is companies." },
  {
    cardIcon: <UserMinusIcon />, title: "Central Administration", desc: "Write offers and invoices for craftsmen and moving  is companies." },
  {
    cardIcon: <CloudIcon />, title: "Lorem Ipsum Dollar Smith", desc: "Write offers and invoices for craftsmen and moving  is companies." },

];

const HeroSec = () => {
  return (
    <div className="flex flex-col font-tt-firs-neue">
      <div className="flex justify-center items-center bg-cover bg-center bg-no-repeat w-full bg-heroBgImage h-[40rem] ">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-12xl font-bold tracking-wide leading-[50px] text-white text-center">
            Invoice Program For <br />
            Craftsman{" "}
          </h3>
          <p className="text-2xl flex text-white">
            Büro-365 is the ideal invoicing program for craftsmen and moving
            companies.
          </p>
          <div className="flex font-light">
            <button className="font-normal  bg-primary flex px-6 py-2  rounded-full text-3xl text-white ">
              get started!
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 px-10 md:px-20 -mt-20">
        {cardsData.map((data,index) => {
          return (
            <div className="col-12 md:w-2/6  flex justify-center">
              <div className="flex flex-col rounded-lg gap-5 py-10 shadow-2xl p-6">

                <div className="h-10 text-primary w-10">{data.cardIcon}</div>
                <h3 className="text-black font-normal text-2xl pr-20 leading-6">{data.title}</h3>
                <p className="text-graySite">{data.desc}</p>
                <div className="flex justify-end text-primary">
                  <button className="font-normal">Lead More {">"}</button>
                </div>

              </div>
            </div>
          )
        })}


      </div>
    </div>
  );
};

export default HeroSec;
