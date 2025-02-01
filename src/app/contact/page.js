import Contact from '@/components/Contact/Contact';
import Footer from '@/components/HomePage/Footer';
import { Navbar } from '@/components/HomePage/Navbar';
import React from 'react';

async function Page() {


  return (
    <div>


      <Navbar/>
     <Contact/>

     <Footer/>
    </div>
  );
}

// export const dynamic = "force-dynamic"
export default Page;