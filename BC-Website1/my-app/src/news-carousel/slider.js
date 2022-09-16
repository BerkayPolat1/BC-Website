
import React, { useState, useEffect } from 'react';
import './slider.scss';
import {sliderData} from './slider-data'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import SideMenu from "./side-menu/SideMenu";




const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 10000;

   
    

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        
    };

    const prevSlide = () => {
     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    };



    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
          auto();
        }
        return () => clearInterval(slideInterval);
      }, [currentSlide]);

   
    
    return (
        <div className='container'>
            <div className='item1'>
                <div className='slider'>
                    <AiOutlineArrowLeft className='arrow prev'  onClick={prevSlide}/>
                    <AiOutlineArrowRight className='arrow next'  onClick={nextSlide} />

                    {sliderData.map((slide, index) => {
                        return (
                            <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
                                {index === currentSlide && (
                                    <>
                                        <img src={slide.image} className='slide-image' alt='slide'/>
                                        <div className='content'>
                                            <h2>{slide.heading}</h2>
                                            <p>{slide.desc}</p>
                                           

                                        </div>
                                     </>
                                )}

                            </div>
                        )
                    })}

                </div>    
            </div> 
            <SideMenu />
        </div>
    )
}




export default Slider