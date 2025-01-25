import Image from "next/image";
import { Navbar } from "./componets/HomePage/Navbar";
import Homepage from "./componets/HomePage/Homepage";


export default function Home() {
  return (
    <>
      {/* Apply padding on larger screens, remove on mobile */}
      <div className="lg:px-6 lg:pt-6 lg:pb-4">
   
        <Navbar />

{/* add a hero section 2  */}
<Homepage/>


{/*  add blue  */}



      </div>
    </>
  );
}
