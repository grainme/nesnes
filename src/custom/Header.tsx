import Menu from "@/modulesComps/Menu";
import Floating_Images from "./FloatingImages/page";
import Infos from "./Infos";
import Line from "./Line/Line";
import Footer from "./Footer";
import Form from "./Form";

("use client");

export default function Header() {
  return (
    <div className="flex flex-col font-ibm md:gap-[7rem] gap-[4rem] bg-[#010101] text-[#f6f4ee] min-h-[100vh] overflow-hidden">
      <Menu />
      <Floating_Images />
      <Infos />
      <div className="md:px-[15rem] md:mt-10">
        <Line />
      </div>
      <Form />
      <Footer />
    </div>
  );
}
