"use client"
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:-6xl font-extrabold">
           <span className="text-transparent bg-clip-text  bg-gradient-to-br from-blue-500 via-purple-400 to-pink-600 ">
             I&apos;m Karim Acciaro: {" "}
            </span>
          <br>
          </br>
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'front end developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'networking',
        1000,
        'cybersecurity',
        1000, 
        'pc builder',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              portfolio personale ed approfondimento fake news di ed. civica
            </p>
            <div>
              <a href="/pdf/edcivica.pdf"
                 target="_blank"
                 alt="my pdf"
                 rel="noopener noreferrer">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3" href="edcivica.html"  >
                 <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 " > 
                 ed.civica
                 </span>
              </button>
              </a>
            </div>
        
        </div> 
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
            
            src="/images/hero-image.png"
            alt="hero image"
            className=" relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}            
            
            />
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default HeroSection;