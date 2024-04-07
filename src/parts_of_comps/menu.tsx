import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex flex-row justify-between items-center md:h-[5rem] md:pt-[3rem] pt-[2rem] md:mb-4 md:px-[7rem] px-[2rem]">
      <Link to="/">
        <div className="md:text-[35px] text-[26px] font-latee">نصنص</div>
      </Link>
      <div className="cursor-pointer flex flex-row md:gap-2 md:px-4 px-3 md:py-[.5rem] py-[.4rem] items-center justify-center font-normal bg-[#f6f4ee] text-[#010101] rounded-md">
        <Link to="/cities">
          <div className="font-cooper md:text-[14px] text-[10px]">قائمة المدن </div>
        </Link>
      </div>
    </div>
  );
}
