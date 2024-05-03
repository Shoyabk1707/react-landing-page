import React from 'react'
import Banner from "../shared/Banner"
import BannerImg from "../assets/newsLetter.png"

const Newsletter = () => {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
        <Banner banner={BannerImg} heading={"Each student can share their discount code "}  subheading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod ligula vitae diam vulputate, at aliquet enim lobortis."} btn1={"I have a code"} btn2={""}/>
      
    </div>
  )
}

export default Newsletter
