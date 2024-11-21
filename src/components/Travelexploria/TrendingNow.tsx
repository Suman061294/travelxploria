'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css/bundle';

const TrendingNow = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        // router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="trending-block style-six md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Our Popular Destination
                    </div>
                    <div className="list-trending section-swiper-navigation style-small-border style-outline md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={4}
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 6,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 7,
                                    spaceBetween: 20,
                                },
                                1290: {
                                    slidesPerView: 9,
                                    spaceBetween: 30,
                                },
                            }}
                            className='h-full'
                        >
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('t-shirt')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/PORTUGAL/1.png'}
                                            width={1000}
                                            height={1000}
                                            alt='outerwear'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Portugal</span>
                                        <span className='text-secondary'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('sweater')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/THAILAND/2.png'}
                                            width={1000}
                                            height={1000}
                                            alt='swimwear'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Thailand</span>
                                        <span className='text-secondary'> (2)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('top')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/THAILAND/3.png'}
                                            width={1000}
                                            height={1000}
                                            alt='clothes'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Chaina</span>
                                        <span className='text-secondary'> (4)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('dress')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/THAILAND/4.png'}
                                            width={1000}
                                            height={1000}
                                            alt='sets'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center 1 duration-500">
                                        <span className='heading8'>Bali</span>
                                        <span className='text-secondary'> (3)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('swimwear')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/THAILAND/5.png'}
                                            width={1000}
                                            height={1000}
                                            alt='accessories'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Dubai</span>
                                        <span className='text-secondary'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('outerwear')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/THAILAND/6.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Greece</span>
                                        <span className='text-secondary'> (2)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('shirt')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/THAILAND/7.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Iceland</span>
                                        <span className='text-secondary'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('shirt')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/THAILAND/7.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Iceland</span>
                                        <span className='text-secondary'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('shirt')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/THAILAND/7.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Iceland</span>
                                        <span className='text-secondary'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('shirt')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/test/THAILAND/7.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Iceland</span>
                                        <span className='text-secondary'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingNow