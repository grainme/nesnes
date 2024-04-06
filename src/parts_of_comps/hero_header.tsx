import { Cardholder } from "@phosphor-icons/react";

export default function Hero_Header() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center rounded-e-xl h-[30rem] mt-[5rem]">
        <div className="w-1/2 h-full flex flex-col justify-start overflow-hidden rounded-xl">
          <img
            src="/cafe.jpg"
            alt="café"
            className="self-start max-w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col w-1/2 h-full justify-between items-start pl-[5rem] py-2">
          <div className="flex flex-col items-start">
            <div className="text-[80px]">
              you know <span className="font-semibold">flash!</span>
            </div>
            <p className="text-lg text-gray-700">
              our goal is to make your experience lightning-fast!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="rotate-3 flex flex-row w-[25rem] gap-2 items-center bg-yellow-100 px-7 py-2 rounded-lg text-[20px]">
              <div>
                <Cardholder size={24} />
              </div>
              <div>earn credits and get free meals!</div>
            </div>
            <div className="rotate--3 flex flex-row w-[25rem] gap-2 items-center bg-pink-100 px-7 py-2 rounded-lg text-[20px]">
              <div>
                <Cardholder size={24} />
              </div>
              <div>bunch of prizes and suprises :)</div>
            </div>
            <div className="rotate-86 flex flex-row w-[25rem] gap-2 items-center bg-blue-100 px-7 py-2 rounded-lg text-[20px]">
              <div>
                <Cardholder size={24} />
              </div>
              <div>new meals and prettier than ever?!</div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-4">
              <a
                href="#"
                className="bg-black hover:bg-[#2d2d2d] rounded-lg py-4 px-8 text-white"
              >
                Get Started
              </a>
              <a href="#" className="border-2 rounded-lg py-4 px-8">
                Mobile Access
              </a>
            </div>
            <div className="w-[30rem] text-[#8e8e8e]">
              the good thing is that you won't need a credit card or even some
              kind of digital currency, it is all streamlined!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
