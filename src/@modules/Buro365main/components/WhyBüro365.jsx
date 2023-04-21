import React from 'react'
import whyBhura from "../../../assets/images/withBüro365.png"

const WhyBüro365 = () => {
  return (
    <div className='flex flex-col mt-20 font-tt-firs-neue'>

      <div className='flex justify-center w-full '>
        <div className='flex flex-col md:flex-row w-full  max-w-[1280px]'>
          <div className='w-full md:w-1/2 flex items-center justify-center'>
            <div className='flex flex-col px-4 md:px-0 gap-5'>
              <h3 className='text-2xl md:text-5xl font-bold '>With <span className='text-primary'>Büro365</span> You Stay <span className='text-primary'>Mobile</span></h3>

              <p className='text-base font-light text-graySite w-auto md:w-[26rem]'>Access your data on the go. Regardless of whether addresses or specific customer data – call up everything at any time on the go. You can also use all functions on your smartphone, from preparing an offer to sending an invoice, all modules are freely available and adapted to your device.</p>
            </div>
          </div>
          <div className='w-1/2 mt-10 md:mt-0 flex justify-center'>
            <img src={whyBhura} className='' alt="" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default WhyBüro365