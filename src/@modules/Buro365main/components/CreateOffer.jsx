import React from 'react'
import createOffer from "../../../assets/images/createOfferimg.png"
const CreateOffer = () => {
  return (
    <div className='flex flex-col mt-20 font-tt-firs-neue'>
      <div className='flex bg-createOfferBgImage justify-center pt-24 h-auto md:h-[30rem] bg-cover'>
        <div className='flex justify-center w-full '>
          <div className='flex flex-col md:flex-row w-full  max-w-[1280px]'>
            <div className='w-full md:w-1/2  flex items-center justify-center'>
              <div className='flex flex-col px-5 md:px-0  gap-5'>
                <h3 className='text-2xl md:text-5xl font-bold  '>CREATE <span className='text-primary'>OFFERS &</span> &nbsp; _______ <br />
                  <span className='text-primary'>INVOICES</span> WITH Büro-365</h3>
                <p className='text-sm font-light text-graySite w-auto md:w-[26rem]'>Write offers and invoices for craftsmen and moving companies. With Büro365 you create and manage all offers and invoices digitally. In addition, you can generate additional fields for important information such as B. Moving from, moving to, etc</p>
              </div>
            </div>
            <div className='w-full mt-20 md:mt-0 md:w-1/2 flex justify-center'>
              <img src={createOffer} className='' alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreateOffer