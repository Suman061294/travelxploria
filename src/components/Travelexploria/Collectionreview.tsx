'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import Rate from '@/components/Other/Rate'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useCompare } from '@/context/CompareContext'
import { useModalCompareContext } from '@/context/ModalCompareContext'

interface Props {
    data: Array<ProductType>
    productId: string | number | null
}

const Collectionreview = () => {

    return (
        <>

        <div className='px-6 mt-10'>
            <div className='pb-10'>
                <div className='heading6 text-center font-bold text-red'>Customer Feddback on Our Europe Packages</div>
            </div>

            <div className="top-overview flex max-sm:flex-col items-center justify-center gap-12 gap-y-4">
                <div className="left flex max-sm:flex-col gap-y-4 items-center justify-center lg:w-1/2 sm:w-2/3 w-full sm:pr-5">
                    <div className='rating black-start flex flex-col items-center'>
                        <div className="text-display">4.6</div>
                        <Rate currentRate={5} size={18} />
                        <div className='text-center whitespace-nowrap mt-1'>(1,968 Ratings)</div>
                    </div>
                    <div className="list-rating w-2/3">
                        <div className="item flex items-center justify-end gap-1.5">
                            <div className="flex items-center gap-1">
                                <div className="caption1">5</div>
                                <Icon.Star size={14} weight='fill' />
                            </div>
                            <div className="progress bg-line relative w-3/4 h-2">
                                <div className="progress-percent absolute bg-black w-[50%] h-full left-0 top-0"></div>
                            </div>
                            <div className="caption1">50%</div>
                        </div>
                        <div className="item flex items-center justify-end gap-1.5 mt-1">
                            <div className="flex items-center gap-1">
                                <div className="caption1">4</div>
                                <Icon.Star size={14} weight='fill' />
                            </div>
                            <div className="progress bg-line relative w-3/4 h-2">
                                <div className="progress-percent absolute bg-black w-[20%] h-full left-0 top-0"></div>
                            </div>
                            <div className="caption1">20%</div>
                        </div>
                        <div className="item flex items-center justify-end gap-1.5 mt-1">
                            <div className="flex items-center gap-1">
                                <div className="caption1">3</div>
                                <Icon.Star size={14} weight='fill' />
                            </div>
                            <div className="progress bg-line relative w-3/4 h-2">
                                <div className="progress-percent absolute bg-black w-[10%] h-full left-0 top-0"></div>
                            </div>
                            <div className="caption1">10%</div>
                        </div>
                        <div className="item flex items-center justify-end gap-1.5 mt-1">
                            <div className="flex items-center gap-1">
                                <div className="caption1">2</div>
                                <Icon.Star size={14} weight='fill' />
                            </div>
                            <div className="progress bg-line relative w-3/4 h-2">
                                <div className="progress-percent absolute bg-black w-[10%] h-full left-0 top-0"></div>
                            </div>
                            <div className="caption1">10%</div>
                        </div>
                        <div className="item flex items-center justify-end gap-1.5 mt-1">
                            <div className="flex items-center gap-2">
                                <div className="caption1">1</div>
                                <Icon.Star size={14} weight='fill' />
                            </div>
                            <div className="progress bg-line relative w-3/4 h-2">
                                <div className="progress-percent absolute bg-black w-[10%] h-full left-0 top-0"></div>
                            </div>
                            <div className="caption1">10%</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="mt-8">
                <div className="heading flex items-center justify-between flex-wrap gap-4">
                    <div className="heading4">03 Comments</div>
                   
                </div>
                <div className="list-review mt-6">
                    <div className="item">
                        <div className="heading flex items-center justify-between">
                            <div className="user-infor flex gap-4">
                                <div className="avatar">
                                    <Image
                                        src={'/images/avatar/1.png'}
                                        width={200}
                                        height={200}
                                        alt='img'
                                        className='w-[52px] aspect-square rounded-full'
                                    />
                                </div>
                                <div className="user">
                                    <div className="flex items-center gap-2">
                                        <div className="text-title">Tony Nguyen</div>
                                        <div className="span text-line">-</div>
                                        <Rate currentRate={5} size={12} />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-secondary2">1 days ago</div>
                                        <div className="text-secondary2">-</div>
                                        <div className="text-secondary2"><span>Europe</span> / <span>Paris , Venice , Milan</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="more-action cursor-pointer">
                                <Icon.DotsThree size={24} weight='bold' />
                            </div>
                        </div>
                        <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                        <div className="action mt-3">
                            <div className="flex items-center gap-4">
                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                    <Icon.HandsClapping size={18} />
                                    <div className="text-button">20</div>
                                </div>
                                <Link href={'#form-review'} className="reply-btn text-button text-secondary cursor-pointer hover:text-black">Reply</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item mt-8">
                        <div className="heading flex items-center justify-between">
                            <div className="user-infor flex gap-4">
                                <div className="avatar">
                                    <Image
                                        src={'/images/avatar/2.png'}
                                        width={200}
                                        height={200}
                                        alt='img'
                                        className='w-[52px] aspect-square rounded-full'
                                    />
                                </div>
                                <div className="user">
                                    <div className="flex items-center gap-2">
                                        <div className="text-title">Guy Hawkins</div>
                                        <div className="span text-line">-</div>
                                        <Rate currentRate={4} size={12} />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-secondary2">1 days ago</div>
                                        <div className="text-secondary2">-</div>
                                        <div className="text-secondary2"><span>Yellow</span> / <span>Paris , Venice , Milan</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="more-action cursor-pointer">
                                <Icon.DotsThree size={24} weight='bold' />
                            </div>
                        </div>
                        <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                        <div className="action mt-3">
                            <div className="flex items-center gap-4">
                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                    <Icon.HandsClapping size={18} />
                                    <div className="text-button">20</div>
                                </div>
                                <Link href={'#form-review'} className="reply-btn text-button text-secondary cursor-pointer hover:text-black">Reply</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item mt-8">
                        <div className="heading flex items-center justify-between">
                            <div className="user-infor flex gap-4">
                                <div className="avatar">
                                    <Image
                                        src={'/images/avatar/3.png'}
                                        width={200}
                                        height={200}
                                        alt='img'
                                        className='w-[52px] aspect-square rounded-full'
                                    />
                                </div>
                                <div className="user">
                                    <div className="flex items-center gap-2">
                                        <div className="text-title">John Smith</div>
                                        <div className="span text-line">-</div>
                                        <Rate currentRate={5} size={12} />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-secondary2">1 days ago</div>
                                        <div className="text-secondary2">-</div>
                                        <div className="text-secondary2"><span>Yellow</span> / <span>Paris , Venice , Milan</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="more-action cursor-pointer">
                                <Icon.DotsThree size={24} weight='bold' />
                            </div>
                        </div>
                        <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                        <div className="action mt-3">
                            <div className="flex items-center gap-4">
                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                    <Icon.HandsClapping size={18} />
                                    <div className="text-button">20</div>
                                </div>
                                <Link href={'#form-review'} className="reply-btn text-button text-secondary cursor-pointer hover:text-black">Reply</Link>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
            </div>
        </>
    )
}

export default Collectionreview