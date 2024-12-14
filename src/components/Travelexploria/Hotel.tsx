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

const Hotel: React.FC<PackagedayProps> = ({ images, cityname }) => {

    return (
        <div className="container-full  rounded-2xl border border-line">
            <div className='md:pt-4 pt-4 px-6'>
                <div className='heading6 font-bold'>Hotels</div>

            </div>

            <div className="max-w-3xl mx-auto my-5">

                <div className="mb-4 overflow-hidden shadow-sm">
                    <div style={{ textAlign: 'left' }} className="flex flex-col md:flex-row gap-2 items-start md:items-center px-5">
                        <span className="text-xs font-medium bg-green px-3 py-1 rounded-full">Day 1</span>
                        <span className="text-sm font-medium">
                            Welcome to Dubai, 'The Pearl of the Gulf' | Day at Leisure</span>
                    </div>

                    <div className='px-5 py-2'>
                        <div className='p-3 text-md mt-0 text-secondary font-light bg-white rounded-[10px]'>
                            <div className="flex flex-wrap gap-4">
                                <div className="item flex items-center gap-1 mt-2">
                                    <span className="material-icons text-black text-secondary">bed</span>
                                    <div>
                                        <div className="font-semibold text-xs text-secondary">Stay At</div>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-black'>Check-in at Standard Hotel in Dubai
                                <span className='text-red'>(4 Days)</span>
                            </div>


                            <div className="flex justify-between gap-4 items-center gap-1 my-2 py-2 px-3 rounded-[4px]" style={{ background: '#efefef' }}>
                                <div>
                                    <div className="font-semibold text-xs text-black" style={{ fontSize: '10px' }}>Check In</div>
                                    <div className="font-bold text-xs text-black">3:00 PM.</div>
                                </div>

                                <div className='font-semibold text-xs'>
                                    <span className='hidden'>--------</span>1 room / 1 Guest<span className='hidden'>--------</span>
                                </div>

                                <div>
                                    <div className="font-semibold text-xs text-black" style={{ fontSize: '10px' }}>Check Out</div>
                                    <div className="font-bold text-xs text-black">12:00 PM.</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-200 p-1 text-center">
                                    <Swiper
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        loop={true}
                                        className="w-full h-[170px] rounded-2xl"
                                    >

                                        <SwiperSlide >
                                            <div className="relative w-full h-[170px] aspect-[4/4] overflow-hidden relative">

                                                <img
                                                    src="/product/hotel1.webp"
                                                    alt={`product-image`}
                                                    className="w-full h-[170px] object-cover object-center"
                                                />
                                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t overlay-custom p-4 text-white">
                                                    <div className="flex justify-center gap-1 items-center w-full">
                                                        <div className="text-secondary2 font-extrabold text-2xl md:text-2xl">
                                                            <span className="material-icons text-secondary2 text-2xl ml-2">star</span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <div className="leading-tight text-white text-xl md:text-xl">3.5/5</div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>


                                    </Swiper>
                                    <div className='text-black font-semibold'>Royal Falcon Hotel, Dubai</div>
                                </div>

                                <div className="bg-gray-300 p-1 text-center">
                                    <Swiper
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        loop={true}
                                        className="w-full h-[170px] rounded-2xl"
                                    >
                                        <SwiperSlide >
                                            <div className="relative w-full h-[170px] aspect-[4/4] overflow-hidden relative">

                                                <img
                                                    src="/product/hotel3.webp"
                                                    alt={`product-image`}
                                                    className="w-full h-[170px] object-cover object-center"
                                                />
                                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t overlay-custom p-4 text-white">
                                                    <div className="flex justify-center gap-1 items-center w-full">
                                                        <div className="text-secondary2 font-extrabold text-2xl md:text-2xl">
                                                            <span className="material-icons text-secondary2 text-2xl ml-2">star</span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <div className="leading-tight text-white text-xl md:text-xl">3.5/5</div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className='text-black font-semibold'>Orchid Hotel, Dubai</div>
                                </div>
                            </div>


                            <div className="flex justify-center md:gap-24 lg:gap-24 gap-4 items-center gap-1 my-2 py-4 px-3 rounded-[4px] td-inclusion">
                                <div className='font-semibold text-xs'>
                                    <div className='flex gap-1 text-xs text-black'>
                                        <span className="material-icons included">coffee</span> Breakfast
                                    </div>
                                    <div className='flex gap-1 text-xs color-green'>
                                        <span className="material-icons color-green" style={{ fontSize: '15px' }}>done_all</span> Included
                                    </div>
                                </div>


                                <div className='font-semibold text-xs text-xs'>
                                    <div className='flex gap-1 text-xs text-secondary'>
                                        <span className="material-icons included text-secondary">lunch_dining</span> Lunch
                                    </div>
                                    <div className='flex gap-1 text-xs text-secondary'>
                                        <span className="material-icons text-secondary" style={{ fontSize: '15px' }}>close</span> Not included
                                    </div>
                                </div>

                                <div className='font-semibold text-xs'>
                                    <div className='flex gap-1 text-xs text-secondary'>
                                        <span className="material-icons text-secondary" style={{ fontSize: '20px' }}>ramen_dining</span> Dinner
                                    </div>
                                    <div className='flex gap-1 text-xs text-secondary'>
                                        <span className="material-icons text-secondary" style={{ fontSize: '15px' }}>close</span> Not included
                                    </div>
                                </div>


                            </div>

                            <div className='text-center text-red text-xs md:text-sm lg:text-sm font-bold'>
                                <em>Stays will be allocated based on availability or similar category</em>
                            </div>

                        </div>
                    </div>








                </div>

            </div>


        </div>
    )
}

export default Hotel
