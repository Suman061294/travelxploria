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

const Summary: React.FC<PackagedayProps> = ({ images, cityname }) => {

    return (
        <div className="container-full  rounded-2xl border border-line">
            <div className='md:pt-4 pt-4 px-6'>
                <div className='heading6 font-bold'>Trip Summary</div>
                <div className='flex gap-3 my-4'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-balloon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984M13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0m-6.938-.495a2 2 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5s-.226-.504-.498-.459a3 3 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495" />
                        </svg>
                        <div className='text-sm font-semibold text-secondary'>4 Activities</div>
                    </div>
                    <div>|</div>
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-taxi-front-fill" viewBox="0 0 16 16">
                            <path d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.8.8 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413q0-.248-.049-.49l-.335-1.68a1.8 1.8 0 0 0-.964-1.261.8.8 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1zM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17s-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4M4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" />
                        </svg>
                        <div className='text-sm font-semibold text-secondary'>8 Transfers</div>
                    </div>
                    <div>|</div>
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-heart" viewBox="0 0 16 16">
                            <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982" />
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                        </svg>
                        <div className='text-sm font-semibold text-secondary'>2 Hotels</div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto my-5">
                {accordionData.map((item, index) => (
                    <div key={index} className="mb-4 overflow-hidden shadow-sm">
                        <div className='bg-light-custom p-1 px-4 flex justify-between items-center'>
                            <div className='heading7 font-bold'>Day {item.day}</div>
                            <div className='flex gap-1'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-balloon" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984M13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0m-6.938-.495a2 2 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5s-.226-.504-.498-.459a3 3 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495" />
                                    </svg>
                                    <div className='text-xs font-light text-secondary'>1</div>
                                </div>
                                <div>|</div>
                                <div className='flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-taxi-front-fill" viewBox="0 0 16 16">
                                        <path d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.8.8 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413q0-.248-.049-.49l-.335-1.68a1.8 1.8 0 0 0-.964-1.261.8.8 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1zM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17s-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4M4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" />
                                    </svg>
                                    <div className='text-xs font-light text-secondary'>1</div>
                                </div>
                                <div>|</div>
                                <div className='flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-house-heart" viewBox="0 0 16 16">
                                        <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982" />
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                                    </svg>
                                    <div className='text-xs font-light text-secondary'>1</div>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 py-2'>
                            <div className='flex gap-3 border-b border-line p-2'>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-taxi-front-fill" viewBox="0 0 16 16">
                                        <path d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.8.8 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413q0-.248-.049-.49l-.335-1.68a1.8 1.8 0 0 0-.964-1.261.8.8 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1zM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17s-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4M4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" />
                                    </svg>
                                </div>
                                <div className='text-sm'> <strong>Transfer:</strong> Transfer from Dubai International Airport to Standard Hotel in Dubai</div>
                            </div>
                        </div>


                        <div className='px-5'>
                            <div className='flex gap-3 border-b border-line p-2'>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-heart" viewBox="0 0 16 16">
                                        <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982" />
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                                    </svg>
                                </div>
                                <div className='text-sm'> <strong>Hotel:</strong> Check-in at Standard Hotel in Dubai</div>
                            </div>

                            <div className='bg-light-custom p-3 rounded-md mt-2 flex gap-1 text-xs'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-cup-hot" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175" />
                                        <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
                                    </svg>
                                </div>
                                <div className='text-xs font-semibold'>
                                  Breakfast at Standard Hotel
                                </div>
                            </div>

                        </div>


                        <div className='px-5'>
                            <div className='flex gap-3 border-b border-line p-2'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-balloon" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984M13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0m-6.938-.495a2 2 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5s-.226-.504-.498-.459a3 3 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495" />
                                    </svg>
                                </div>
                                <div className='text-sm'> <strong>3 Activities:</strong></div>
                            </div>
                            <div>
                                <ul className='text-sm p-2 px-6' style={{ lineHeight: '25px' }}>
                                    <li>Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125) on a Private basis</li>
                                    <li>Dubai Desert Safari with BBQ Dinner - Desert Safari with Shared Transfers</li>
                                </ul>
                            </div>
                        </div>




                        <div className='px-5'>
                            <div className='flex gap-3 border-b border-line p-2'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-taxi-front-fill" viewBox="0 0 16 16">
                                        <path d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.8.8 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413q0-.248-.049-.49l-.335-1.68a1.8 1.8 0 0 0-.964-1.261.8.8 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1zM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17s-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4M4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" />
                                    </svg>
                                </div>
                                <div className='text-sm'> <strong>3 Transfers:</strong></div>
                            </div>
                            <div>
                                <ul className='text-sm p-2 px-6' style={{ lineHeight: '25px' }}>
                                    <li>Transfer from Standard Hotel in Dubai to Burj Khalifa Tickets At the Top 124th 125th Floor</li>
                                    <li>Transfer from Burj Khalifa Tickets At the Top 124th 125th Floor to Dubai Desert Safari with BBQ Dinner</li>
                                    <li>Transfer from Dubai Desert Safari with BBQ Dinner to Standard Hotel in Dubai</li>
                                </ul>
                            </div>
                        </div>


                        <div className='px-5'>
                            <div className="th-lde-wrapper ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path d="M21.7059 7.49902C20.5983 7.50391 16.5497 7.73824 13.5361 10.7061C12.2681 11.9014 11.4965 13.2139 11 14.4482C10.5035 13.2127 9.73003 11.8994 8.46465 10.7424C5.45417 7.74121 1.40365 7.50684 0.296007 7.49902C0.128906 7.49902 0 7.63184 0 7.80762C0.00954861 8.89668 0.272135 12.7373 3.38976 15.5928C6.6 18.7881 9.77778 18.7139 11 18.7139C12.2222 18.7139 15.4 18.7539 18.6122 15.5557C21.7288 12.7334 21.9924 8.89355 22 7.80762C22 7.63184 21.8701 7.49902 21.7059 7.49902ZM11 11.8193C11.487 11.0822 12.0549 10.4229 12.6855 9.84668C13.4112 9.11934 14.1942 8.54316 14.9867 8.0791C14.3565 5.3252 13.0102 2.88379 11.2914 1.34863C11.1339 1.21191 10.8713 1.21191 10.7139 1.34863C8.99517 2.88184 7.64882 5.31738 7.01861 8.07129C7.79663 8.53027 8.56549 9.0916 9.28163 9.80449C9.93056 10.4053 10.5073 11.0811 11 11.8193Z" fill="#35ab38"></path></svg>
                                <div className="th-lde-label">Enjoy your time at Leisure</div><div>

                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>


        </div>
    )
}

export default Summary
