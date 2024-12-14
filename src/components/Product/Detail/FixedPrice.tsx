'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import Product from '../Product'
import Rate from '@/components/Other/Rate'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from 'swiper/core';
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useCompare } from '@/context/CompareContext'
import { useModalCompareContext } from '@/context/ModalCompareContext'
import { Autoplay } from 'swiper/modules';
import Devider from '@/components/Travelexploria/Devider';
import Packageday from '@/components/Travelexploria/Packageday';
import BookingForm from '@/components/Travelexploria/BookingForm';
import Collectionfooter from '@/components/Travelexploria/Collectionfooter'
import Footer from '@/components/Travelexploria/Footer'
import Summary from '@/components/Travelexploria/Summary'
import Hotel from '@/components/Travelexploria/Hotel'
import Activities from '@/components/Travelexploria/Activities'
import Inclusion from '@/components/Travelexploria/Inclusion'


SwiperCore.use([Navigation, Thumbs]);

interface Props {
    data: Array<ProductType>
    productId: string | number | null
}

const FixedPrice: React.FC<Props> = ({ data, productId }) => {
    const swiperRef: any = useRef();
    const [photoIndex, setPhotoIndex] = useState(0)
    const [openPopupImg, setOpenPopupImg] = useState(false)
    const [openSizeGuide, setOpenSizeGuide] = useState<boolean>(false)
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const [activeTab, setActiveTab] = useState<string | undefined>('description')
    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist()
    const { openModalWishlist } = useModalWishlistContext()
    const { addToCompare, removeFromCompare, compareState } = useCompare();
    const { openModalCompare } = useModalCompareContext()
    let productMain = data.find(product => product.id === productId) as ProductType
    if (productMain === undefined) {
        productMain = data[0]
    }

    const percentSale = Math.floor(100 - ((productMain.price / productMain.originPrice) * 100))

    const handleOpenSizeGuide = () => {
        setOpenSizeGuide(true);
    };

    const handleCloseSizeGuide = () => {
        setOpenSizeGuide(false);
    };

    const handleActiveColor = (item: string) => {
        setActiveColor(item)
    }

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

    const handleIncreaseQuantity = () => {
        productMain.quantityPurchase += 1
        updateCart(productMain.id, productMain.quantityPurchase + 1, activeSize, activeColor);
    };

    const handleDecreaseQuantity = () => {
        if (productMain.quantityPurchase > 1) {
            productMain.quantityPurchase -= 1
            updateCart(productMain.id, productMain.quantityPurchase - 1, activeSize, activeColor);
        }
    };

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === productMain.id)) {
            addToCart({ ...productMain });
            updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
        } else {
            updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
        }
        openModalCart()
    };

    const handleAddToWishlist = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (wishlistState.wishlistArray.some(item => item.id === productMain.id)) {
            removeFromWishlist(productMain.id);
        } else {
            // else, add to wishlist and set state to true
            addToWishlist(productMain);
        }
        openModalWishlist();
    };



    const handleActiveTab = (tab: string) => {
        setActiveTab(prevTab => prevTab === tab ? undefined : tab)
    }

    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const [sliderData] = useState([
        {
            id: 1,
            days: '2',
            text: 'Days in',
            city: 'New York City',
        },
        {
            id: 2,
            days: '1',
            text: 'Days in',
            city: 'Los Angeles',
        },
        {
            id: 3,
            days: '3',
            text: 'Days in',
            city: 'San Francisco',
        },
        {
            id: 4,
            days: '1',
            text: 'Days in',
            city: 'Chicago',
        }
    ]);


    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the form visibility
    const toggleForm = () => {
        setIsOpen(!isOpen);
    };





    return (
        <>
            <div className="product-detail grouped">
                <div className="featured-product underwear">

                    {isMobile ? (
                        <div className="container-full md:pt-4 pt-4">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                                navigation={false}
                                className="w-full h-[300px]"
                            >
                                {productMain.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="w-full aspect-[3/4] overflow-hidden">
                                            <Image
                                                src={image}
                                                width={1000}
                                                height={1000}
                                                alt="prd-img"
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    ) : (

                        <div className="container md:pt-4 pt-4">
                            <div className="list-img grid md:grid-rows-2 md:grid-cols-3 grid-cols-2 lg:gap-[10px] gap-4 w-full">
                                <div
                                    className="bg-img md:row-span-2 row-span-1 col-span-1 max-md:aspect-[3/4] rounded-xl rounded-tr-none rounded-br-none overflow-hidden cursor-pointer"
                                    onClick={() => {
                                        swiperRef.current?.slideTo(0);
                                        setOpenPopupImg(true);
                                    }}
                                >
                                    <Image
                                        src={productMain.images[0]}
                                        width={1000}
                                        height={1000}
                                        alt="prd-img"
                                        className="w-full h-full object-cover rounded-tr-none rounded-br-none"
                                    />
                                </div>

                                {productMain.images[2] && (
                                    <>
                                        <div
                                            className="bg-img row-span-1 md:col-span-1 col-span-2 aspect-[5/3] overflow-hidden cursor-pointer"
                                            onClick={() => {
                                                swiperRef.current?.slideTo(1);
                                                setOpenPopupImg(true);
                                            }}
                                        >
                                            <Image
                                                src={productMain.images[1]}
                                                width={1000}
                                                height={1000}
                                                alt="prd-img"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div
                                            className="bg-img row-span-1 md:col-span-1 col-span-2 aspect-[5/3] rounded-xl rounded-tl-none rounded-br-none rounded-bl-none overflow-hidden cursor-pointer"
                                            onClick={() => {
                                                swiperRef.current?.slideTo(2);
                                                setOpenPopupImg(true);
                                            }}
                                        >
                                            <Image
                                                src={productMain.images[2]}
                                                width={1000}
                                                height={1000}
                                                alt="prd-img"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </>
                                )}

                                {productMain.images[3] && (
                                    <>
                                        <div
                                            className="bg-img row-span-1 md:col-span-1 col-span-2 aspect-[5/3] overflow-hidden cursor-pointer"
                                            onClick={() => {
                                                swiperRef.current?.slideTo(3);
                                                setOpenPopupImg(true);
                                            }}
                                        >
                                            <Image
                                                src={productMain.images[3]}
                                                width={1000}
                                                height={1000}
                                                alt="prd-img"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div
                                            className="bg-img row-span-1 md:col-span-1 col-span-2 aspect-[5/3] rounded-xl rounded-tr-none rounded-tl-none rounded-bl-none overflow-hidden cursor-pointer"
                                            onClick={() => {
                                                swiperRef.current?.slideTo(4);
                                                setOpenPopupImg(true);
                                            }}
                                        >
                                            <Image
                                                src={productMain.images[4]}
                                                width={1000}
                                                height={1000}
                                                alt="prd-img"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}


                    <div className="container flex justify-between gap-y-6 flex-wrap md:pt-10 pt-10">
                        <div className="desc-tab w-full lg:pr-[30px] md:pr-4">
                            <div className="heading3 font-extrabold">{productMain.name}</div>
                        </div>

                        <div className="desc-tab w-full lg:pr-[30px] md:pr-4 flex justify-start gap-3">
                            <div className="pr-3 border-r border-line w-2/5 md:w-1/4 lg:w-1/4">
                                <div className="days">6 Days</div>
                                <div className="nights">7 Nights</div>
                            </div>

                            <div className='flex flex-col justify-center  w-3/5 md:w-3/4 lg:w-3/4'>
                                <div className='heading6 font-bold text-red'> Included Cities</div>

                                {isMobile ? (

                                    <>
                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={2}
                                            loop={true}
                                            navigation={false}
                                            modules={[Autoplay]}
                                            autoplay={{
                                                delay: 2000,
                                            }}
                                            className="w-full"
                                        >
                                            {sliderData.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <div key={item.id} className="flex gap-1 items-center w-full sm:w-1/2 lg:w-1/3">
                                                        <div className="text-secondary font-extrabold text-3xl md:text-5xl">
                                                            {item.days}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <div className="leading-tight mt-2 text-secondary font-7px">
                                                                Days in
                                                            </div>
                                                            <div className="leading-tight font-9px">{item.city}</div>
                                                        </div>
                                                        <div className="flex gap-1 items-center">
                                                            <span className="animate-bounce-x mx-2 places">→</span>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                    </>

                                ) : (

                                    <div className="pr-3 flex gap-3">
                                        {sliderData.map((item) => (
                                            <div key={item.id} className="flex gap-1 items-center w-full sm:w-1/2 lg:w-1/3">
                                                <div className="text-secondary font-extrabold text-3xl md:text-5xl">
                                                    {item.days}
                                                </div>
                                                <div className="flex flex-col">
                                                    <div className="leading-tight mt-2 text-secondary font-7px">
                                                        Days in
                                                    </div>
                                                    <div className="leading-tight font-9px">{item.city}</div>
                                                </div>
                                                <div className="flex gap-1 items-center">
                                                    <span className="animate-bounce-x mx-2 places">→</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div >

                    <div className="container flex justify-between gap-y-6 flex-wrap md:py-20 py-5">
                        <div className="desc-tab md:w-3/5 w-full lg:pr-[30px] md:pr-4">
                            <div className="get-it pb-6">
                                <div className="heading5 font-bold text-red">Inclusion</div>
                                <div className='flex flex-wrap gap-4'>
                                    <div className="item flex items-center gap-1 mt-2">
                                        <span className="material-icons text-4xl">local_taxi</span>
                                        <div>
                                            <div className="font-light">Cab Transfers</div>
                                        </div>
                                    </div>

                                    <div className="item flex items-center gap-1 mt-2">
                                        <span className="material-icons text-4xl">bed</span>
                                        <div>
                                            <div className="font-light">Accommodation</div>
                                        </div>
                                    </div>

                                    <div className="item flex items-center gap-1 mt-2">
                                        <span className="material-icons text-4xl">coffee</span>
                                        <div>
                                            <div className="font-light">Breakfast</div>
                                        </div>
                                    </div>

                                    <div className="item flex items-center gap-1 mt-2">
                                        <span className="material-icons text-4xl">nature_people</span>
                                        <div>
                                            <div className="font-light">Activity</div>
                                        </div>
                                    </div>

                                    <div className="item flex items-center gap-1 mt-2">
                                        <span className="material-icons text-4xl">nature_people</span>
                                        <div>
                                            <div className="font-light">Activity</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Devider />

                            <div className="desc-block pb-6 mt-6">
                                <div className="heading6 font-bold text-red">Trip Overview</div>
                                <div className="list-feature">
                                    <div className="item flex gap-1 text-secondary text-xs mt-1">
                                        <Icon.Dot size={28} />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="item flex gap-1 text-secondary text-xs mt-1">
                                        <Icon.Dot size={28} />
                                        <p>Nulla luctus libero quis mauris vestibulum dapibus.</p>
                                    </div>
                                    <div className="item flex gap-1 text-secondary text-xs mt-1">
                                        <Icon.Dot size={28} />
                                        <p>Maecenas ullamcorper erat mi, vel consequat enim suscipit at.</p>
                                    </div>
                                    <div className="item flex gap-1 text-secondary text-xs mt-1">
                                        <Icon.Dot size={28} />
                                        <p>Quisque consectetur nibh ac urna molestie scelerisque.</p>
                                    </div>
                                    <div className="item flex gap-1 text-secondary text-xs mt-1">
                                        <Icon.Dot size={28} />
                                        <p>Mauris in nisl scelerisque massa consectetur pretium sed et mauris.</p>
                                    </div>
                                </div>

                            </div>




                            <div className="desc-tab">
                                <div className="container-full">
                                    <div className='sticky-top1 top-0'>

                                        <div className="flex items-center justify-start w-full p-3 bg-green">
                                            <div className="menu-tab flex items-center md:gap-[60px] gap-5">
                                                <div
                                                    className={`font-12px tab-item has-line-before text-black hover:text-black duration-300 ${activeTab === 'description' ? 'active' : ''}`}
                                                    onClick={() => handleActiveTab('description')}
                                                >
                                                    Itinerary
                                                </div>
                                                <div
                                                    className={`font-12px tab-item has-line-before text-black hover:text-black duration-300 ${activeTab === 'specifications' ? 'active' : ''}`}
                                                    onClick={() => handleActiveTab('specifications')}
                                                >
                                                    Summary
                                                </div>
                                                <div
                                                    className={`font-12px tab-item has-line-before text-black hover:text-black duration-300 ${activeTab === 'hotel' ? 'active' : ''}`}
                                                    onClick={() => handleActiveTab('hotel')}
                                                >
                                                    Hotel
                                                </div>
                                                <div
                                                    className={`font-12px tab-item has-line-before text-black hover:text-black duration-300 ${activeTab === 'activity' ? 'active' : ''}`}
                                                    onClick={() => handleActiveTab('activity')}
                                                >
                                                    Activity
                                                </div>
                                                <div
                                                    className={`font-12px tab-item has-line-before text-black hover:text-black duration-300 ${activeTab === 'incexc' ? 'active' : ''}`}
                                                    onClick={() => handleActiveTab('incexc')}
                                                >
                                                    Inclusion / Exclusion
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="desc-block mt-2">
                                        <div className={`desc-item description ${activeTab === 'description' ? 'open' : ''}`}>
                                            <Packageday images={productMain.images} cityname={`Dubai`} />

                                        </div>
                                        <div className={`desc-item specifications ${activeTab === 'specifications' ? 'open' : ''}`}>
                                            <Summary images={productMain.images} cityname={`Dubai`} />
                                        </div>
                                        <div className={`desc-item review-block ${activeTab === 'hotel' ? 'open' : ''}`}>
                                            <Hotel images={productMain.images} cityname={`Dubai`} />
                                        </div>
                                        <div className={`desc-item review-block ${activeTab === 'activity' ? 'open' : ''}`}>
                                            <Activities images={productMain.images} cityname={`Dubai`} />
                                        </div>
                                        <div className={`desc-item review-block ${activeTab === 'incexc' ? 'open' : ''}`}>
                                            <Inclusion images={productMain.images} cityname={`Dubai`} />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="product-infor md:w-2/5 w-full lg:pl-[30px] md:pl-4 hidden md:block lg:block">
                            <div className='sticky-top1 top-[20px]'>
                                <div className="content bg-white lg:py-6 lg:px-10 p-6 lg:rounded-3xl rounded-2xl box-shadow-sm"
                                    style={{ border: '1px solid #e5e5e5' }}
                                >
                                    <div className="flex justify-between">
                                        <div>
                                            <div className="heading7 mt-1 font-bold">{productMain.name}</div>
                                        </div>
                                    </div>


                                    <div className="flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                                        <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line">
                                            <div className="caption10 text-sm">3 Star</div>
                                        </div>
                                        <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ">
                                            <div className="caption10 text-sm">4 Star</div>
                                        </div>
                                        <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ">
                                            <div className="caption10 text-sm">5 Star</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 flex-wrap mt-2 pb-6">
                                        <div className="product-price heading5 font-bold text-red">₹{productMain.price}.00</div>





                                        <div className="product-origin-price font-normal text-secondary2"><del>₹{productMain.originPrice}.00</del></div>
                                        {productMain.originPrice && (
                                            <div className="product-sale caption2 font-semibold bg-green px-3 py-0.5 inline-block rounded-full">
                                                -{percentSale}%
                                            </div>
                                        )}
                                        {/* <div className='desc text-secondary mt-3'>{productMain.description}</div> */}
                                    </div>
                                    <BookingForm />
                                </div>
                            </div>


                        </div>
                    </div>


                </div >
            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setIsOpen(false)} // Optional: close the panel when overlay is clicked
                />
            )}

            {isOpen && (

                <div
                    className={`shadow-custom2 fixed bottom-0 left-0 w-full h-[600px] bg-white z-50 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} style={{ zIndex: '9999' }}>
                    <div className="p-4 pr-10 h-full overflow-auto">
                        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-3 rounded-lg w-full max-w-md relative">
                                <button
                                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                                    onClick={toggleForm}
                                >
                                    ✕
                                </button>

                                <div className="flex justify-between">
                                    <div>
                                        <div className="heading7 mt-1 font-bold">{productMain.name}</div>
                                    </div>
                                </div>


                                <div className="flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                                    <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line">
                                        <div className="caption10 text-sm">3 Star</div>
                                    </div>
                                    <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ">
                                        <div className="caption10 text-sm">4 Star</div>
                                    </div>
                                    <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ">
                                        <div className="caption10 text-sm">5 Star</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 flex-wrap mt-2 pb-6">
                                    <div className="product-price heading5 font-bold text-red">₹{productMain.price}.00</div>





                                    <div className="product-origin-price font-normal text-secondary2"><del>₹{productMain.originPrice}.00</del></div>
                                    {productMain.originPrice && (
                                        <div className="product-sale caption2 font-semibold bg-green px-3 py-0.5 inline-block rounded-full">
                                            -{percentSale}%
                                        </div>
                                    )}
                                    {/* <div className='desc text-secondary mt-3'>{productMain.description}</div> */}
                                </div>
                                <BookingForm />
                            </div>
                        </div>

                    </div>
                </div>


            )}


            <div className="fixed-bottom-menu shadow-custom2 w-full p-2 bg-white z-50 block md:hidden lg:hidden">
                <div className="flex justify-between items-center gap-2">
                    <div className="w-5/6 flex items-center gap-2">
                        <button className="flex items-center justify-center w-full py-3 h-[40px] bg-green text-black rounded-md" onClick={toggleForm}>
                            Book Now
                        </button>
                    </div>



                    {/* Right Section */}
                    <div className="w-1/6 flex justify-end">
                        <button
                            className="flex items-center justify-center w-full h-[40px] py-3 bg-white text-black rounded-md border border-line hover:bg-gray-200"
                        >
                            <span className="material-icons mr-2">call</span>
                        </button>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default FixedPrice