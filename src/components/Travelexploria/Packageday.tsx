import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
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
                            <div style={{ textAlign:'left' }} className='flex gap-2 items-center'>
                            <span className="text-xs font-medium bg-green px-3 py-1 rounded-full">Day {item.day}</span>
                            <span className="text-sm font-medium">{item.title}</span>
                            </div>
                            
                            <span className="text-md">
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-[max-height] duration-500 ${openIndex === index ? 'max-h-40' : 'max-h-0'
                                }`}
                        >
                            <div className="p-4 bg-white">{item.content}</div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Packageday
