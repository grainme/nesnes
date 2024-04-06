export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-end h-[12rem] bg-[#f6f4ee] text-[#010101] mt-[5rem] px-[4rem] py-[2rem] rounded-t-[5rem]">
      <div className="flex flex-col gap-5">
        <div className="text-[35px] font-latee">نصنص</div>
        <div className=" tracking-tight font-ibm font-semibold">
          نصنص هو تطبيق يهدف إلى توفير قائمة بالمقاهي المناسبة للعمل على
          اللابتوب في المغرب.
        </div>
      </div>

      <div className="font-ibm font-semibold"> نصنص - حقوقكم واجباتنا.</div>
    </div>
  );
}
