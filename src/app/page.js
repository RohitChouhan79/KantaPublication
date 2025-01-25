import Image from "next/image";
import { Navbar } from "./componets/Navbar";

export default function Home() {
  return (
    <>
      {/* Apply padding on larger screens, remove on mobile */}
      <div className="lg:px-6 lg:pt-6 lg:pb-4">
        <Navbar />
      </div>
    </>
  );
}
