import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
    return (
        <>
            <div id="footer" className='footer mt-12'>
                <div className="footer-main bg-surface">
                    <div className="container">
                        <div className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8">
                            <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
                                <Link href={'/'} className="logo">
                                    <div className="heading6">
                                        <Image
                                            src={'/images/logo.png'}
                                            width={600}
                                            height={400}
                                            alt='bg5-1'
                                            priority={true}
                                            className='w-full h-full w-[200px] object-cover'
                                        /></div>
                                </Link>
                                <div className='flex gap-3 mt-3'>
                                    <div className="flex flex-col ">
                                        <span className="text-button">Mail:</span>
                                        <span className="text-button mt-3">Phone:</span>
                                        <span className="text-button mt-3">Address:</span>
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className=''>tnxholiday@gmail.com</span>
                                        <span className='mt-3'>+91 7439020962</span>
                                        <span className='mt-3 pt-px'>Demo Address, Demo Location</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
                                <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                                    <div className="item flex flex-col basis-1/3 ">
                                        <div className="text-button-uppercase pb-3">Quick Links</div>
                                        <Link className='caption1 has-line-before duration-300 w-fit' href={'/'}>Contact us</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'#!'}>Career</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>FAQs</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Privacy Policy</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Refund & Cancellation</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Sitemap</Link>
                                    </div>
                                    <div className="item flex flex-col basis-1/3 ">
                                        <div className="text-button-uppercase pb-3">International</div>
                                        <Link className='caption1 has-line-before duration-300 w-fit' href={'/'}>Europe</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Thailand</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Bali</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Maldives</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Dubai</Link>
                                    </div>
                                    <div className="item flex flex-col basis-1/3 ">
                                        <div className="text-button-uppercase pb-3">Domestic</div>
                                        <Link className='caption1 has-line-before duration-300 w-fit' href={'/'}>Kasmir</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Rajasthan</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Andaman</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/'}>Kerala</Link>
                                    </div>
                                </div>
                                <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                                    <div className="text-button-uppercase">Newletter</div>
                                    <div className="caption1 mt-3">Sign up for our newsletter and get 10% off your first booking</div>
                                    <div className="input-block w-full h-[52px] mt-4">
                                        <form className='w-full h-full relative' action="post">
                                            <input type="email" placeholder='Enter your e-mail' className='caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line' required />
                                            <button className='w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1'>
                                                <Icon.ArrowRight size={24} color='#fff' />
                                            </button>
                                        </form>
                                    </div>
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
                        </div>
                        <div className="footer-bottom py-3 flex items-center justify-center gap-5 max-lg:justify-center max-lg:flex-col border-t border-line">
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
            </div>
        </>
    )
}

export default Footer