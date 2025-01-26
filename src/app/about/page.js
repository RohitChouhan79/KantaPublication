import React from 'react';
import About from './About';
import { Navbar } from '@/components/HomePage/Navbar';
import Footer from '@/components/HomePage/Footer';
import Team from './Team';
import Publication from './Publication';


async function Page() {


  return (
    <div>

<Navbar/>

<About/>
<Publication/>
<Team/>

<Footer/>
    </div>
  );
}

// export const dynamic = "force-dynamic"
export default Page;