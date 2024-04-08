export default function Footer() {
  return (
    <div className="flex flex-row md:justify-between md:items-end justify-center items-center md:h-[12rem] bg-[#f6f4ee] text-[#010101] mt-[5rem] px-[4rem] md:py-[2rem] py-[1rem] rounded-t-[5rem]">
      <div className="flex flex-col gap-5">
        <div className="md:text-[35px] text-[20px] font-latee">نصنص</div>
        <div className=" tracking-tight font-ibm md:font-semibold text-[13px] md:flex hidden">
          نصنص هو تطبيق يهدف إلى توفير قائمة بالمقاهي المناسبة للعمل على
          اللابتوب في المغرب.
        </div>
      </div>

      <div className="font-ibm md:font-semibold md:flex hidden"> نصنص - حقوقكم واجباتنا.</div>
    </div>
  );
}
