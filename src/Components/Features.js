import React from "react";
import featureImg from "../assets/feature.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="features">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="lg:w-1/4"
        >
          <h3 className="text-3xl text-primary font-bold lg:w-full mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-tartiary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            euismod ligula vitae diam vulputate, at aliquet enim lobortis.
          </p>
        </motion.div>
        {/* Featured Card */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full lg:w-3/4"
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featureImg}></img>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={featureImg}></img>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featureImg}></img>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
