'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Collectionsix = () => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    return (
        <>
            <div className="collection-block cosmetic md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Our Recent Trips</div>
                    <div className="mt-3 text-center">Trust - lovely guests</div>
                    <div className="grid sm:grid-cols-3 md:gap-[30px] gap-[16px] mt-10">

                        {/* Left Column with Two Rows */}
                        <div className="left grid grid-rows-2 md:gap-[30px] gap-[16px]">

                            {/* First Image in Left Column */}
                            <div className="bottom">
                                <div
                                    className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => handleCategoryClick('cosmetic')}
                                    style={{ height: '170px', width: '100%' }}
                                >
                                    <div className="bg-img h-full w-full relative">
                                        <Image
                                            src={'/test/1/1.png'}
                                            alt="accessories-cos"
                                            className="object-cover"
                                            layout="fill"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Top Row with Two Images */}
                            <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">

                                {/* First Image in Top Row */}
                                <div
                                    className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => handleCategoryClick('cosmetic')}
                                    style={{ height: '170px' }}
                                >
                                    <div className="bg-img h-full w-full">
                                        <Image
                                            src={'/test/1/2.png'}
                                            alt="skin"
                                            className="object-cover"
                                            layout="fill"
                                        />
                                    </div>
                                </div>

                                {/* Second Image in Top Row */}
                                <div
                                    className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => handleCategoryClick('cosmetic')}
                                    style={{ height: '170px' }}
                                >
                                    <div className="bg-img h-full w-full">
                                        <Image
                                            src={'/test/1/3.png'}
                                            alt="hair"
                                            className="object-cover"
                                            layout="fill"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Middle Column */}
                        <div className="left">
                            <div
                                className="collection-item block h-full relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => handleCategoryClick('cosmetic')}
                                style={{ height: '100%' }}
                            >
                                <div className="bg-img h-full w-full aspect-square">
                                    <video
                                        src="https://digi.rangrotopack.com/travel/mvideo.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-full object-cover"
                                        preload="auto" // Preloads video data to reduce delay
                                    ></video>
                                </div>
                            </div>
                        </div>

                        {/* Right Column with Two Rows */}
                        <div className="right grid grid-rows-2 md:gap-[30px] gap-[16px]">

                            {/* Top Row with Two Images */}
                            <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">

                                {/* First Image in Top Row */}
                                <div
                                    className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => handleCategoryClick('cosmetic')}
                                    style={{ height: '170px' }}
                                >
                                    <div className="bg-img h-full w-full">
                                        <Image
                                            src={'/test/2/1.png'}
                                            alt="skin"
                                            className="object-cover"
                                            layout="fill"
                                        />
                                    </div>
                                </div>

                                {/* Second Image in Top Row */}
                                <div
                                    className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => handleCategoryClick('cosmetic')}
                                    style={{ height: '170px' }}
                                >
                                    <div className="bg-img h-full w-full">
                                        <Image
                                            src={'/test/2/2.png'}
                                            alt="hair"
                                            className="object-cover"
                                            layout="fill"
                                        />
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Image in Right Column */}
                            <div className="bottom">
                                <div
                                    className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => handleCategoryClick('cosmetic')}
                                    style={{ height: '170px', width: '100%' }}
                                >
                                    <div className="bg-img h-full w-full">
                                        <Image
                                            src={'/test/2/3.png'}
                                            alt="accessories-cos"
                                            className="object-cover"
                                            layout="fill"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Collectionsix