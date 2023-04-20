import React, { useEffect, useState } from "react";
import HeroSec from "./components/HeroSec";
import CreateOffer from "./components/CreateOffer";
import PerfectInvoicing from "./components/PerfectInvoicing";


const Buro365 = () => {

  return (
    <div className="flex flex-col">
      <HeroSec />
      <CreateOffer />
      <PerfectInvoicing />
    </div>
  );
};

export default Buro365;
