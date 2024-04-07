import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactElement, ReactNode, ReactPortal } from "react";
import citiesData from "../../public/database/cities.json";

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
  const cities = citiesData.cities;
  const selectedCity = cities.find((item) => item.name_arabic === city);

  if (!selectedCity) {
    return <div>City not found</div>;
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
  const { cafes } = selectedCity;

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
          {cafes.length > 0 ? (
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
                {cafes.map((cafe: Cafe, index: number) => (
                  <tr
                    key={cafe.name + index}
                    className="border border-gray-300"
                  >
                    <td className="p-4 font-medium text-center border border-gray-300">
                      {cafe.name}
                    </td>
                    <td className="p-4 max-w-[5rem] border border-gray-300">
                      <div className="flex md:flex-row flex-col gap-2 items-center justify-center">
                        {cafe.categories.map((category: string, i: number) => {
                          const randomColorIndex = Math.floor(
                            Math.random() * categoryColors.length
                          );
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
                <td
                  className="p-4 text-center border border-gray-300"
                >
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
