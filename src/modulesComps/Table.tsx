import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { supabase } from "@/config/Client";
import { Skeleton } from "@/components/ui/skeleton";

interface Cafe {
  name: string;
  categories: string[];
  customer_rating: number;
  location: string;
}

interface Props {
  city:
    | string
    | number
    | boolean
    | ReactElement<any, string>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}

function CityCafesTable({ city }: Props) {
  const [cities, setCities] = useState<any[]>([]);
  const [Cafes, setCafes] = useState<any[]>([]);

  useEffect(() => {
    getCities();
    getCafes();
  }, []);

  async function getCities() {
    const { data, error } = await supabase.from("cities").select();
    if (error) {
      console.error("Error fetching cities:", error.message);
    } else {
      setCities(data);
    }
  }

  async function getCafes() {
    const { data, error } = await supabase.from("cafes").select();
    if (error) {
      console.error("Error fetching cafes:", error.message);
    } else {
      setCafes(data);
    }
  }

  const selectedCity = cities.find((item) => item.name_arabic === city);

  if (!selectedCity) {
    return (
      <div className="flex flex-col gap-6 justify-center items-center m">
        <Skeleton className="md:h-[125px] md:w-[250px]  h-[20px] w-[100px] rounded-xl" />
      </div>
    );
  }

  let selectedCafes = [];
  if (Cafes) {
    selectedCafes = Cafes.filter(
      (item) => item.city_id === selectedCity.city_id
    );
  }

  function getRatingColorClass(rating: number): string {
    if (rating > 7) {
      return "text-green-600";
    } else if (rating >= 4 && rating <= 7) {
      return "text-orange-500";
    } else {
      return "text-red-500";
    }
  }

  const categoryColors = [
    "bg-green-200",
    "bg-yellow-200",
    "bg-orange-200",
    "bg-blue-200",
    "bg-purple-200",
  ];
  const textColors = [
    "text-green-800",
    "text-yellow-800",
    "text-orange-800",
    "text-blue-800",
    "text-purple-800",
  ];

  return (
    <Card className="font-ibm" dir="rtl">
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle className="md:text-[70px] text-[50px]">{city}</CardTitle>
        <CardDescription>
          هادو هوما المقاهي لي موافقين مدينة {city}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <table className="w-full table-auto border-collapse border border-gray-300">
          {selectedCafes && selectedCafes.length > 0 ? (
            <>
              <thead>
                <tr>
                  <th className="p-4 text-center border border-gray-300">
                    المقهى
                  </th>
                  <th className="p-4 text-center border border-gray-300">
                    الفئات
                  </th>
                  <th className="p-4 text-center border border-gray-300">
                    تقييم الزبائن
                  </th>
                  <th className="p-4 text-center border border-gray-300">
                    المكان
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedCafes.map((cafe: Cafe, index: number) => (
                  <tr
                    key={cafe.name + index}
                    className="border border-gray-300"
                  >
                    <td className="p-4 font-medium text-center border border-gray-300">
                      {cafe.name}
                    </td>
                    <td className="p-4 min-w-[5rem] border border-gray-300">
                      <div className="flex md:flex-row flex-col gap-2 items-center justify-center">
                        {cafe.categories.map((category: string, i: number) => {
                          const randomColorIndex = i % 5;
                          const randomColor = categoryColors[randomColorIndex];
                          const textColor = textColors[randomColorIndex];
                          return (
                            <span
                              key={category + i}
                              className={`inline-block ${randomColor} ${textColor} px-2 py-1 rounded`}
                            >
                              {category}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="p-4 text-center font-semibold border border-gray-300">
                      <span
                        className={getRatingColorClass(cafe.customer_rating)}
                      >
                        {cafe.customer_rating}/10
                      </span>
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          `${cafe.location}, ${city}, Maroc`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit" }}
                        className="hover:underline"
                      >
                        {cafe.location}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            <tbody>
              <tr>
                <td className="p-4 text-center border border-gray-300">
                  لا توجد معلومات متاحة حاليًا، يرجى التواصل لاحقًا
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </CardContent>
    </Card>
  );
}

export default CityCafesTable;
