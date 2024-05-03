import React from "react";
import banner from "../assets/banner.png"
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id="home">
      <Banner banner={banner} heading={"Develop your skills without diligence"} subheading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod ligula vitae diam vulputate, at aliquet enim lobortis."} btn1={"Get Started"} btn2={"Discount"}/>
    </div>
  );
};

export default Home;
