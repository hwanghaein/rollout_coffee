"use client"
import MainMonthBarista from "@/components/main-month-barista";
import MainSlide from "@/components/main-slide";
import MainVisual from "@/components/main-visual";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div> <MainVisual /> </div>
      <div> <MainSlide /> </div>
      <div> <MainMonthBarista /> </div>
    </div>
  );
}
