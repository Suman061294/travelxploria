import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import Devider from './Devider';
import Thumbneilslider from './Thumbneilsilder';
import Recommended from './Recommended';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
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

const Inclusion: React.FC<PackagedayProps> = ({ images, cityname }) => {

    return (
        <div className="container-full  rounded-2xl border border-line">
            <div className='md:pt-4 pt-4 px-6'>
                <div className='heading6 font-bold'>Inclusion / Exclusion</div>

            </div>

            <div className="max-w-3xl mx-auto my-5">

                <div className="mb-4 overflow-hidden shadow-sm">


                    <div className='px-5 py-2'>

                        <div className="flex flex-wrap px-5 py-2 gap-5">
                            {/* Inclusion List */}
                            <div className="w-full border-b border-line pb-10">
                                <h2 className="font-bold mb-3 color-green text-lg">Inclusions</h2>
                                <ul className="list-none space-y-2">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="color-green mr-2 text-lg" />
                                        <div className='md:text-sm text-xs'>IMG Worlds Of Adventure Tickets, Dubai</div>
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="color-green mr-2 text-lg" />
                                        <div className='md:text-sm text-xs'> 4 nights stay in Dubai with breakfast</div>
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="color-green mr-2 text-lg" />
                                        <div className='md:text-sm text-xs'>Burj Khalifa Tickets At the Top 124th 125th Floor</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Exclusion List */}
                            <div className="w-full">
                                <h2 className="font-bold mb-3 text-red text-lg">Exclusion</h2>
                                <ul className="list-none space-y-2">
                                    <li className="flex items-center">
                                        <FaTimesCircle className="text-red mr-2 text-lg" />
                                        <div className='md:text-sm text-xs'>Expenses of a personal nature.</div>
                                    </li>
                                    <li className="flex items-center">
                                        <FaTimesCircle className="text-red mr-2 text-lg" />
                                        <div className='md:text-sm text-xs'>Meals not mentioned in the itinerary or inclusions</div>
                                    </li>
                                    <li className="flex items-center">
                                        <FaTimesCircle className="text-red mr-2 text-lg" />
                                        <div className='md:text-sm text-xs'>Visa Charges</div>
                                    </li>
                                    <li className="flex items-center">
                                        <FaTimesCircle className="text-red mr-2 text-lg" />
                                        <div className='md:text-sm text-xs'>Any extra excursions or sightseeing apart from the above specified itinerary.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>








                </div>

            </div>


        </div>
    )
}

export default Inclusion
