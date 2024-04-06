import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex flex-row justify-between items-center h-[5rem] pt-[3rem] mb-4 px-[7rem]">
      <Link to="/">
        <div className="text-[35px] font-latee">نصنص</div>
      </Link>

      <div className="flex flex-row gap-3">
        <div className="flex flex-row gap-2 px-4 py-[.5rem] items-center justify-center font-normal cursor-pointer  rounded-md">
          <div className="font-cooper text-[14px]">التسجيل </div>
        </div>
        <div className="cursor-pointer flex flex-row gap-2 px-4 py-[.5rem] items-center justify-center font-normal bg-[#f6f4ee] text-[#010101] rounded-md">
          <Link to="/cities">
            <div className="font-cooper text-[14px] ">قائمة المدن </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
