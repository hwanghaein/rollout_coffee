"use client"
import Visual from "@/components/main/visual";
import NewSlide from "@/components/main/new-slide";
import MonthBarista from "@/components/main/month-barista";
import DippingFinancier from "@/components/main/dipping-financier";
import NewFinancier from "@/components/main/new-financier";
import PhotoSlide from "@/components/main/photo-slide";
import Store from "@/components/main/store";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div> <Visual /></div>
      <div> <NewSlide /></div>
      <div> <MonthBarista /></div>
      <div> <DippingFinancier /></div>
      <div> <NewFinancier/></div>
      <div> <PhotoSlide/></div>
      <div> <Store/></div>
    </div>
  );
}
