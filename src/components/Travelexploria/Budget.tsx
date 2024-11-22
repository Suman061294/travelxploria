'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const Budget = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="collection-block md:pt-20 pt-10">
                <div className="container">
                    <div className='bg-light-yellow md:p-10 py-10 rounded-xl'>
                    <div className="heading text-center">
                        <div className="heading3 text-center">Holiday for your Budget! </div>
                        <div className="heading6 font-normal normal-case text-secondary md:mt-4 mt-2">Exclusive For you</div>
                    </div>
                    <div className="list-collection grid lg:grid-cols-5 grid-cols-3 gap-12 place-items-center md:mt-10 mt-6 py-5-20 lg:px-20 md:px-20 p-10">
                        <div className="collection-item block relative rounded-1 overflow-hidden cursor-pointer" onClick={() => handleTypeClick('swimwear')}>
                                <Image
                                    src={'/offer/1.png'}
                                    width={200}
                                    height={200}
                                    alt='underwear1'
                                />
                        </div>
                        <div className="collection-item block relative rounded-1 overflow-hidden cursor-pointer" onClick={() => handleTypeClick('swimwear')}>
                                <Image
                                    src={'/offer/2.png'}
                                    width={400}
                                    height={400}
                                    alt='underwear1'
                                />
                        </div>
                        <div className="collection-item block relative rounded-1 overflow-hidden cursor-pointer" onClick={() => handleTypeClick('swimwear')}>
                                <Image
                                    src={'/offer/3.png'}
                                    width={400}
                                    height={400}
                                    alt='underwear1'
                                />
                        </div>
                        <div className="collection-item block relative rounded-1 overflow-hidden cursor-pointer" onClick={() => handleTypeClick('swimwear')}>
                                <Image
                                    src={'/offer/4.png'}
                                    width={400}
                                    height={400}
                                    alt='underwear1'
                                />
                        </div>
                        <div className="collection-item block relative rounded-1 overflow-hidden cursor-pointer" onClick={() => handleTypeClick('swimwear')}>
                                <Image
                                    src={'/offer/5.png'}
                                    width={400}
                                    height={400}
                                    alt='underwear1'
                                />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Budget