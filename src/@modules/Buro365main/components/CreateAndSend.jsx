import React from 'react';
import createandsend from "../../../assets/images/createandsend.png";

const CreateAndSend = () => {
  return (
    <div className='flex flex-col mt-20 font-tt-firs-neue'>

        <div className='flex justify-center w-full'>
          <div className='flex flex-col md:flex-row w-full  max-w-[1280px]'>
            <div className='w-full md:w-1/2 flex items-center justify-center'>
            <div className='flex flex-col px-4 md:px-0 gap-5'>
                <h3 className='text-2xl md:text-5xl font-bold leading-7 md:leading-9 '> <span className='text-primary'>Create</span> And <span className='text-primary'>Send</span> <br />
                  Offers In Just A Few Steps</h3>
                <p className='text-base  font-light text-graySite w-auto md:w-[26rem]'>In Büro365 you have the option of creating your offers either from the Offers menu item or directly from a contact . You then select the item and quantity and add a suitable cover letter. Optionally, you can store a discount for the individual items or in the entire offer or use customer-specific discounts.</p>
              </div>
            </div>
            <div className='w-full mt-10 md:mt-0 md:w-1/2 flex justify-center'>
              <img src={createandsend} className='' alt="" />
            </div>
          </div>
        </div>


    </div>
  )
}

export default CreateAndSend