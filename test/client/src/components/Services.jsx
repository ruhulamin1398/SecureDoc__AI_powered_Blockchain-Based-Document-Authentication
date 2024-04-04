import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div  id="services"  className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
        Ways to Make a Difference
          <br />
          {/* continue to improve */}
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        If you could do one thing to make a real, lasting difference in the world, where would you start? We believe that the best way to make change is to start at the beginning: with childhood.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-start">

      <ServiceCard
          color="bg-[#8945F8]"
          title="Give Monthly"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="oin our community of monthly givers who make an impact for kids all over the globe.
          "
        />


        
        <ServiceCard
          color="bg-[#2952E3]"
          title="Sponsor a Child"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Support a special child whose life you'll help transform for good."
        />

        <ServiceCard
          color="bg-[#F84550]"
          title="Send Real Gifts"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle=" Donate a physical gift that will mean the world to a child.
          "
        />
      </div>
    </div>
  </div>
);

export default Services;
