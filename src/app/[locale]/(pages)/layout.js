"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Footersm from "@/components/footersm";

const DEPLOYMENT_DATE = new Date('2024-05-14T00:00:00Z');

const Layout = ({ children, params : {locale} }) => {
  const [isBlank, setIsBlank] = useState(false);
  console.log(DEPLOYMENT_DATE, isBlank)

  useEffect(() => {
    const currentDate = new Date();
    const utcCurrentDate = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate()));
    const timeDifference = utcCurrentDate - DEPLOYMENT_DATE;
    const daysDifference = timeDifference / (1000 * 3600 * 24);


    if (daysDifference >= 30) {
      setIsBlank(true);
    }
  }, []);

  if (isBlank) {
    return <div>Sorry, this website is no longer available.</div>;
  }

  return (
    <div>
      {" "}
      <Navbar locale={locale} color='#0C1821'/>
      {children}
      <Footer locale={locale} className='hidden md:block'/>
      <Footersm/>
      
    </div>
  );
};

export default Layout;