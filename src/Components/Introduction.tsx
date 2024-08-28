import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

const Introduction:React.FC = () => {
  return (
    <>
         
   <div className="container">
   
  <div className="slider-div">
  <Swiper
        spaceBetween={30}
        autoplay={{
            delay: 1200,
            
            disableOnInteraction: false,
          }}
          speed={1400}
          modules={[Autoplay]}

        className="mySwiper"
      >
                <SwiperSlide> <div className="slider">
 <div className='car'>
        <h1 className='kanit-bold car-text text-center text-light'>Drive Luxury <br />Onwords</h1>
        <div className="car-img">
            <img src="/assets/images/header/file.png" alt="" className='car-logos' />
        </div>
    </div>
    
    <div className="car-nav">
        <div className="car-nav-drop d-flex align-items-center">
        <a href="" className='text-decoration-none text-light car-texts px-4 h5 '> Brand</a>
        <FaChevronDown className='font-size-down text-light' />


        </div>
        <div className="car-nav-drop d-flex align-items-center">
        <a href="" className='text-decoration-none text-light car-texts px-4 h5 '> Model</a>
        <FaChevronDown className='font-size-down text-light' />


        </div>
        <div className="car-nav-drop d-flex align-items-center">
        <a href="" className='text-decoration-none text-light car-texts px-4 h5 '> Type</a>
        <FaChevronDown className='font-size-down text-light' />


        </div>
       

    </div>
 </div>
 <div className="power">
        <div className="container">
            <div className="power-text ">
            <h5 className='text-light text-center my-4 '>Power Resolve</h5>
            <div className="circle">
                <img src="/assets/images/header/kmh.png" alt="" className='static' />
                <h5 className='text-center text-light my-3'>UNNINTERREPTUDED</h5>

            </div>

            </div>
        </div>
        
    </div>
 </SwiperSlide>
                <SwiperSlide> <div className="slider">
 <div className='car'>
        <h1 className='kanit-bold car-text text-center text-light'>Drive Luxury <br />Onwords</h1>
        <div className="car-img">
            <img src="/assets/images/header/car2.png" alt="" className='car-logos' />
        </div>
    </div>
    
    <div className="car-nav">
        <div className="car-nav-drop d-flex align-items-center">
        <a href="" className='text-decoration-none text-light car-texts px-4 h5 '> Brand</a>
        <FaChevronDown className='font-size-down text-light' />


        </div>
        <div className="car-nav-drop d-flex align-items-center">
        <a href="" className='text-decoration-none text-light car-texts px-4 h5 '> Model</a>
        <FaChevronDown className='font-size-down text-light' />


        </div>
        <div className="car-nav-drop d-flex align-items-center">
        <a href="" className='text-decoration-none text-light car-texts px-4 h5 '> Type</a>
        <FaChevronDown className='font-size-down text-light' />


        </div>
       

    </div>
 </div>
 <div className="power">
        <div className="container">
            <div className="power-text ">
            <h5 className='text-light text-center my-4 '>Power Resolve</h5>
            <div className="circle">
                <img src="/assets/images/header/kmh.png" alt="" className='static' />
                <h5 className='text-center text-light my-3'>UNNINTERREPTUDED</h5>

            </div>

            </div>
        </div>
        
    </div>
 </SwiperSlide>


    </Swiper>

  </div>
  
   </div>
   </>
  )
}

export default Introduction