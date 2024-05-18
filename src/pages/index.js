import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Hero from "@/components/home/hero";
import HeroFooter from "@/components/home/hero-footer";
import OnAir from "@/components/home/onair";
import BreakingNews from "@/components/home/breaking-news";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import Download from "@/components/home/download";
import Herofooter from "@/components/home-mobile/herofooter";
import Herosm from "@/components/home-mobile/herosm";
import Onair from "@/components/home-mobile/onair";
import Global from "@/components/home-mobile/global";
import Listen from "@/components/home-mobile/listen";
import Socials from "@/components/home-mobile/socials";
import Download2 from "@/components/home-mobile/download";
import Subscribe from "@/components/home-mobile/subscribe";
import Footer from "@/components/footer";
import { Suspense } from "react";


export default  function Home() {
  const locale=useRouter().locale;
  return (
 
    <div className="overflow-hidden">
      <div className='mb-[5rem] pt-[7rem] hidden md:block'>
      <Hero locale={locale}/>
      <HeroFooter locale={locale}/>
      <OnAir locale={locale}/>
      <BreakingNews locale={locale}/>
      <Download locale={locale}/>
    </div>
    <div className='mb-[5rem] pt-[3rem] md:hidden'>
       <Listen />
      <Herofooter locale={locale}/>
      <Herosm locale={locale}/>
      <Onair locale={locale}/>
      <Global /> 
      <Socials />
      <Download2 />
      <Subscribe />
    </div>
    </div>
 
  );
}

