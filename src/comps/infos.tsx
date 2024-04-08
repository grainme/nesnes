import { ArrowElbowDownLeft, ArrowElbowDownRight } from "@phosphor-icons/react";

export default function Infos() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:flex md:flex-row w-full md:gap-[10rem] justify-between items-center md:px-[15rem]">
        <div className="md:text-[19px] font-poppins md:flex hidden">
          <ArrowElbowDownLeft size={32} />
        </div>
        <div className="text-[10px] md:text-[12px] tracking-tighter font-semibold font-mono flex items-center justify-center">
          [ قريباً غادي نطلقو التطبيق على ود أيفون و أندرويد ]
        </div>
        <div className="md:text-[19px] font-poppins md:flex hidden">
          <ArrowElbowDownRight size={32} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full max-h-[20rem] justify-between items-center px-[15rem] mt-11">
        <div className="flex flex-col md:gap-9 md:w-2/3 w-[100vw] md:text-[19px] md:pl-[8rem] font-ibm font-light">
          <div className="flex md:flex-row flex-col gap-9 w-[80%] justify-center items-center pr-[2rem]">
            <div className="flex flex-col gap-5 md:w-[13rem]">
              <div className="flex flex-row gap-3 items-center underline">
                <span className="bg-[#dcaf26] min-h-[12px] min-w-[12px] rounded-full md:inline-block hidden unde"></span>
                مواقع المقاهي
              </div>
              <div className="md:text-[17px] text-[12px] text-[#ffffffac]">
                نصنص يساعدك في العثور على أفضل المقاهي للعمل والدراسة في المغرب.
              </div>
            </div>
            <div className="flex flex-col gap-5 md:w-[13rem]">
              <div className="flex flex-row gap-3 items-center underline">
                <span className="bg-[#dcaf26] min-h-[12px] min-w-[12px] rounded-full md:inline-block hidden"></span>
                ميزات التطبيق
              </div>{" "}
              <div className="md:text-[17px] text-[12px] text-[#ffffffac]">
                يوفر نصنص قائمة بالمقاهي التي توفر بيئة ملائمة للعمل على
                اللابتوب.
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex justify-start items-start font-ibm tracking-tighter md:w-1/3 md:text-[250px] text-[120px]">
          <div className="flex flex-col justify-start items-start">
            <div>
              ١٤<span className="text-[#dcaf26]">٤٥</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
