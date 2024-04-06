("use client");
import citiesData from "../../public/database/cities.json";
import { ArrowElbowDownLeft, ArrowElbowDownRight } from "@phosphor-icons/react";
import Menu from "../parts_of_comps/menu";
import Floating_Images from "./floating_images/page";
import Footer from "./footer";
import Line from "./line/line";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

const options = [
  {
    id: "internet_speed",
    label: "سرعة الإنترنت",
  },
  {
    id: "charging_cables",
    label: "كابلات الشحن",
  },
  {
    id: "prices",
    label: "الأسعار",
  },
  {
    id: "well_behaved_servers",
    label: "الموظفين مهذبون",
  },
  {
    id: "calm_environment",
    label: "بيئة هادئة",
  },
  {
    id: "others",
    label: "أخرى",
  },
] as const;

export default function Header() {
  const cities = citiesData.cities;

  const [formData, setFormData] = useState({
    cityName: "",
    cafeName: "",
    selectedOption: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const city = cities.find((city) => city.name_arabic === formData.cityName);

    if (city) {
      const cafeExists = city.cafes.some(
        (cafe) => cafe.name === formData.cafeName
      );

      if (!cafeExists) {
        city.cafes.push({
          name: formData.cafeName,
          categories: [], // Add categories as needed
          customer_rating: 0, // Add customer rating as needed
          location: "", // Add location as needed
        });

        toast("تم إضافة توصية جديدة، شكرًا لك!", {
          description: "الأحد، 03 ديسمبر 2023 الساعة 9:00 صباحًا",
          action: {
            label: "تراجع",
            onClick: () => console.log("تراجع"),
          },
        });
      } else {
        // Show error message if café already exists
        toast.error("المقهى موجود بالفعل في المدينة!");
      }
    } else {
      // Show error message if city not found
      toast.error("المدينة غير موجودة!");
    }
  };

  return (
    <div className="flex flex-col font-ibm gap-[7rem]">
      <Menu />
      <Floating_Images />
      <div className="flex flex-row w-full gap-[10rem] justify-between items-center px-[15rem]">
        <div className="text-[19px] font-poppins">
          <ArrowElbowDownLeft size={32} />
        </div>
        <div className="text-[12px] tracking-tighter font-semibold font-mono">
          [ قريباً غادي نطلقو التطبيق على ود أيفون و أندرويد ]
        </div>
        <div className="text-[19px] font-poppins">
          <ArrowElbowDownRight size={32} />
        </div>
      </div>
      <div className="flex flex-row w-full max-h-[20rem] overflow-hidden justify-between items-center px-[15rem] mt-11">
        <div className="flex flex-col gap-9 w-2/3 text-[19px] pl-[8rem] font-ibm font-light">
          <div className="flex flex-col gap-9">
            <div className="flex flex-row gap-9">
              <div className="flex flex-col gap-5 w-[13rem]">
                <div className="flex flex-row gap-3 items-center">
                  <span className="bg-[#dcaf26] min-h-[12px] min-w-[12px] rounded-full inline-block"></span>
                  مواقع المقاهي
                </div>
                <div className="text-[17px] text-[#ffffffac]">
                  نصنص يساعدك في العثور على أفضل المقاهي للعمل والدراسة في
                  المغرب.
                </div>
              </div>
              <div className="flex flex-col gap-5 w-[13rem]">
                <div className="flex flex-row gap-3 items-center">
                  <span className="bg-[#dcaf26] min-h-[12px] min-w-[12px] rounded-full inline-block"></span>
                  ميزات التطبيق
                </div>{" "}
                <div className="text-[17px] text-[#ffffffac]">
                  يوفر نصنص قائمة بالمقاهي التي توفر بيئة ملائمة للعمل على
                  اللابتوب.
                </div>
              </div>
            </div>
            <div className="w-[34rem] text-[18px]">
              تتمحور ميزة نصنص الرئيسية في توفير قائمة بالمقاهي التي توفر بيئة
              مريحة ومناسبة للعمل والدراسة. يتم تحديث المقاهي بانتظام لضمان
              توفير أحدث البيانات للمستخدمين. سنقدم لك تجربة بحث سهلة ومريحة حيث
              يمكنك العثور بسهولة على المقاهي التي تلبي احتياجاتك.
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start font-ibm tracking-tighter w-1/3 text-[250px]">
          <div className="flex flex-col justify-start items-start">
            <div>
              ١٤<span className="text-[#dcaf26]">٤٥</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[15rem] mt-10">
        <Line />
      </div>
      <form
        onSubmit={handleSubmit}
        dir="rtl"
        className="w-full flex flex-col items-center justify-center gap-[3rem] font-ibm"
      >
        <div className="w-full flex flex-row items-center justify-center gap-5">
          <input
            type="text"
            className="bg-transparent border px-5 w-[20rem] rounded-lg h-[4rem]"
            placeholder="اسم المدينة"
            name="cityName"
            value={formData.cityName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="bg-transparent border px-5 w-[20rem] rounded-lg h-[4rem]"
            placeholder="اسم الكافيه"
            name="cafeName"
            value={formData.cafeName}
            onChange={handleChange}
          />
          <Select dir="rtl">
            <SelectTrigger className="bg-transparent border px-5 w-[20rem] rounded-lg h-[4rem] text-opacity-30">
              <SelectValue placeholder="اختر خيارًا" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((item) => (
                  <SelectItem
                    className="px-5 w-[20rem] h-[4rem] text-opacity-30"
                    key={item.id}
                    value={item.id}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* FormMessage component goes here */}
        </div>
        <button
          type="submit"
          className="font-ibm bg-[#fffef5] text-black px-[4rem] text-[20px] p-2 rounded-xl hover:bg-transparent hover:text-white hover:border"
        >
          إرسال
        </button>
      </form>

      <Footer />
    </div>
  );
}
