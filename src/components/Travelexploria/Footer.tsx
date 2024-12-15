import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="footer" className="footer mt-12" ref={ref} {...props}>
      <div className="footer-main bg-surface">
        <div className="container">
          <div className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8">
            <div className="company-infor basis-1/5 max-lg:basis-full items-center flex justify-center flex-col">
              <Link href={'/'} className="logo">
                <div className="heading6">
                  <Image
                    src={'/images/logo.png'}
                    width={600}
                    height={400}
                    alt="bg5-1"
                    priority={true}
                    className="h-full w-[200px] object-cover"
                  />
                </div>
              </Link>
              <div className="flex gap-3 mt-3">
                <div className="flex flex-col">
                  <span className="text-button text-sm">Mail:</span>
                  <span className="text-button mt-3 text-sm">Phone:</span>
                  <span className="text-button mt-3 text-sm">Address:</span>
                </div>
                <div className="flex flex-col">
                  <span className='text-sm'>tnxholiday@gmail.com</span>
                  <span className="mt-3 text-sm">+91 7439020962</span>
                  <span className="mt-3 pt-px text-sm">Demo Address, Demo Location</span>
                </div>
              </div>
            </div>

            <div className="right-content flex flex-wrap gap-y-8 basis-4/5 max-lg:basis-full md:pl-12 lg:pl-12">
              <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                <div className="item flex flex-col basis-1/3">
                  <div className="text-button-uppercase pb-3 text-red font-bold">Quick Links</div>
                  <Link className="caption1 has-line-before duration-300 w-fit" href={'/'}>
                    Contact us
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'#!'}>
                    Career
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    FAQs
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Privacy Policy
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Refund & Cancellation
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Sitemap
                  </Link>
                </div>

                

                <div className="item flex flex-col basis-1/5">
                  <div className="text-button-uppercase pb-3 text-red font-bold">International</div>
                  <Link className="caption1 has-line-before duration-300 w-fit" href={'/'}>
                    Europe
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Thailand
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Bali
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Maldives
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Dubai
                  </Link>
                </div>

                <div className="item flex flex-col basis-1/3">
                  <div className="text-button-uppercase pb-3 text-red font-bold">Domestic</div>
                  <Link className="caption1 has-line-before duration-300 w-fit" href={'/'}>
                    Kashmir
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Rajasthan
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Andaman
                  </Link>
                  <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={'/'}>
                    Kerala
                  </Link>
                </div>
              </div>

              <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                <div className="text-button-uppercase text-red font-bold">Newsletter</div>
                <div className="caption1 mt-3">
                  Sign up for our newsletter and get 10% off your first booking
                </div>
                <div className="input-block w-full h-[52px] mt-4">
                  <form className="w-full h-full relative" action="post">
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line"
                      required
                    />
                    <button className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1">
                      <Icon.ArrowRight size={24} color="#fff" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom py-3 flex items-center justify-center gap-5 border-t border-line">
            <div className="copyright caption1 text-secondary">
              ©2024 <span className='font-semibold text-red'>Travelxploria.</span> All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
