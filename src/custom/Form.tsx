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
import { supabase } from "@/config/Client";

export default function Form() {
  const options = [
    {
      label: "سرعة الإنترنت",
      id: "سرعة الإنترنت",
    },
    {
      label: "كابلات الشحن",
      id: "كابلات الشحن",
    },
    {
      label: "الأسعار",
      id: "الأسعار",
    },
    {
      label: "الموظفين مهذبون",
      id: "الموظفين مهذبون",
    },
    {
      label: "بيئة هادئة",
      id: "بيئة هادئة",
    },
    {
      label: "أخرى",
      id: "أخرى",
    },
  ] as const;

  let ratings = Array.from({ length: 10 }, (_, index) => index + 1);

  const [formData, setFormData] = useState({
    cityName: "",
    cafeName: "",
    selectedOption: "",
    location: "",
    rating: "",
  });

  const handleOptionChange = (value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedOption: value,
    }));
  };

  const handleRatingChange = (value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: value,
    }));
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      for (const key in formData) {
        if ((formData as any)[key] === "") {
          toast.error("عفاك حول تعمر لفورم كاملها!");
          return;
        }
      }

      // Check if rating is less than 10
      if (parseFloat(formData.rating) > 10) {
        toast.error("الرجاء إدخال تقييم أقل من أو يساوي 10");
        return;
      }

      // Insert data into the cities table
      const { data: cityData, error: cityError } = await supabase
        .from("cities_temp")
        .insert([{ name_arabic: formData.cityName }])
        .select();

      if (cityError) {
        throw new Error(`شي حاجة فيها مشكل فالفورم، سمحلنا!`);
      }

      const cityId = cityData ? cityData[0].city_id : null;

      if (!cityId) {
        throw new Error("شي حاجة فيها مشكل فالفورم، سمحلنا!");
      }

      // Parse rating as decimal
      const rating = parseFloat(formData.rating);

      // Insert data into the cafes table
      const { error: cafesError } = await supabase
        .from("cafes_temp")
        .insert([
          {
            city_id: cityId,
            name: formData.cafeName,
            categories: [formData.selectedOption],
            customer_rating: rating,
            location: formData.location,
          },
        ])
        .select();

      if (cafesError) {
        throw new Error(`شي حاجة فيها مشكل فالفورم، سمحلنا!`);
      }

      let currentDate = new Date();

      let formattedDate = currentDate.toLocaleDateString("ar-EG", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      toast("تم إضافة توصية جديدة، شكرًا لك!", {
        description: formattedDate,
        action: {
          label: "تراجع",
          onClick: () => console.log("تراجع"),
        },
      });

      setFormData({
        cityName: "",
        cafeName: "",
        selectedOption: "",
        location: "",
        rating: "",
      });
    } catch (error) {
      toast.error("شي حاجة فيها مشكل فالفورم، سمحلنا!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      dir="rtl"
      className="w-full flex flex-col items-center justify-center gap-[3rem] font-ibm"
    >
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <div className="flex md:flex-row flex-col gap-5">
          <input
            type="text"
            className="bg-transparent border px-5 w-[20rem] rounded-lg h-[4rem]"
            placeholder="اسم الكافيه"
            name="cafeName"
            value={formData.cafeName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="bg-transparent border px-5 w-[20rem] rounded-lg h-[4rem]"
            placeholder="اسم المدينة"
            name="cityName"
            value={formData.cityName}
            onChange={handleChange}
          />
          <Select dir="rtl" onValueChange={handleOptionChange}>
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
        </div>
        <div className="flex md:flex-row flex-col gap-5">
          <input
            type="text"
            className="bg-transparent border px-5 w-[20rem] rounded-lg h-[4rem]"
            placeholder="المكان تقريباً (جامع الفناء، موروكو مال..)"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <Select dir="rtl" onValueChange={handleRatingChange}>
            <SelectTrigger className="bg-transparent border px-5 w-[20rem] rounded-lg h-[4rem] text-opacity-30">
              <SelectValue placeholder="شنهوا تقييم ديلك للمقهى / ١٠" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {ratings.map((item, index) => (
                  <SelectItem
                    key={index}
                    className="px-5 w-[20rem] h-[4rem] text-opacity-30"
                    value={item.toString()}
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <button
        type="submit"
        className="font-ibm bg-[#fffef5] text-black px-[4rem] text-[20px] mb-3 p-2 rounded-xl hover:bg-transparent hover:text-white"
      >
        إرسال
      </button>
    </form>
  );
}
