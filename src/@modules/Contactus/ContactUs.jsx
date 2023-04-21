import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";

const ContactUs = () => {
  return (
    <div className="flex flex-col font-tt-firs-neue">
      <div className="flex justify-center items-center bg-cover bg-center bg-no-repeat w-full bg-heroBgImage h-[40rem] ">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 bg-white rounded-full mt-4">
            </div>
            <div>
              <h3 className="underline flex text-2xl text-white underline-offset-4 ">Get In Touch</h3>
            </div>

          </div>
          <h3 className="text-12xl font-bold tracking-wide leading-[50px] text-white text-center">
            Contact Us
          </h3>
          <p className="text-2xl w-auto md:w-[40rem] text-center flex text-white">
            Don’t hesitate to contact  us about anything, we look forward  and welcome your concerns and suggestions.
          </p>

        </div>
      </div>
      <div className="flex px-10 md:px-60 ">
        <div className="flex flex-col w-full gap-10 md:flex-row bg-white shadow-2xl ">
          <div className="w-full flex flex-col gap-8 md:w-1/2 p-10 pl-20">
            <div className="flex gap-4  items-center">
              <UserIcon src="" alt="" className="h-5 w-5 text-primary" />
              <input type="text" className=" text-sm border-b-2 h-10 w-full" placeholder="Name *" />

            </div>
            <div className="flex gap-4  items-center">
              <PhoneIcon src="" alt="" className="h-5 w-5 text-primary" />
              <input type="text" className=" text-sm border-b-2 h-10 w-full" placeholder="Phone No *" />

            </div>
            <div className="flex gap-4  items-center">
              <EnvelopeIcon src="" alt="" className="h-5 w-5 text-primary" />
              <input type="email" className=" text-sm border-b-2 h-10 w-full" placeholder="Email" />

            </div>
            <div className="flex gap-4  items-center">
              <ChatBubbleLeftIcon src="" alt="" className="h-5 w-5 text-primary" />
              <textarea type="text" className=" text-sm border-b-2 h-30 w-full" placeholder="Message" />

            </div>

          </div>
          <div className="w-full p-2 md:w-1/2">
            <div className="flex h-full bg-primary py-20 md:py-0 justify-center items-center ">
              <div className="flex flex-col gap-5 ">
                <div className="flex gap-4   items-center">
                  <MapPinIcon src="" alt="" className="h-3 w-3 text-white" />
                  <h3 className="text-sm text-white">Zollwegli 2, 4704 Niederbipp, Bern</h3>
                </div>
                <div className="flex gap-4  items-center">
                  <PhoneIcon src="" alt="" className="h-3 w-3 text-white" />
                  <h3 className="text-sm text-white">+123 456 7899</h3>
                </div>
                <div className="flex gap-4  items-center">
                  <EnvelopeIcon src="" alt="" className="h-3 w-3 text-white" />
                  <h3 className="text-sm text-white">info@buero-365.com</h3>
                </div>
              </div>

            </div>

          </div>


        </div>


      </div>
    </div>
  );
};

export default ContactUs;
