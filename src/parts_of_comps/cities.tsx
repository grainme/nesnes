import Footer from "@/comps/footer";
import Project from "../comps/slider";
import Menu from "./menu";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Table_cn from "./table";
import styles from "../comps/slider/style.module.css";
import { createClient } from "@supabase/supabase-js";
import { Skeleton } from "@/components/ui/skeleton.js";

export default function Cities() {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  const [cities, setCities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    getCities();
  }, []);

  async function getCities() {
    const { data, error } = await supabase.from("cities").select();
    if (error) {
      console.error("Error fetching cities:", error.message);
    } else {
      setCities(data);
      setLoading(false);
    }
  }

  function handleCityClick(cityName: any) {
    setSelectedCity(cityName);
  }

  return (
    <div className="flex flex-col min-h-[100vh] font-ibm gap-[7rem] justify-between bg-[#f6f4ee] text-[#010101]">
      <Menu />
      <main className="md:px-[15rem] px-[2rem] md:min-h-[30rem]">
        <div className={styles.gallery}>
          <p className="font-semibold font-ibm md:text-[22px]">
            المقاهي كاملين لي كنين هنا راهوم فالمستوى، التقييم غير على ود
            المقارنة{" "}
          </p>
          <div className={loading ? "fade-out" : "fade-in"}>
            {loading ? (
              <div className="flex flex-col space-y-3 mt-5">
                <Skeleton className="md:h-[425px] md:w-[850px] h-[220px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ) : (
              cities.map((city: any, _index) => (
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
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
