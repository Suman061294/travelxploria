'use client'

import React, { useState, useEffect, useRef } from 'react';
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
// import ModalSizeguide from '@/components/Modal/ModalSizeguide'

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

    const handleAddToCompare = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (compareState.compareArray.length < 3) {
            if (compareState.compareArray.some(item => item.id === productMain.id)) {
                removeFromCompare(productMain.id);
            } else {
                // else, add to wishlist and set state to true
                addToCompare(productMain);
            }
        } else {
            alert('Compare up to 3 products')
        }

        openModalCompare();
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

                    <div className="container flex justify-between gap-y-6 flex-wrap md:py-20 py-20">
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

                            <Devider />


                            <div className="desc-tab">
                                <div className="container-full">
                                    <div className="flex items-center justify-start w-full p-3 bg-green">
                                        <div className="menu-tab flex items-center md:gap-[60px] gap-2">
                                            <div
                                                className={`tab-item heading7 has-line-before text-black hover:text-black duration-300 ${activeTab === 'description' ? 'active' : ''}`}
                                                onClick={() => handleActiveTab('description')}
                                            >
                                                Itinerary
                                            </div>
                                            <div
                                                className={`tab-item heading7 has-line-before text-black hover:text-black duration-300 ${activeTab === 'specifications' ? 'active' : ''}`}
                                                onClick={() => handleActiveTab('specifications')}
                                            >
                                                Summary
                                            </div>
                                            <div
                                                className={`tab-item heading7 has-line-before text-black hover:text-black duration-300 ${activeTab === 'hotel' ? 'active' : ''}`}
                                                onClick={() => handleActiveTab('hotel')}
                                            >
                                                Hotel
                                            </div>
                                            <div
                                                className={`tab-item heading7 has-line-before text-black hover:text-black duration-300 ${activeTab === 'activity' ? 'active' : ''}`}
                                                onClick={() => handleActiveTab('activity')}
                                            >
                                                Activity
                                            </div>
                                            <div
                                                className={`tab-item heading7 has-line-before text-black hover:text-black duration-300 ${activeTab === 'incexc' ? 'active' : ''}`}
                                                onClick={() => handleActiveTab('incexc')}
                                            >
                                                Inclusion / Exclusion
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc-block mt-2">
                                        <div className={`desc-item description ${activeTab === 'description' ? 'open' : ''}`}>
                                            <Packageday images={productMain.images} cityname={`Dubai`} />

                                        </div>
                                        <div className={`desc-item specifications flex items-center justify-center ${activeTab === 'specifications' ? 'open' : ''}`}>
                                            specifications
                                        </div>
                                        <div className={`desc-item review-block ${activeTab === 'hotel' ? 'open' : ''}`}>
                                            hotel
                                        </div>
                                        <div className={`desc-item review-block ${activeTab === 'activity' ? 'open' : ''}`}>
                                            activity
                                        </div>
                                        <div className={`desc-item review-block ${activeTab === 'incexc' ? 'open' : ''}`}>
                                            Inclusion / Exclusion
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-infor md:w-2/5 w-full lg:pl-[30px] md:pl-4">
                            <div className="content bg-white lg:p-10 p-6 lg:rounded-3xl rounded-2xl box-shadow-sm">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="caption2 text-secondary font-semibold uppercase">{productMain.type}</div>
                                        <div className="heading4 mt-1">{productMain.name}</div>
                                    </div>
                                    <div
                                        className={`add-wishlist-btn w-12 h-12 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white ${wishlistState.wishlistArray.some(item => item.id === productMain.id) ? 'active' : ''}`}
                                        onClick={handleAddToWishlist}
                                    >
                                        {wishlistState.wishlistArray.some(item => item.id === productMain.id) ? (
                                            <>
                                                <Icon.Heart size={24} weight='fill' className='text-white' />
                                            </>
                                        ) : (
                                            <>
                                                <Icon.Heart size={24} />
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <Rate currentRate={productMain.rate} size={14} />
                                    <span className='caption1 text-secondary'>(1.234 reviews)</span>
                                </div>
                                <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                                    <div className="product-price heading5">${productMain.price}.00</div>
                                    <div className='w-px h-4 bg-line'></div>
                                    <div className="product-origin-price font-normal text-secondary2"><del>${productMain.originPrice}.00</del></div>
                                    {productMain.originPrice && (
                                        <div className="product-sale caption2 font-semibold bg-green px-3 py-0.5 inline-block rounded-full">
                                            -{percentSale}%
                                        </div>
                                    )}
                                    <div className='desc text-secondary mt-3'>{productMain.description}</div>
                                </div>
                                <div className="list-action mt-6">
                                    <div className="choose-color mt-5">
                                        <div className="text-title">Colors: <span className='text-title color'>{activeColor}</span></div>
                                        <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                                            {productMain.variation.map((item, index) => (
                                                <div
                                                    className={`color-item w-12 h-12 rounded-xl duration-300 relative ${activeColor === item.color ? 'active' : ''}`}
                                                    key={index}
                                                    onClick={() => handleActiveColor(item.color)}
                                                >
                                                    <Image
                                                        src={item.colorImage}
                                                        width={100}
                                                        height={100}
                                                        alt='color'
                                                        className='rounded-xl'
                                                    />
                                                    <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                                        {item.color}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="choose-size mt-5">
                                        <div className="heading flex items-center justify-between">
                                            <div className="text-title">Size: <span className='text-title size'>{activeSize}</span></div>
                                            <div
                                                className="caption1 size-guide text-red underline cursor-pointer"
                                                onClick={handleOpenSizeGuide}
                                            >
                                                Size Guide
                                            </div>
                                            {/* <ModalSizeguide data={productMain} isOpen={openSizeGuide} onClose={handleCloseSizeGuide} /> */}
                                        </div>
                                        <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                                            {productMain.sizes.map((item, index) => (
                                                <div
                                                    className={`size-item ${item === 'freesize' ? 'px-3 py-2' : 'w-12 h-12'} flex items-center justify-center text-button rounded-full bg-white border border-line ${activeSize === item ? 'active' : ''}`}
                                                    key={index}
                                                    onClick={() => handleActiveSize(item)}
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-title mt-5">Quantity:</div>
                                    <div className="choose-quantity flex items-center lg:justify-between md:flex-wrap gap-5 gap-y-3 mt-3">
                                        <div className="quantity-block md:p-3 max-md:py-1.5 max-md:px-3 flex items-center justify-between rounded-lg border border-line sm:w-[180px] w-[120px] flex-shrink-0">
                                            <Icon.Minus
                                                size={20}
                                                onClick={handleDecreaseQuantity}
                                                className={`${productMain.quantityPurchase === 1 ? 'disabled' : ''} cursor-pointer`}
                                            />
                                            <div className="body1 font-semibold">{productMain.quantityPurchase}</div>
                                            <Icon.Plus
                                                size={20}
                                                onClick={handleIncreaseQuantity}
                                                className='cursor-pointer'
                                            />
                                        </div>
                                        <div onClick={handleAddToCart} className="button-main w-full text-center bg-white text-black border border-black">Add To Cart</div>
                                    </div>
                                    <div className="button-block mt-5">
                                        <div className="button-main w-full text-center">Buy It Now</div>
                                    </div>
                                    <div className="flex items-center flex-wrap lg:gap-20 gap-5 gap-y-4 mt-5">
                                        <div className="compare flex items-center gap-3 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleAddToCompare() }}>
                                            <div className="compare-btn md:w-12 md:h-12 w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white">
                                                <Icon.ArrowsCounterClockwise className='heading6' />
                                            </div>
                                            <span>Compare</span>
                                        </div>
                                        <div className="share flex items-center gap-3 cursor-pointer">
                                            <div className="share-btn md:w-12 md:h-12 w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white">
                                                <Icon.ShareNetwork weight='fill' className='heading6' />
                                            </div>
                                            <span>Share Products</span>
                                        </div>
                                    </div><div className="more-infor mt-6">
                                        <div className="flex items-center gap-4 flex-wrap">
                                            <div className="flex items-center gap-1">
                                                <Icon.ArrowClockwise className='body1' />
                                                <div className="text-title">Delivery & Return</div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Icon.Question className='body1' />
                                                <div className="text-title">Ask A Question</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 mt-3">
                                            <Icon.Timer className='body1' />
                                            <div className="text-title">Estimated Delivery:</div>
                                            <div className="text-secondary">14 January - 18 January</div>
                                        </div>
                                        <div className="flex items-center gap-1 mt-3">
                                            <Icon.Eye className='body1' />
                                            <div className="text-title">38</div>
                                            <div className="text-secondary">people viewing this product right now!</div>
                                        </div>
                                        <div className="flex items-center gap-1 mt-3">
                                            <div className="text-title">SKU:</div>
                                            <div className="text-secondary">53453412</div>
                                        </div>
                                        <div className="flex items-center gap-1 mt-3">
                                            <div className="text-title">Categories:</div>
                                            <div className="text-secondary">{productMain.category}, {productMain.gender}</div>
                                        </div>
                                        <div className="flex items-center gap-1 mt-3">
                                            <div className="text-title">Tag:</div>
                                            <div className="text-secondary">{productMain.type}</div>
                                        </div>
                                    </div>
                                    <div className="list-payment mt-7">
                                        <div className="main-content lg:pt-8 pt-6 lg:pb-6 pb-4 sm:px-4 px-3 border border-line rounded-xl relative max-md:w-2/3 max-sm:w-full">
                                            <div className="heading6 px-5 bg-white absolute -top-[14px] left-1/2 -translate-x-1/2 whitespace-nowrap">Guranteed safe checkout</div>
                                            <div className="list grid grid-cols-6">
                                                <div className="item flex items-center justify-center lg:px-3 px-1">
                                                    <Image
                                                        src={'/images/payment/Frame-0.png'}
                                                        width={500}
                                                        height={450}
                                                        alt='payment'
                                                        className='w-full'
                                                    />
                                                </div>
                                                <div className="item flex items-center justify-center lg:px-3 px-1">
                                                    <Image
                                                        src={'/images/payment/Frame-1.png'}
                                                        width={500}
                                                        height={450}
                                                        alt='payment'
                                                        className='w-full'
                                                    />
                                                </div>
                                                <div className="item flex items-center justify-center lg:px-3 px-1">
                                                    <Image
                                                        src={'/images/payment/Frame-2.png'}
                                                        width={500}
                                                        height={450}
                                                        alt='payment'
                                                        className='w-full'
                                                    />
                                                </div>
                                                <div className="item flex items-center justify-center lg:px-3 px-1">
                                                    <Image
                                                        src={'/images/payment/Frame-3.png'}
                                                        width={500}
                                                        height={450}
                                                        alt='payment'
                                                        className='w-full'
                                                    />
                                                </div>
                                                <div className="item flex items-center justify-center lg:px-3 px-1">
                                                    <Image
                                                        src={'/images/payment/Frame-4.png'}
                                                        width={500}
                                                        height={450}
                                                        alt='payment'
                                                        className='w-full'
                                                    />
                                                </div>
                                                <div className="item flex items-center justify-center lg:px-3 px-1">
                                                    <Image
                                                        src={'/images/payment/Frame-5.png'}
                                                        width={500}
                                                        height={450}
                                                        alt='payment'
                                                        className='w-full'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="related-product md:pb-20 pb-10">
                        <div className="container">
                            <div className="heading3 text-center">Related Products</div>
                            <div className="list-product hide-product-sold  grid lg:grid-cols-4 grid-cols-2 md:gap-[30px] gap-5 md:mt-10 mt-6">
                                {data.slice(Number(productId), Number(productId) + 4).map((item, index) => (
                                    <Product key={index} data={item} type='grid' />
                                ))}
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default FixedPrice