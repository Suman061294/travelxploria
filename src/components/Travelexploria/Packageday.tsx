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

const Packageday: React.FC<PackagedayProps> = ({ images, cityname }) => {
    // Initialize all accordion items to be open
    const [openIndexes, setOpenIndexes] = useState<boolean[]>(new Array(accordionData.length).fill(true));

    const toggleAccordion = (index: number) => {
        // Toggle the specific item at the clicked index
        setOpenIndexes((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };
    return (
        <div className="container-full section-swiper-navigation md:pt-4 pt-4 rounded-2xl">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation
                className="w-full h-[300px] rounded-2xl"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[300px] aspect-[4/4] overflow-hidden relative">

                            <img
                                src={image}
                                alt={`product-image-${index}`}
                                className="w-full h-[300px] object-cover object-center"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t overlay-custom p-4 text-white">
                                <div className="flex justify-center gap-1 items-center w-full">
                                    <div className="text-secondary2 font-extrabold text-8xl md:text-8xl">5</div>
                                    <div className="flex flex-col">
                                        <div className="leading-tight mt-2 text-white text-2xl md:text-2xl">Days in</div>
                                        <div className="leading-tight text-3xl md:text-3xl text-red">{cityname}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

            <div className="max-w-3xl mx-auto my-5 p-0">
                {accordionData.map((item, index) => (
                    <div key={index} className="mb-4 border border-line shadow-cumtom rounded-lg overflow-hidden shadow-sm">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none transition-all duration-300"
                        >
                            <div style={{ textAlign: 'left' }} className="flex flex-col md:flex-row gap-2 items-start md:items-center">
                                <span className="text-xs font-medium bg-green px-3 py-1 rounded-full">Day {item.day}</span>
                                <span className="text-sm font-medium">{item.title}</span>
                            </div>


                            <span className="text-md">
                                {openIndexes[index] ? (
                                    <FaChevronUp className="text-xl" />
                                ) : (
                                    <FaChevronDown className="text-xl" />
                                )}
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-[max-height] duration-500 ${openIndexes[index] ? 'h-full' : 'max-h-0'}`}
                        >
                            <div className="md:p-7 lg:p-7 p-2 bg-white">
                                <div className=' py-3 text-sm text-black font-light'>
                                    {item.content}
                                </div>



                                {/* ----------------- Taxi Component ------------- */}
                                <div className='p-3 my-5 text-md text-secondary font-light bg-light-yellow rounded-[10px]'>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="item flex items-center gap-1 mt-2">
                                            <span className="material-icons text-xs text-red">local_taxi</span>
                                            <div>
                                                <div className="font-semibold text-xs text-red">Private Transfer</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='font-bold text-black'>Transfer in Toyota Sienna, Toyota Previa or similar</div>



                                    <div className='mt-0 flex gap-1 w-full'>
                                        <div className='w-1/12'>
                                            <div className="text-center">
                                                <div className='flex items-center justify-center'>
                                                    <span className="material-icons text-xs text-red">location_on</span>
                                                </div>
                                                <div className='flex items-center justify-center'>
                                                    <div className="border-l border-dotted border-gray-400 h-80px my-1"></div>
                                                </div>

                                                <div className='flex items-center justify-center'>
                                                    <span className="material-icons text-xs text-red">location_on</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='w-11/12 flex flex-wrap justify-between items-center'>
                                            <div className='flex gap-2 px-2 py-1 bg-white rounded-[5px] shadow-custom2 w-full'>
                                                <div className='flex items-center justify-center border-r border-line'>
                                                    <span className="material-icons text-xs text-secondary me-1">flight</span>
                                                </div>
                                                <div>
                                                    <div className='text-red font-semibold text-xs'>
                                                        From
                                                    </div>
                                                    <div className='text-sm text-black font-semibold'>
                                                        Dubai International Airport
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='flex gap-2 px-2 py-1 bg-white rounded-[5px] shadow-custom2 w-full'>
                                                <div className='flex items-center justify-center border-r border-line'>
                                                    <span className="material-icons text-xs text-secondary me-1">bed</span>
                                                </div>
                                                <div>
                                                    <div className='text-red font-semibold text-xs'>
                                                        To
                                                    </div>
                                                    <div className='text-sm text-black font-semibold'>
                                                        Standard Hotel in Dubai
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <Devider />

                                {/* ----------------- Hotel Component ------------- */}
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

                                <Devider />
                                {/* -------------------------- Recommended ----------------------- */}

                                <div className="th-lde-wrapper ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                        <path d="M21.7059 7.49902C20.5983 7.50391 16.5497 7.73824 13.5361 10.7061C12.2681 11.9014 11.4965 13.2139 11 14.4482C10.5035 13.2127 9.73003 11.8994 8.46465 10.7424C5.45417 7.74121 1.40365 7.50684 0.296007 7.49902C0.128906 7.49902 0 7.63184 0 7.80762C0.00954861 8.89668 0.272135 12.7373 3.38976 15.5928C6.6 18.7881 9.77778 18.7139 11 18.7139C12.2222 18.7139 15.4 18.7539 18.6122 15.5557C21.7288 12.7334 21.9924 8.89355 22 7.80762C22 7.63184 21.8701 7.49902 21.7059 7.49902ZM11 11.8193C11.487 11.0822 12.0549 10.4229 12.6855 9.84668C13.4112 9.11934 14.1942 8.54316 14.9867 8.0791C14.3565 5.3252 13.0102 2.88379 11.2914 1.34863C11.1339 1.21191 10.8713 1.21191 10.7139 1.34863C8.99517 2.88184 7.64882 5.31738 7.01861 8.07129C7.79663 8.53027 8.56549 9.0916 9.28163 9.80449C9.93056 10.4053 10.5073 11.0811 11 11.8193Z" fill="#35ab38"></path></svg>
                                    <div className="th-lde-label">Enjoy your time at Leisure</div><div>

                                    </div>
                                </div>

                                <div className='th-suggestion-section mt-4'>
                                    <div className="suggestion-head">
                                        <div className="suggestion-type">
                                            <div className="left-section-wrapper">
                                                <div className="recommended-section">
                                                    <div className="text">Recommended</div>
                                                    <div className="line"></div>
                                                </div>
                                                <div className="suggestion-text">Enrich your day with experiences<sup>
                                                </sup>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <Recommended />


                                </div>



                                {/* -------------------- Activites --------------- */}
                                <Devider />

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

                                    <div className=' py-3 text-sm text-black font-light'>
                                        {item.content}
                                    </div>

                                </div>



                            </div>








                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Packageday
