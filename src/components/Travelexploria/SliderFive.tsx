'use client'

import React, { Component, useEffect, useState,useRef  } from 'react'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import Populardestination from './Populardestination';
import Slider from 'rc-slider';


const SliderFive = () => {

    const keywords: string[] = ["Maldives", "Bali", "Thailand", "Kashmir", "Andaman"];

    const [displayedText, setDisplayedText] = useState<string>(""); // Text being displayed
    const [currentIndex, setCurrentIndex] = useState<number>(0); // Tracks the index of the current keyword
    const [isDeleting, setIsDeleting] = useState<boolean>(false); // Typing or deleting mode
  
    // Ref to keep track of the typing speed and delay
    const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      const currentWord = keywords[currentIndex];
      const typingSpeed = isDeleting ? 50 : 100; // Speed for typing and deleting
      const delayBetweenWords = 1000; // Delay before moving to the next word
  
      const handleTyping = () => {
        if (!isDeleting) {
          // Typing mode
          setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
          if (displayedText === currentWord) {
            setTimeout(() => setIsDeleting(true), delayBetweenWords); // Start deleting after a delay
          }
        } else {
          // Deleting mode
          setDisplayedText((prev) => prev.slice(0, -1));
          if (displayedText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % keywords.length); // Move to the next word
          }
        }
      };
  
      // Use ref to clear the timer on cleanup and avoid stale timers
      typingTimerRef.current = setTimeout(handleTyping, typingSpeed);
  
      // Cleanup function to clear the timer on unmount or rerun
      return () => {
        if (typingTimerRef.current) {
          clearTimeout(typingTimerRef.current);
        }
      };
    }, [currentIndex, isDeleting, displayedText]); // Removed 'keywords' from dependencies


    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };


    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 50000, max: 500000 });
    const handlePriceChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setPriceRange({ min: values[0], max: values[1] });
        }
    };
    return (
        <>
            <div className="slider-block style-five bg-linear xl:h-[600px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        className='h-full relative dots-white'
                    >

                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-end justify-center pb-1">
                                    {/* Video Background */}
                                    <div className="sub-video absolute left-0 top-0 w-full h-full z-[-1]">
                                        <video
                                            src="https://digi.rangrotopack.com/travel/Travelexploria.mp4" // Replace with your video path
                                            autoPlay
                                            loop
                                            muted
                                            className="w-full h-full object-cover"
                                        ></video>
                                    </div>
                                    {/* Black Overlay */}
                                    <div className="overlay absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black/100 to-transparent z-[-1]"></div>

                                    <div className="content relative z-[1] text-white text-center flex flex-col items-center md:w-2/4 lg:w-2/4 w-3/4">
                                        <div className="input-block lg:w-1/2 sm:w-3/5 w-full h-[52px] sm:mt-10 mt-7">
                                            <div className="relative w-full h-full" onClick={toggleModal}>
                                                <Icon.MagnifyingGlass
                                                    size={20}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-black"
                                                />
                                                <input
                                                    type="text"
                                                    value="Explore & Discover"
                                                    className="caption1 w-full h-full pl-12 pr-14 rounded-xl border border-line cursor-pointer text-md text-secondary"
                                                    readOnly
                                                />
                                                {/* Overlay for displayedText */}
                                                <span className="absolute md:left-[175px] left-[160px] top-1/2 -translate-y-1/2 font-bold text-black">
                                                    {displayedText}
                                                </span>
                                            </div>

                                        </div>

                                        <Populardestination />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center justify-center">

                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/custom/b1.jpg'}
                                            width={2560}
                                            height={1080}
                                            alt='bg5-1'
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>

                                    {/* Black Overlay */}
                                    <div className="overlay absolute left-0 top-0 w-full h-full bg-black opacity-50 z-[-1]"></div>

                                    {/* Centered Content */}
                                    <div className="content relative z-[1] text-white text-center flex flex-col items-center">
                                        {/* <h2 className="text-4xl font-bold">Explore Your World</h2>
                                        <p className="mt-4">Discover amazing destinations with us.</p> */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>



            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            onClick={toggleModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>


                        <div className="input-block lg:w-2/2 sm:w-5/5 w-full h-[40px] sm:mt-10 mt-7">
                            <div className="relative w-full h-full" >
                                <Icon.MagnifyingGlass
                                    size={20}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-black"
                                />
                                <input
                                    type="text"
                                    
                                    className="caption1 w-full h-full lg:pl-12 md:pl-12 pl-4 pr-14 rounded-xl border border-line text-md text-secondary"
                                    placeholder='Enter Your Destination'
                                />

                            </div>

                        </div>

                        {/* Modal Content */}
                        <h4 className="text-sm font-bold mb-2 mt-8">Trip Duration</h4>
                        <div className="list-size flex items-center flex-wrap gap-1 gap-y-4 mt-2 mb-4">
                            <div className="size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line text-xs">2-3 Days</div>
                            <div className="size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line text-xs">3-5 Days</div>
                            <div className="size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line text-xs">5-7 Days</div>
                            <div className="size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line text-xs">7+ Days</div>
                        </div>
                        <hr />
                        <div className="filter-price pb-8 border-b border-line mt-2">
                            <div className="text-sm font-bold mb-2">Price Range</div>
                            <Slider
                                range
                                defaultValue={[50000, 500000]}
                                min={50000}
                                max={500000}
                                onChange={handlePriceChange}
                                className='mt-5'
                            />
                            <div className="price-block flex items-center justify-between flex-wrap mt-4">
                                <div className="min flex items-center gap-1">
                                    <div>Min price:</div>
                                    <div className='price-min'>
                                        <span>{priceRange.min}</span>
                                    </div>
                                </div>
                                <div className="min flex items-center gap-1">
                                    <div>Max price:</div>
                                    <div className='price-max'>
                                        <span>{priceRange.max}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        {/* Footer Buttons */}
                        <div className="flex justify-end mt-6 space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>
                            
                           
                            <button type="button" className="hover:bg-black hover:text-white text-gray-900 bg-green focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            View Packages
                            </button>
                        </div>
                    </div>
                </div>


            )}
        </>
    )
}

export default SliderFive