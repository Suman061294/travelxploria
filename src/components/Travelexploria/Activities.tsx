import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import Devider from './Devider';
import Thumbneilslider from './Thumbneilsilder';
import Recommended from './Recommended';
// Define the type for the props
interface PackagedayProps {
    images: string[];
    cityname: string[0];

}

interface AccordionItemProps {
    day: number;
    title: string;
    content: string;
}


const accordionData: AccordionItemProps[] = [
    {
        day: 1,
        title: 'Arrival in New York | Day at Leisure',
        content:
            'Check-out from your hotel and get transferred to your hotel in Philadelphia. Complete the check-in formalities and spend the rest of the day at leisure. You can visit the Reading Terminal Market or Italian Market. Later, have a comfortable stay in your hotel in Philadelphia.',
    },
    {
        day: 2,
        title: 'New York Hop-on Hop-off 24-Hour Big Bus Tour | Circle Line Cruise Ride',
        content:
            'Check-out from your hotel and get transferred to your hotel in Philadelphia. Complete the check-in formalities and spend the rest of the day at leisure. You can visit the Reading Terminal Market or Italian Market. Later, have a comfortable stay in your hotel in Philadelphia.',
    },
    {
        day: 3,
        title: 'Transfer to Philadelphia | Day at Leisure',
        content:
            'Check-out from your hotel and get transferred to your hotel in Philadelphia. Complete the check-in formalities and spend the rest of the day at leisure. You can visit the Reading Terminal Market or Italian Market. Later, have a comfortable stay in your hotel in Philadelphia.',
    },
    {
        day: 4,
        title: 'WeVenture Tour of Philadelphia | Explore History, Highlights, & Revolution',
        content:
            'Check-out from your hotel and get transferred to your hotel in Philadelphia. Complete the check-in formalities and spend the rest of the day at leisure. You can visit the Reading Terminal Market or Italian Market. Later, have a comfortable stay in your hotel in Philadelphia.',
    },
    {
        day: 5,
        title: 'Visit to Philadelphia Zoo | Explore Otherworld Philadelphia',
        content:
            'Check-out from your hotel and get transferred to your hotel in Philadelphia. Complete the check-in formalities and spend the rest of the day at leisure. You can visit the Reading Terminal Market or Italian Market. Later, have a comfortable stay in your hotel in Philadelphia.',
    },
];

const Activities: React.FC<PackagedayProps> = ({ images, cityname }) => {

    return (
        <div className="container-full section-swiper-navigation rounded-2xl border border-line">
            <div className='md:pt-4 pt-4 px-6'>
                <div className='heading6 font-bold'>3 Activities</div>

            </div>

            <div className="max-w-3xl mx-auto my-5 border-b border-line">

                <div className="mb-4 overflow-hidden shadow-sm">
                    <div style={{ textAlign: 'left' }} className="flex flex-col md:flex-row gap-2 items-start md:items-center px-5">
                        <span className="text-xs font-medium bg-green px-3 py-1 rounded-full">Day 2</span>
                        <span className="text-sm font-medium">
                            Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125) on a Private basis</span>
                    </div>

                    <div className='px-5 py-2'>
                        <div className='p-3 text-md mt-0 text-secondary font-light bg-white rounded-[10px]'>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={true}
                                navigation
                                className="w-full h-[300px] rounded-2xl"
                            >

                                <SwiperSlide>
                                    <div className="relative w-full h-[300px] aspect-[4/4] overflow-hidden relative">
                                        <img
                                            src="/product/ac1.webp"
                                            alt={`product-image`}
                                            width={1500}
                                            height={1500}
                                            className="w-full h-[300px] object-cover object-center"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t overlay-custom p-4 text-white">
                                            <div className="flex justify-center gap-1 items-center w-full">
                                                <div className="flex flex-col">
                                                    <div className="leading-tight mt-2 text-white text-md md:text-lg">Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125) on a Private basis</div>
                                                    <div className="leading-tight text-sm md:text-xl text-green font-semibold mt-2">Ticket Included</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="relative w-full h-[300px] aspect-[4/4] overflow-hidden relative">
                                        <img
                                            src="/product/ac2.webp"
                                            alt={`product-image`}
                                            className="w-full h-[300px] object-cover object-center"
                                            width={1500}
                                            height={1500}
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t overlay-custom p-4 text-white">
                                            <div className="flex justify-center gap-1 items-center w-full">
                                                <div className="flex flex-col">
                                                    <div className="leading-tight mt-2 text-white text-md md:text-lg">Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125) on a Private basis</div>
                                                    <div className="leading-tight text-sm md:text-xl text-green font-semibold mt-2">Ticket Included</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="relative w-full h-[300px] aspect-[4/4] overflow-hidden relative">
                                        <img
                                            src="/product/ac3.webp"
                                            alt={`product-image`}
                                            className="w-full h-[300px] object-cover object-center"
                                            width={1500}
                                            height={1500}
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t overlay-custom p-4 text-white">
                                            <div className="flex justify-center gap-1 items-center w-full">
                                                <div className="flex flex-col">
                                                    <div className="leading-tight mt-2 text-white text-md md:text-lg">Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125) on a Private basis</div>
                                                    <div className="leading-tight text-sm md:text-xl text-green font-semibold mt-2">Ticket Included</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-3xl mx-auto my-5 border-b border-line">

                <div className="mb-4 overflow-hidden shadow-sm">
                    <div style={{ textAlign: 'left' }} className="flex flex-col md:flex-row gap-2 items-start md:items-center px-5">
                        <span className="text-xs font-medium bg-green px-3 py-1 rounded-full">Day 4</span>
                        <span className="text-sm font-medium">
                        Dubai Desert Safari with BBQ Dinner - Desert Safari with Shared Transfers
                        </span>
                    </div>

                    <div className='px-5 py-2'>
                        <div className='p-3 text-md mt-0 text-secondary font-light bg-white rounded-[10px]'>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={true}
                                navigation
                                className="w-full h-[300px] rounded-2xl"
                            >

                                <SwiperSlide>
                                    <div className="relative w-full h-[300px] aspect-[4/4] overflow-hidden relative">
                                        <img
                                            src="/product/ac1.webp"
                                            alt={`product-image`}
                                            width={1500}
                                            height={1500}
                                            className="w-full h-[300px] object-cover object-center"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t overlay-custom p-4 text-white">
                                            <div className="flex justify-center gap-1 items-center w-full">
                                                <div className="flex flex-col">
                                                    <div className="leading-tight mt-2 text-white text-md md:text-lg">Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125) on a Private basis</div>
                                                    <div className="leading-tight text-sm md:text-xl text-green font-semibold mt-2">Ticket Included</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="relative w-full h-[300px] aspect-[4/4] overflow-hidden relative">
                                        <img
                                            src="/product/ac2.webp"
                                            alt={`product-image`}
                                            className="w-full h-[300px] object-cover object-center"
                                            width={1500}
                                            height={1500}
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t overlay-custom p-4 text-white">
                                            <div className="flex justify-center gap-1 items-center w-full">
                                                <div className="flex flex-col">
                                                    <div className="leading-tight mt-2 text-white text-md md:text-lg">Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125) on a Private basis</div>
                                                    <div className="leading-tight text-sm md:text-xl text-green font-semibold mt-2">Ticket Included</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="relative w-full h-[300px] aspect-[4/4] overflow-hidden relative">
                                        <img
                                            src="/product/ac3.webp"
                                            alt={`product-image`}
                                            className="w-full h-[300px] object-cover object-center"
                                            width={1500}
                                            height={1500}
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t overlay-custom p-4 text-white">
                                            <div className="flex justify-center gap-1 items-center w-full">
                                                <div className="flex flex-col">
                                                    <div className="leading-tight mt-2 text-white text-md md:text-lg">Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125) on a Private basis</div>
                                                    <div className="leading-tight text-sm md:text-xl text-green font-semibold mt-2">Ticket Included</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Activities
