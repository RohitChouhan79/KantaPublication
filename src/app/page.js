import Homepage from "@/components/HomePage/Homepage";
import Invite from "@/components/HomePage/Invite";
import { Navbar } from "@/components/HomePage/Navbar";
import Image from "next/image";
import Slogan from "@/components/HomePage/Slogan";
import Footer from "@/components/HomePage/Footer";
import { auth } from "@/auth";
export default async function Home() {
  const auths = await auth();
  // console.log(auths)
  return (
    <>
      {/* Apply padding on larger screens, remove on mobile */}
      <div className="lg:px-6 lg:pt-6 lg:pb-4">
   
        <Navbar userRole={auths.user.role}/>

{/* add a hero section 2  */}
<Homepage/>


{/*  add blue  */}
<Invite/>
<Slogan/>
<Footer user={auths.user}/>


      </div>
    </>
  );
}
