import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="banner-block style-one md:pt-20 pt-10">
                <div className="heading3 text-center">
                    Our Sessional Offers
                </div>
                <div className="body1 font-normal text-secondary text-center mt-4 mb-10">Discover What Our Guests Really Think About Their Stay</div>

                <div className="container grid sm:grid-cols-2 gap-5">
                    <Link href={'/'} className="banner-item relative block overflow-hidden rounded-2xl duration-500">
                        <div className="banner-img">
                            <Image
                                src={'/test/blog/1.jpg'}
                                width={2000}
                                height={1300}
                                alt='banner1'
                                className='duration-1000 w-full'
                            />
                        </div>
                        <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                            <div className="heading4 text-white text-center">Maldive&apos;s Honeymoon package</div>
                            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Starting from INR 1,25,500/-</div>
                        </div>
                    </Link>
                    <Link href={'/'} className="banner-item relative block overflow-hidden rounded-2xl duration-500">
                        <div className="banner-img">
                            <Image
                                src={'/test/blog/3.jpg'}
                                width={2000}
                                height={1300}
                                alt='banner2'
                                className='duration-1000 w-full'
                            />
                        </div>
                        <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                            <div className="heading4 text-white text-center">Bali Tour Packages</div>
                            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Starting from INR 1,25,500/-</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Banner