import React from 'react'
import createOffer from "../../../assets/images/createOfferimg.png"
const CreateOffer = () => {
  return (
    <div className='flex flex-col mt-20 font-tt-firs-neue'>
      <div className='flex bg-createOfferBgImage justify-center pt-24 h-[30rem] bg-cover'>
        <div className='flex justify-center w-full '>
          <div className='flex w-full  max-w-[1280px]'>
            <div className='w-1/2 flex items-center justify-center'>
              <div className='flex flex-col gap-5'>
                <h3 className='text-5xl font-bold '>CREATE <span className='text-primary'>OFFERS &</span> &nbsp; _______ <br />
                  <span className='text-primary'>INVOICES</span> WITH Büro-365</h3>
                <p className='text-sm font-light text-graySite w-[26rem]'>Write offers and invoices for craftsmen and moving companies. With Büro365 you create and manage all offers and invoices digitally. In addition, you can generate additional fields for important information such as B. Moving from, moving to, etc</p>
              </div>
            </div>
            <div className='w-1/2 flex justify-center'>
              <img src={createOffer} className='' alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreateOffer