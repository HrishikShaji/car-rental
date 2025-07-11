import { bgImg } from "@/lib/constants";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center relative">
      <Image className="h-full w-full object-cover " src={bgImg} fill alt="hero" />
      <div className="absolute z-20 flex flex-col gap-5">
        <h1 className="text-6xl font-semibold text-white">Car Rental Company</h1>
      </div>
    </div>
  );
}
