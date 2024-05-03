import React from "react";
import fb from "../assets/fb.svg"
import insta from "../assets/insta.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedIn.svg"

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 space-y-8">
          <a href="/" className="text-2xl font-semibold">
            <span className="text-3xl font-semibold text-white">XYZ</span>
          </a>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            euismod ligula vitae diam vulputate, at aliquet enim lobortis.
          </p>
        <div>
          <input
            type="email"
            name="email "
            id="email"
            placeholder="Your email"
            className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
          />
          <input
            type="submit"
            value="Subscribe"
            className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration:300 transition-all "
          />
        </div>
        </div>

        {/* Foter navigation */}
        <div className="md-w-1/2 flex flex-col md:flex-row  flex-wrap justify-between gap-12 item-start"> 
            <div className="space-y-4 mt-5">
                <h4 className="text-xl">Platform</h4>
                <ul className="space-y-3">
                    <a className="block hover:text-gray-300">Overview</a>
                    <a className="block hover:text-gray-300">Features</a>
                    <a className="block hover:text-gray-300">Overview</a>
                    <a className="block hover:text-gray-300">Overview</a>
                </ul>
            </div>
            <div className="space-y-4 mt-5">
                <h4 className="text-xl">Help</h4>
                <ul className="space-y-3">
                    <a className="block hover:text-gray-300">How does it works</a>
                    <a className="block hover:text-gray-300">Where to ask questions?</a>
                    <a className="block hover:text-gray-300">How to play?</a>
                    <a className="block hover:text-gray-300">What is need for this?</a>
                </ul>
            </div>
            <div className="space-y-4 mt-5">
                <h4 className="text-xl">Contacts</h4>
                <ul className="space-y-3">
                    <p className="hover:text-gray-300">1234567890</p>
                    <p className="hover:text-gray-300">123 xyz xyz</p>
                    <p className="hover:text-gray-300">jdbd jkbds fds</p>
                    <p className="hover:text-gray-300">93482</p>
                </ul>
            </div>
        </div>
      </div>

      <hr/>

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ xyz 2024. All rights are reserved.</p>
        <div className="flex item-center space-x-5">
            <img  src={fb} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
            <img  src={insta} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
            <img  src={twitter} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
            <img  src={linkedin} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
