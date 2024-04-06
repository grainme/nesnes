import citiesData from "../../public/database/cities.json";
import Footer from "@/comps/footer";
import Project from "../comps/slider";
import Menu from "./menu";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Table_cn from "./table";
import styles from "../comps/slider/style.module.css";

export default function Cities() {
  const cities = citiesData.cities;

  const [selectedCity, setSelectedCity] = useState(null);

  function handleCityClick(cityName: any) {
    setSelectedCity(cityName);
  }

  return (
    <div className="flex flex-col min-h-[100vh] font-ibm gap-[7rem] justify-between bg-[#f6f4ee] text-[#010101]">
      <Menu />
      <main className="px-[15rem]">
        <div className={styles.gallery}>
          <p className="font-semibold font-ibm text-[22px]">قائمة المدن</p>
          {cities.map((city, _index) => (
            <Sheet key={city.name_arabic}>
              <SheetTrigger>
                <div
                  onClick={() => handleCityClick(city.name_arabic)}
                  className="cursor-pointer"
                >
                  <Project
                    project={{
                      title1: city.name_arabic,
                      title2: `${city.population}`,
                      src: city.src,
                    }}
                  />
                </div>
              </SheetTrigger>
              {selectedCity === city.name_arabic && (
                <SheetContent
                  className="w-full rounded-t-[2rem] min-h-[40rem] bg-[#f6f4ee] text-[#010101] border-none"
                  side={"bottom"}
                >
                  <Table_cn city={city.name_arabic} />
                </SheetContent>
              )}
            </Sheet>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
