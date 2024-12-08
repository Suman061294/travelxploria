import React from 'react'
import Image from 'next/image'
import 'swiper/css/bundle';
import Link from 'next/link'


const Collectionfooter = () => {
    return (
        <>



            <div id="footer" className='footer mt-20'>
                <div className="footer-main bg-black rounded-xl">
                    <div className="container-full px-8">
                        <div className="content-footer py-[40px]">


                            <div className="testimonial-block w-full cosmetic3 lg:-mt-[100px] md:-mt-8 -mt-6 relative z-[1] mb-10">
                                <div className="container p-0">
                                <div className="content bg-white lg:py-10 md:py-10 py-6 md:rounded-[20px] rounded-xl box-shadow-sm flex items-center justify-center -mt-[77px] sm:mt-0">
                                        <div className="main xl:w-5/6 max-xl:px-10 max-lg:px-8 max-sm:px-4 w-full">

                                            <div className="content-footer py-[0px] flex flex-col lg:flex-row justify-between gap-8">
                                                <div className="company-infor basis-2/5 max-lg:basis-full flex justify-center lg:justify-start">
                                                <div>
                                                    <Link href={'/'} className="logo">
                                                        <div className="heading6">
                                                            <Image
                                                                src={'/images/logo.png'}
                                                                width={600}
                                                                height={400}
                                                                alt="bg5-1"
                                                                priority={true}
                                                                className="w-full h-auto object-cover"
                                                            />
                                                        </div>
                                                    </Link>

                                                    <div className="list-social flex items-center gap-6 mt-4">
                                                        <Link href={'https://www.facebook.com/'} target='_blank'>
                                                            <div className="icon-facebook text-2xl text-black"></div>
                                                        </Link>
                                                        <Link href={'https://www.instagram.com/'} target='_blank'>
                                                            <div className="icon-instagram text-2xl text-black"></div>
                                                        </Link>
                                                        <Link href={'https://www.twitter.com/'} target='_blank'>
                                                            <div className="icon-twitter text-2xl text-black"></div>
                                                        </Link>
                                                        <Link href={'https://www.youtube.com/'} target='_blank'>
                                                            <div className="icon-youtube text-2xl text-black"></div>
                                                        </Link>
                                                        <Link href={'https://www.pinterest.com/'} target='_blank'>
                                                            <div className="icon-pinterest text-2xl text-black"></div>
                                                        </Link>
                                                    </div>
                                                    </div>
                                                </div>

                                                <div className="company-infor basis-3/5 max-lg:basis-full">
                                                    <div className="flex gap-3 mt-3">
                                                        <div className="flex flex-col">
                                                            <span className="text-button">Mail:</span>
                                                            <span className="text-button mt-3">Phone:</span>
                                                            <span className="text-button mt-3">Address:</span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span>tnxholiday@gmail.com</span>
                                                            <span className="mt-3">+91 7439020962</span>
                                                            <span className="mt-3 pt-px">Demo Address, Demo Location</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="company-infor basis-1/4 max-lg:basis-full pr-0 gap-3">
                                <Link href={'/'} className="logo">
                                    <div className="heading6">
                                        <Image
                                            src={'/images/logo.png'}
                                            width={600}
                                            height={400}
                                            alt='bg5-1'
                                            priority={true}
                                            className='w-[200px] h-full object-cover'
                                        /></div>
                                </Link>
                                <div className='flex gap-3 mt-3 basis-3/4 max-lg:basis-full'>
                                    <div className="flex flex-col ">
                                        <span className="text-button text-sm">Mail:</span>
                                        <span className="text-button mt-2 text-sm">Phone:</span>
                                        <span className="text-button mt-2 text-sm">Address:</span>
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className='text-sm'>tnxholiday@gmail.com</span>
                                        <span className='mt-2 text-sm'>+91 7439020962</span>
                                        <span className='mt-2 pt-px text-sm'>Demo Address, Demo Location</span>
                                    </div>
                                </div>
                            </div> */}
                            <div className="right-content flex gap-8 w-full max-lg:basis-full">
                                <div className="list-nav flex justify-center w-full max-md:basis-full gap-4 text-white">
                                    <div className="item flex flex-col basis-1/4 max-sm:basis-1/2">
                                        <div className="text-button-uppercase pb-3 text-green">Quick Links</div>
                                        <Link className="caption1 has-line-before duration-300 w-fit" href={'/'}>Contact us</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'#!'}>Career</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>FAQs</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Privacy Policy</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Refund & Cancellation</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Sitemap</Link>
                                    </div>
                                    <div className="item flex flex-col basis-1/4 max-sm:basis-1/2">
                                        <div className="text-button-uppercase pb-3 text-green">International</div>
                                        <Link className="caption1 has-line-before duration-300 w-fit" href={'/'}>Europe</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Thailand</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Bali</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Maldives</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Dubai</Link>
                                    </div>

                                    <div className="item flex flex-col basis-1/4 max-sm:basis-1/2">
                                        <div className="text-button-uppercase pb-3 text-green">Domestic</div>
                                        <Link className="caption1 has-line-before duration-300 w-fit" href={'/'}>Kashmir</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Rajasthan</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Andaman</Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>Kerala</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="footer-bottom py-3 flex items-center justify-center gap-5 max-lg:justify-center max-lg:flex-col border-t border-line-green">
                            <div className="left flex items-center gap-8">
                                <div className="copyright caption1 text-secondary">©2024 Travelxploria. All Rights Reserved.</div>
                                <div className="select-block flex items-center gap-5 max-md:hidden">


                                </div>
                            </div>
                            {/* <div className="right flex items-center gap-2">
                                <div className="caption1 text-secondary">Payment:</div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-0.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-1.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-2.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-3.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-4.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-5.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Collectionfooter