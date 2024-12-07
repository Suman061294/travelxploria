'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

// Define props interface
interface ThumbneilsliderProps {
    nameprops?: string;  // Make nameprops optional
}

const Collectionoffer: React.FC<ThumbneilsliderProps> = ({ nameprops }) => {
    return (
        <>
            <div className="instagram-block md:py-0 py-0 rounded-[20px]">
                <div className="container-full bg-light-yellow p-4">
                    <div className="heading">
                        <div className="heading6">{nameprops}</div>
                        <div className="mb-3">Upto 50% off on all packages</div>
                    </div>
                    <div className="list-instagram md:mt-0 mt-0">
                        <Swiper
                            spaceBetween={32}
                            slidesPerView={2}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                680: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 32,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[20px] overflow-hidden">
                                    <div className={`shimmer-placeholder`} />
                                    <Image
                                        src={'/photo/5.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[20px] overflow-hidden">
                                <div className={`shimmer-placeholder`} />
                                    <Image
                                        src={'/photo/2.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[20px] overflow-hidden">
                                <div className={`shimmer-placeholder`} />
                                    <Image
                                        src={'/photo/1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[20px] overflow-hidden">
                                <div className={`shimmer-placeholder`} />
                                    <Image
                                        src={'/photo/3.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[20px] overflow-hidden">
                                <div className={`shimmer-placeholder`} />
                                    <Image
                                        src={'/photo/4.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[20px] overflow-hidden">
                                <div className={`shimmer-placeholder`} />
                                    <Image
                                        src={'/photo/6.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[20px] overflow-hidden">
                                <div className={`shimmer-placeholder`} />
                                    <Image
                                        src={'/photo/7.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collectionoffer