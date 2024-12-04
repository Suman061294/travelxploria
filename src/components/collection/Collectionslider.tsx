'use client'

import React, { Component, useEffect, useState,useRef  } from 'react'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'


const Collectionslider = () => {

    return (
        <>
            <div className="slider-block style-five bg-linear xl:h-[350px] lg:h-[500px] md:h-[380px] sm:h-[400px] h-[350px] max-[420px]:h-[320px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                        className='h-full relative dots-white'
                    >

                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center justify-center">

                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/custom/b1.jpg'}
                                            width={2560}
                                            height={500}
                                            alt='bg5-1'
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>

                                    {/* Black Overlay */}
                                    <div className="overlay absolute left-0 top-0 w-full h-full bg-gradient-to-t overlay-custom  to-transparent z-[-1]"></div>

                                    {/* Centered Content */}
                                    <div className="content relative z-[1] text-white text-center flex flex-col items-center">
                                    <div className='flex flex-row items-center justify-center w-full gap-4'>
                                            <h1 className='shining-text text-center'>Europe Packages</h1>
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

export default Collectionslider