'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Define props interface
interface ThumbneilsliderProps {
    nameprops?: string;  // Make nameprops optional
}

const Recommended: React.FC<ThumbneilsliderProps> = ({ nameprops }) => {
    return (
        <>
            <div className="section-swiper-navigation">
                    <div className="md:mt-10 mt-6 pr-7 -mr-15">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            // loop={true}
                            modules={[Pagination]}
                            autoplay={{
                                delay: 4000,
                            }}
                            pagination={{
                                type: 'fraction',
                              }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1,
                                    spaceBetween: 24,
                                },
                                680: {
                                    slidesPerView: 1,
                                    spaceBetween: 24,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 32,
                                },
                            }}
                            
                        >
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[10px] overflow-hidden">
                                    <Image
                                        src={'/photo/5.png'}
                                        width={1500}
                                        height={1500}
                                        alt='1'
                                        className='w-full h-[150px] object-cover object-center'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[10px] overflow-hidden">
                               
                                    <Image
                                        src={'/photo/2.png'}
                                        width={1500}
                                        height={1500}
                                        alt='1'
                                        className='w-full h-[150px] object-cover object-center'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[10px] overflow-hidden">
                                
                                    <Image
                                        src={'/photo/1.png'}
                                        width={1500}
                                        height={1500}
                                        alt='1'
                                        className='w-full h-[150px] object-cover object-center'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[10px] overflow-hidden">
                                
                                    <Image
                                        src={'/photo/3.png'}
                                        width={1500}
                                        height={1500}
                                        alt='1'
                                        className='w-full h-[150px] object-cover object-center'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[10px] overflow-hidden">
                                
                                    <Image
                                        src={'/photo/4.png'}
                                        width={1500}
                                        height={1500}
                                        alt='1'
                                        className='w-full h-[150px] object-cover object-center'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[10px] overflow-hidden">
                                
                                    <Image
                                        src={'/photo/6.png'}
                                        width={1500}
                                        height={1500}
                                        alt='1'
                                        className='w-full h-[150px] object-cover object-center'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[10px] overflow-hidden">
                                
                                    <Image
                                        src={'/photo/7.png'}
                                        width={1500}
                                        height={1500}
                                        alt='1'
                                        className='w-full h-[150px] object-cover object-center'
                                    />
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
           
        </>
    )
}

export default Recommended