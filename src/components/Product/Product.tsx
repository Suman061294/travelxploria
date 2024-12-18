'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useCompare } from '@/context/CompareContext'
import { useModalCompareContext } from '@/context/ModalCompareContext'
import { useModalQuickviewContext } from '@/context/ModalQuickviewContext'
import { useRouter } from 'next/navigation'
import Marquee from 'react-fast-marquee'
import Rate from '../Other/Rate'

interface ProductProps {
    data: ProductType
    type: string
}

const Product: React.FC<ProductProps> = ({ data, type }) => {
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const [openQuickShop, setOpenQuickShop] = useState<boolean>(false)
    const { addToCart, updateCart, cartState } = useCart();
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist();
    const { openModalWishlist } = useModalWishlistContext()
    const { addToCompare, removeFromCompare, compareState } = useCompare();
    const { openModalCompare } = useModalCompareContext()
    const { openQuickview } = useModalQuickviewContext()
    const router = useRouter()

    const handleActiveColor = (item: string) => {
        setActiveColor(item)
    }

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === data.id)) {
            addToCart({ ...data });
            updateCart(data.id, data.quantityPurchase, activeSize, activeColor)
        } else {
            updateCart(data.id, data.quantityPurchase, activeSize, activeColor)
        }
        openModalCart()
    };

    const handleAddToWishlist = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (wishlistState.wishlistArray.some(item => item.id === data.id)) {
            removeFromWishlist(data.id);
        } else {
            // else, add to wishlist and set state to true
            addToWishlist(data);
        }
        openModalWishlist();
    };

    const handleAddToCompare = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (compareState.compareArray.length < 3) {
            if (compareState.compareArray.some(item => item.id === data.id)) {
                removeFromCompare(data.id);
            } else {
                // else, add to wishlist and set state to true
                addToCompare(data);
            }
        } else {
            alert('Compare up to 3 products')
        }

        openModalCompare();
    };

    const handleQuickviewOpen = () => {
        openQuickview(data)
    }

    const handleDetailProduct = (productId: string) => {
        // redirect to shop with category selected
        router.push(`/package/dubai`);
    };

    let percentSale = Math.floor(100 - ((data.price / data.originPrice) * 100))
    let percentSold = Math.floor((data.sold / data.quantity) * 100)

    return (
        <>

            {type === "grid" ? (
                <div className="product-item grid-type">
                    <div onClick={() => handleDetailProduct(data.id)} className="product-main cursor-pointer block">
                        <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                            {data.new && (
                                <div className="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                                    New
                                </div>
                            )}
                            {data.sale && (
                                <div
                                    className="product-tag text-button-uppercase text-white bg-black px-3 py-1 inline-flex items-center rounded-full absolute top-3 left-3 z-[1]"
                                >
                                    <Image
                                        src="/icon/fire.png"
                                        width={20} // Set icon size here
                                        height={20} // Set icon size here
                                        priority={true}
                                        alt="trending"
                                        className="w-5 h-5 object-contain duration-700" // Tailwind classes for size and styling
                                    />
                                    <span className="ml-2 text-xs">Trending</span>
                                </div>
                            )}

                            <div className="product-tag compare-crs px-3 py-1 inline-block rounded-sm absolute top-3 right-3 z-[1]">
                                + Compare
                            </div>

                            <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
                                {/* <div
                                    className={`add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative ${wishlistState.wishlistArray.some(item => item.id === data.id) ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleAddToWishlist()
                                    }}
                                >
                                    <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">Add To Wishlist</div>
                                    {wishlistState.wishlistArray.some(item => item.id === data.id) ? (
                                        <>
                                            <Icon.Heart size={18} weight='fill' className='text-white' />
                                        </>
                                    ) : (
                                        <>
                                            <Icon.Heart size={18} />
                                        </>
                                    )}
                                </div> */}
                                <div
                                    className={`compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2 ${compareState.compareArray.some(item => item.id === data.id) ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleAddToCompare()
                                    }}
                                >
                                    <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">Compare Product</div>
                                    <Icon.Repeat size={18} className='compare-icon' />
                                    <Icon.CheckCircle size={20} className='checked-icon' />
                                </div>
                            </div>

                            <div className="product-img w-full h-[250px] aspect-[3/4]">
                                {activeColor ? (
                                    <>
                                        {
                                            <Image
                                                src={data.variation.find(item => item.color === activeColor)?.image ?? ''}
                                                width={500}
                                                height={500}
                                                alt={data.name}
                                                priority={true}
                                                className="w-full h-[250px] object-cover duration-700"
                                            />
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            data.thumbImage.map((img, index) => (
                                                <Image
                                                    key={index}
                                                    src={img}
                                                    width={500}
                                                    height={500}
                                                    priority={true}
                                                    alt={data.name}
                                                    className="w-full h-[300px] object-cover duration-700"
                                                />
                                            ))
                                        }
                                    </>
                                )}
                            </div>
                            {data.sale && (
                                <>
                                    <Marquee className='banner-sale-auto bg-black absolute bottom-0 left-0 w-full py-1.5'>
                                        <div className={`caption2 font-semibold uppercase text-white px-2.5`}>Book with {percentSale}% OFF</div>
                                        <Icon.Lightning weight='fill' className='text-red' />
                                        <div className={`caption2 font-semibold uppercase text-white px-2.5`}>Book with {percentSale}% OFF</div>
                                        <Icon.Lightning weight='fill' className='text-red' />
                                        <div className={`caption2 font-semibold uppercase text-white px-2.5`}>Book with {percentSale}% OFF</div>
                                        <Icon.Lightning weight='fill' className='text-red' />
                                        <div className={`caption2 font-semibold uppercase text-white px-2.5`}>Book with {percentSale}% OFF</div>
                                        <Icon.Lightning weight='fill' className='text-red' />
                                        <div className={`caption2 font-semibold uppercase text-white px-2.5`}>Book with {percentSale}% OFF</div>
                                        <Icon.Lightning weight='fill' className='text-red' />
                                    </Marquee>
                                </>
                            )}


                        </div>
                        <div className="product-infor mt-4 lg:mb-7">
                            <div className="product-sold sm:pb-4 pb-2">
                                <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                                    <div
                                        className={`progress-sold bg-red absolute left-0 top-0 h-full`}
                                        style={{ width: `${percentSold}%` }}
                                    >
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                                    <div className="text-button-uppercase">
                                        <span className='text-secondary2 max-sm:text-xs'>Sold: </span>
                                        <span className='max-sm:text-xs'>{data.sold}</span>
                                    </div>
                                    <div className="text-button-uppercase">
                                        <span className='text-secondary2 max-sm:text-xs'>Available: </span>
                                        <span className='max-sm:text-xs'>{data.quantity - data.sold}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-name text-title duration-300">{data.name}</div>
                            {data.variation.length > 0 && data.action === 'add to cart' && (
                                <div className="list-color py-2 max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                                    {data.variation.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`color-item w-8 h-8 rounded-full duration-300 relative ${activeColor === item.color ? 'active' : ''}`}
                                            style={{ backgroundColor: `${item.colorCode}` }}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleActiveColor(item.color)
                                            }}>
                                            <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">{item.color}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {data.variation.length > 0 && data.action === 'quick shop' && (
                                <div className="list-color-image max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                                    {data.variation.map((item, index) => (
                                        <div
                                            className={`color-item w-12 h-12 rounded-xl duration-300 relative ${activeColor === item.color ? 'active' : ''}`}
                                            key={index}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleActiveColor(item.color)
                                            }}
                                        >
                                            <Image
                                                src={item.colorImage}
                                                width={100}
                                                height={100}
                                                alt='color'
                                                priority={true}
                                                className="w-full h-[300px] object-cover duration-700"
                                            />
                                            <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">{item.color}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="product-price-block flex items-center gap-4 flex-wrap mt-2 duration-300 relative z-[1]">

                                <div className="flex items-center text-sm text-secondary">
                                    <span className="places">
                                        <span className='font-bold text-light-red places'>3N </span>
                                        Zurich
                                    </span>
                                    <span className="animate-bounce-x mx-2 places">→</span>
                                    <span className="places">
                                        <span className='font-bold text-light-red places'>2N </span>
                                        Milan
                                    </span>
                                    <span className="animate-bounce-x mx-2 places">→</span>
                                    <span className="places">
                                        <span className='font-bold text-light-red places'>2N </span>
                                        Paris
                                    </span>

                                    <span className="animate-bounce-x mx-2 places">→</span>
                                    <span className="places">
                                        <span className='font-bold text-light-red places'>2N </span>
                                        Venice
                                    </span>

                                    <span className="ms-1 places">...</span>
                                    <span className="places">
                                        <span className='font-bold text-light-red places'>+1</span>
                                    </span>


                                </div>
                            </div>

                            <div className="flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                                <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line">
                                    <div className="caption10">3 Star</div>
                                </div>
                                <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ">
                                    <div className="caption10">4 Star</div>
                                </div>
                                <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ">
                                    <div className="caption10">5 Star</div>
                                </div>
                            </div>

                            <div className="product-price-block flex items-center gap-2 mt-3 justify-between duration-300 relative z-[1]">
                                <div className='w-3/5 flex gap-1 items-center flex-wrap'>
                                <div className="product-price heading6 font-bold">₹{data.price}</div>
                                <div className="product-origin-price caption1 text-red">
                                    <del>₹{data.originPrice}</del>
                                </div>
                                {data.originPrice && (
                                    <div className="product-sale caption1 text-xs bg-dark-green px-3 py-0.5 inline-block rounded-full">
                                        -{percentSale}%
                                    </div>
                                )}
                                </div>

                                <div
                                    className="auto-shining quick-shop-btn button-main whitespace-nowrap py-3 px-10 max-lg:px-2 rounded-md bg-green text-black hover:bg-black hover:text-white text-xs text-capitalize w-2/5 text-center"
                                    onClick={e => {
                                        e.stopPropagation();
                                        setOpenQuickShop(!openQuickShop)
                                    }}
                                >
                                    Request Callback
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="product-item list-type">
                    <div className="product-main cursor-pointer flex lg:items-center sm:justify-between gap-7 max-lg:gap-5 rounded-2xl bg-white pr-7 product-body">
                        <div onClick={() => handleDetailProduct(data.id)} className="product-thumb bg-white relative overflow-hidden rounded-2xl rounded-tr-none rounded-br-none block max-sm:w-1/2" style={{ maxWidth: '30%', minWidth: '30%' }}>
                            {data.new && (
                                <div className="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                                    New
                                </div>
                            )}
                            {data.sale && (
                                <div
                                    className="product-tag text-button-uppercase text-white bg-black px-3 py-1 inline-flex items-center rounded-full absolute top-3 left-3 z-[1]"
                                >
                                    <Image
                                        src="/icon/fire.png"
                                        width={20} // Set icon size here
                                        height={20} // Set icon size here
                                        priority={true}
                                        alt="trending"
                                        className="w-5 h-5 object-contain duration-700" // Tailwind classes for size and styling
                                    />
                                    <span className="ml-2 text-xs">Trending</span>
                                </div>

                            )}
                            <div className="product-img w-full aspect-[4/4] rounded-2xl rounded-tr-none rounded-br-none overflow-hidden">
                                {data.thumbImage.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        width={500}
                                        height={400}
                                        priority={true}
                                        alt={data.name}
                                        className='w-full h-full object-cover duration-700'
                                    />
                                ))}
                            </div>
                            <div className="list-action px-5 absolute w-full bottom-5 max-lg:hidden">
                                <div
                                    className={`quick-shop-block absolute left-5 right-5 bg-white p-5 rounded-[20px] ${openQuickShop ? 'open' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                    }}
                                >
                                    <div className="list-size flex items-center justify-center flex-wrap gap-2">
                                        {data.sizes.map((item, index) => (
                                            <div
                                                className={`size-item ${item !== 'freesize' ? 'w-10 h-10' : 'h-10 px-4'} flex items-center justify-center text-button bg-white rounded-full border border-line ${activeSize === item ? 'active' : ''}`}
                                                key={index}
                                                onClick={() => handleActiveSize(item)}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className="button-main w-full text-center rounded-full py-3 mt-4"
                                        onClick={() => {
                                            handleAddToCart()
                                            setOpenQuickShop(false)
                                        }}
                                    >
                                        Add To cart
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex sm:items-between gap-7 max-lg:gap-4 max-lg:flex-wrap max-lg:w-full max-sm:flex-col max-sm:w-1/2' style={{ maxWidth: '70%', minWidth: '70%' }}>
                            <div className="product-infor max-sm:w-full" style={{ maxWidth: '65%', minWidth: '65%' }}>



                                <div className="product-price-block flex items-center gap-2 flex-wrap mt-2 duration-300 relative z-[1]">
                                    <div className="product-price text-md text-secondary">3 days & 2 nights</div>
                                </div>

                                <div onClick={() => handleDetailProduct(data.id)} className="product-name heading7 inline-block duration-300 text-md font-bold">{data.name}</div>

                                <div className="product-price-block flex items-center gap-4 flex-wrap mt-2 duration-300 relative z-[1]">

                                    <div className="flex items-center text-sm text-secondary">
                                        <span className="places">
                                            <span className='font-bold text-light-red places'>3N </span>
                                            Zurich
                                        </span>
                                        <span className="animate-bounce-x mx-2 places">→</span>
                                        <span className="places">
                                            <span className='font-bold text-light-red places'>2N </span>
                                            Milan
                                        </span>
                                        <span className="animate-bounce-x mx-2 places">→</span>
                                        <span className="places">
                                            <span className='font-bold text-light-red places'>2N </span>
                                            Paris
                                        </span>

                                        <span className="animate-bounce-x mx-2 places">→</span>
                                        <span className="places">
                                            <span className='font-bold text-light-red places'>2N </span>
                                            Venice
                                        </span>

                                        <span className="ms-1 places">...</span>
                                        <span className="places">
                                            <span className='font-bold text-light-red places'>+1</span>
                                        </span>


                                    </div>
                                </div>




                                <div className="flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                                    <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line">
                                        <div className="caption10">3 Star</div>
                                    </div>
                                    <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ">
                                        <div className="caption10">4 Star</div>
                                    </div>
                                    <div className="color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ">
                                        <div className="caption10">5 Star</div>
                                    </div>
                                </div>

                                <div className="product-price-block flex items-center gap-2 flex-wrap mt-3 duration-300 relative z-[1]">
                                    <div className="product-price heading6 font-bold">₹{data.price}</div>
                                    <div className="product-origin-price caption1 text-red">
                                        <del>₹{data.originPrice}</del>
                                    </div>
                                    {data.originPrice && (
                                        <div className="product-sale caption1 text-xs bg-dark-green px-3 py-0.5 inline-block rounded-full">
                                            -{percentSale}%
                                        </div>
                                    )}
                                </div>





                                {/* <div className='text-secondary desc mt-5 max-sm:hidden'>{data.description}</div> */}
                            </div>

                            <div className="action w-fit flex flex-col items-start justify-between" style={{ maxWidth: '30%', minWidth: '30%' }}>

                                <div className="list-action-right flex items-center justify-start gap-1 text-xs">
                                    <div
                                        className={`compare-btn w-[27px] h-[27px] flex items-center justify-center rounded-full bg-white duration-300 relative ${compareState.compareArray.some(item => item.id === data.id) ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleAddToCompare()
                                        }}
                                    >
                                        <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">Add to Compare</div>
                                        <Icon.ArrowsCounterClockwise size={14} className='compare-icon' />
                                        <Icon.CheckCircle size={15} className='checked-icon' />
                                    </div>
                                    Add to Compare
                                </div>

                                <div className="flex flex-col items-start gap-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-green">
                                        <span className="w-4 h-4 flex items-center justify-center bg-dark-green rounded-full text-white text-xs">✔</span>
                                        <span className="text-secondary text-xs">Sightseeing</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-green">
                                        <span className="w-4 h-4 flex items-center justify-center bg-dark-green rounded-full text-white text-xs">✔</span>
                                        <span className="text-secondary text-xs">Hotel</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-green">
                                        <span className="w-4 h-4 flex items-center justify-center bg-dark-green rounded-full text-white text-xs">✔</span>
                                        <span className="text-secondary text-xs">Meals</span>
                                    </div>
                                </div>

                                <div
                                    className="auto-shining quick-shop-btn button-main whitespace-nowrap py-3 px-6 max-lg:px-2 rounded-md bg-green text-black hover:bg-black hover:text-white text-xs text-capitalize"
                                    onClick={e => {
                                        e.stopPropagation();
                                        setOpenQuickShop(!openQuickShop)
                                    }}
                                >
                                    Request Callback
                                </div>


                                {/* <div className="list-action-right flex items-center justify-center gap-3 mt-4">
                                    <div
                                        className={`add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative ${wishlistState.wishlistArray.some(item => item.id === data.id) ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleAddToWishlist()
                                        }}
                                    >
                                        <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">Add To Wishlist</div>
                                        {wishlistState.wishlistArray.some(item => item.id === data.id) ? (
                                            <>
                                                <Icon.Heart size={18} weight='fill' className='text-white' />
                                            </>
                                        ) : (
                                            <>
                                                <Icon.Heart size={18} />
                                            </>
                                        )}
                                    </div>
                                    <div
                                        className={`compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative ${compareState.compareArray.some(item => item.id === data.id) ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleAddToCompare()
                                        }}
                                    >
                                        <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">Compare Product</div>
                                        <Icon.ArrowsCounterClockwise size={18} className='compare-icon' />
                                        <Icon.CheckCircle size={20} className='checked-icon' />
                                    </div>
                                    <div
                                        className="quick-view-btn-list w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleQuickviewOpen()
                                        }}
                                    >
                                        <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">Quick View</div>
                                        <Icon.Eye size={18} />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Product