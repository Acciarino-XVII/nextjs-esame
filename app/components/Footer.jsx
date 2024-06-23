import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
        <div className="container p-12 flex justify-between">
            <span>            <Image
            
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={100

            }            
            
            /></span>
            <p className="text-slate-600">All Right Reserved @ karim acciaro</p>
        </div>
    </footer>
  )
}

export default Footer;