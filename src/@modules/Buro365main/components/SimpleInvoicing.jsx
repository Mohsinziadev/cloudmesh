import React from 'react'
import simpleInvoice from "../../../assets/images/Simpleinvoicing.png"

const SimpleInvoicing = () => {
  return (
    <div className='flex flex-col mt-20 font-tt-firs-neue'>

      <div className='flex justify-center w-full '>
        <div className='flex flex-col md:flex-row w-full  max-w-[1280px]'>
          <div className='w-full md:w-1/2 order-1 md:order-0 flex justify-center'>
            <img src={simpleInvoice} className='' alt="" />
          </div>
          <div className='w-full md:w-1/2 order-0 md:order-1 flex items-center justify-center'>
            <div className='flex flex-col px-4 md:px-0 gap-5'>
              <h3 className='text-2xl md:text-5xl font-bold '>  Simple <span className='text-primary'>Invoicing</span> </h3>
              <p className='text-base font-light text-graySite w-auto  md:w-[26rem]'>You can create an invoice from your offers in just a few clicks . In Büro365, the consecutive number range is preset, which is relevant for your accounting. You can adapt the format for the number ranges to suit your own needs in the settings.</p>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default SimpleInvoicing