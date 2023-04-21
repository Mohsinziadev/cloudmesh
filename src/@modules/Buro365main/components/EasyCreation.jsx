import React from 'react'
import creation from "../../../assets/images/easyCreation.png"
import websitelogoWhite from "../../../assets/images/burologowhite.png"
const EasyCreation = () => {
  return (
    <div className='flex flex-col mt-20 font-tt-firs-neue'>

      <div className='flex justify-center w-full '>
        <div className='flex flex-col md:flex-row w-full  max-w-[1280px]'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <img src={creation} className='' alt="" />
          </div>
          <div className='w-full md:w-1/2 flex items-center justify-center'>
            <div className='flex flex-col px-4 md:px-0 gap-5'>
              <h3 className='text-2xl md:text-5xl mt-10 md:mt-0 font-bold leading-7 md:leading-9'>  Easy Creation
                With <br />  <span className='text-primary'>Drag And Drop</span> </h3>
              <p className='text-base font-light text-graySite w-auto md:w-[26rem]'>
                All the other details and positions can be easily inserted on the computer with the mouse or on the smartphone with the finger. Editable text modules with further information can also be easily inserted into an invoice from templates. You can prepare offer templates or invoice templates in a modular way so that only the really important data has to be added to the respective customer. The craftsman software takes care of everything around it all by itself - including automated order confirmation.</p>
            </div>
          </div>

        </div>
      </div>

        <div className="flex w-full px-[5rem] mt-20 py-34 justify-center">
          <div className="flex flex-col justify-between h-[15rem] py-6 w-full bg-contain   bg-no-repeat bg-footerBgImage w-auto md:w-[55rem]">
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


    </div>
  )
}

export default EasyCreation