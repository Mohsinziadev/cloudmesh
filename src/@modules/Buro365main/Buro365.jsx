import React, { useEffect, useState } from "react";
import HeroSec from "./components/HeroSec";
import CreateOffer from "./components/CreateOffer";
import PerfectInvoicing from "./components/PerfectInvoicing";
import CreateAndSend from "./components/CreateAndSend";
import SimpleInvoicing from "./components/SimpleInvoicing";
import WhyBüro365 from "./components/WhyBüro365";
import EasyCreation from "./components/EasyCreation";


const Buro365 = () => {

  return (
    <div className="flex flex-col">
      <HeroSec />
      <CreateOffer />
      <PerfectInvoicing />
      <CreateAndSend />
      <SimpleInvoicing />
      <WhyBüro365 />
      <EasyCreation />
    </div>
  );
};

export default Buro365;
