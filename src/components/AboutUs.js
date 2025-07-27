import React,{useEffect} from 'react'
import { BANNER_ABOUT,BANNER_RIGHT_ARROW, BANNER_LEFT_ARROW, FOOD_ICON, INSTAMART_ICON, DINEOUT_ICON,VIDEO_ABOUT,INDUSTRY_PIONEER, SWIGGY_LOGO } from '../utils/Constants';
import A0S from 'aos';
import  'aos/dist/aos.css'; //imported AOS styles
import CountUp from 'react-countup';

function AboutUs() {
  useEffect(() => {
    A0S.init({
      duration: 3000, // miliseconds
      //easing: 'ease-in-out', // easing function
      once: true, // animations only once
    });
  }, []);
 
  return (
    <div className=' bg-white shadow-xl  shadow-slate-800'>
      <div className="relative flex h-auto flex-col md:flex-row w-full">
        {/* Main Banner */}
        <img 
          className='w-full z-0 h-screen object-cover' 
          src={BANNER_ABOUT} 
          alt="About Us Banner" 
        />

        {/* Left Banner */}
        <img 
          className='absolute top-1/4 left-2  transform -translate-y-1/2 z-10 ' 
          src={BANNER_LEFT_ARROW} 
          alt="Left Banner"
        />

        {/* Right Banner */}
        <img 
          className='absolute top-1/4 right-2 transform -translate-y-1/2 z-10 ' 
          src={BANNER_RIGHT_ARROW} 
          alt="Right Banner"
        />

        {/* Text Content */}
        <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 md:px-0'>
          <h1 className='text-3xl md:text-5xl font-bold mb-8 text-black' data-aos="fade-in">ABOUT US</h1>
          <p className='text-base md:text-xl text-customGrey' data-aos="fade-in">
            We are committed to delivering the best food experience to our customers. Our mission is to connect people with great food and make every meal memorable.
          </p>
        </div>
        {/* Icons Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full max-w-4xl flex flex-col items-center">
          {/* Center top Icon */}
          <div className="flex justify-center pt-2 md:p-4">
            <img
              className="h-24 w-24 md:h-36 md:w-36 duration-300 hover:scale-150"
              src={INSTAMART_ICON}
              alt="instamart_icon"
            />
            </div>
            {/* Left and Right Icons */}
            <div className="flex justify-between w-full px-8">
              <img
                className="h-20 w-20 md:h-36 md:w-36 duration-300 hover:scale-150"
                src={FOOD_ICON}
                alt="food_icon"
              />
              <img
                className="h-20 w-20 md:h-36 md:w-36 duration-300 hover:scale-150"
                src={DINEOUT_ICON}
                alt="dineout_icon"
              />
            </div>
          {/* Bottom Icon */}
          <div className="flex justify-center mb-4">
            <img
              className="h-32 w-24 md:h-32 md:w-24"
              src={SWIGGY_LOGO}
              alt="swiggy_logo"
            />
          </div>
        </div>
    </div>
    {/* Video Section */}
    <div className='flex w-full bg-white justify-center items-center'>
      <div className='text-black p-8'>
        <h2 className='text-2xl md:text-4xl font-bold items-center text-center mb-4 text-customAbout' data-aos="fade-in">
          <span className='hidden md:inline-block w-16 h-1 bg-orange-500 mr-4'></span>IPO DELIVERED - NOVEMBER 2024
          <span className='hidden md:inline-block w-16 h-1 bg-orange-500 ml-4'></span>
        </h2>
        <div className='max-w-3xl mx-auto'>
          <video 
            className='w-full h-auto rounded-3xl shadow-lg' 
            controls 
            autoPlay
            muted
          >
            <source src={VIDEO_ABOUT} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    {/* Industry pioneer */}
    <div>
      <h2 className='text-2xl md:text-4xl font-bold text-center mt-8 mb-4 text-customAbout' data-aos="fade-in">
      <span className='hidden md:inline-block w-16 h-1 bg-orange-500 mr-4'></span>
        INDUSTRY PIONEER
      <span className='hidden md:inline-block w-16 h-1 bg-orange-500 ml-4'></span>
      </h2>
      {/*left section */}
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-col md:w-1/2 items-center justify-center">
          <p className='text-base md:text-xl text-customGrey text-center px-4' data-aos="fade-in">
          Being among the first few entrants, Swiggy has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.
          </p>
        </div>
        {/*right section */}
        <div className="flex flex-col  md:w-1/2  items-center justify-center p-4">
          <img src={INDUSTRY_PIONEER} alt="Industry Pioneer" 
          className="w-full h-auto object-cover  max-w-3xl" 
          />
        </div>
      </div>  
        <div className="flex flex-wrap justify-around items-center px-2 py-12 bg-white gap-2">
          <div className="text-center min-w-[150px]" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-green-600">
              <CountUp end={3} duration={2} enableScrollSpy scrollSpyDelay={300} />
              <span className="text-green-600 text-3xl"> Billion+</span>
            </h2>
            <p className="text-customGrey mt-2 text-lg">Orders Delivered</p>
          </div>
           <div className="hidden md:block h-16 border-r border-gray-300 border-4"></div>
            <div className="text-center min-w-[150px]" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-4xl font-bold text-green-600">
                <CountUp end={220} duration={2} enableScrollSpy scrollSpyDelay={300} />
                <span className="text-green-600 text-3xl"> K+</span>
              </h2>
              <p className="text-customGrey mt-2 text-lg">Restaurant Partners</p>
            </div>
            <div className="hidden md:block h-16 border-r border-gray-300 border-4"></div>
            <div className="text-center min-w-[150px]" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-4xl font-bold text-green-600">
                <CountUp end={520} duration={2} enableScrollSpy scrollSpyDelay={300} />
                <span className="text-green-600 text-3xl"> K+</span>
              </h2>
              <p className="text-customGrey mt-2 text-lg">Delivery Partners</p>
            </div>
            <div className="hidden md:block h-16 border-r border-gray-300 border-4"></div>
            <div className="text-center min-w-[150px]" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-4xl font-bold text-green-600">
                <CountUp end={100} duration={2} enableScrollSpy scrollSpyDelay={300} />
                <span className="text-green-600 text-2xl"> +</span>
              </h2>
              <p className="text-customGrey mt-2 text-lg">Cities in India</p>
            </div>
          </div>         
    </div>
</div>
    
  )
}

export default AboutUs;
