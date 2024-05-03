import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">

        {/* Banner Content */}
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        className="md:w-3/5">
          <h2 className="md:text-6xl text-4xl text-center md:text-start font-bold text-white mb-6 leading-relaxed">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] md:text-start text-center text-xl mb-6 ">
            {subheading}
          </p>
          <div className="space-x-5 space-y-4 md:text-start text-center">
            <button className="btnPrimary">{btn1}</button>
            <button className="btnPrimary">{btn2}</button>
          </div>
        </motion.div>


        <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        >
          <img src={banner} className="lg:h-[386px]" />
        </motion.div>


      </div>
    </div>
  );
};

export default Banner;
