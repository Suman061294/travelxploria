'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import Product from '@/components/Product/Product';
import productData from '@/data/Product.json'
import useLoginPopup from '@/store/useLoginPopup';
import useMenuMobile from '@/store/useMenuMobile';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useModalSearchContext } from '@/context/ModalSearchContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation'

interface Props {
    props: string
}

const MenuFour: React.FC<Props> = ({ props }) => {
    const pathname = usePathname()
    const { openLoginPopup, handleLoginPopup } = useLoginPopup()
    const { openMenuMobile, handleMenuMobile } = useMenuMobile()
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)
    const { openModalCart } = useModalCartContext()
    const { cartState } = useCart()
    const { openModalWishlist } = useModalWishlistContext()
    const { openModalSearch } = useModalSearchContext()
    const [searchKeyword, setSearchKeyword] = useState('');
    const router = useRouter()

    const handleSearch = (value: string) => {
        router.push(`/search-result?query=${value}`)
        setSearchKeyword('')
    }

    const handleOpenSubNavMobile = (index: number) => {
        setOpenSubNavMobile(openSubNavMobile === index ? null : index)
    }

    const [fixedHeader, setFixedHeader] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
            setLastScrollPosition(scrollPosition);
        };

        // Gắn sự kiện cuộn khi component được mount
        window.addEventListener('scroll', handleScroll);

        // Hủy sự kiện khi component bị unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    const handleGenderClick = (gender: string) => {
        router.push(`/shop/breadcrumb1?gender=${gender}`);
    };

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className={`header-menu style-one ${fixedHeader ? ' fixed' : 'relative'} w-full md:h-[74px] h-[56px] ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="header-main flex items-center justify-between h-full">
                        <div className="menu-mobile-icon lg:hidden flex items-center" onClick={handleMenuMobile}>
                            <i className="icon-category text-2xl"></i>
                        </div>
                        <Link href={'/'} className='flex items-center lg:hidden'>
                            <div className="heading4"><Image
                                src={'/images/logo.png'}
                                width={2560}
                                height={1080}
                                alt='bg5-1'
                                priority={true}
                                className='w-full h-full object-cover'
                            /></div>
                        </Link>
                        <div className="form-search relative max-lg:hidden z-[1]">
                            <Icon.MagnifyingGlass
                                size={16}
                                className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer'
                                onClick={() => {
                                    handleSearch(searchKeyword)
                                }}
                            />
                            <input
                                type="text"
                                placeholder='What are you looking for?'
                                className=' h-10 rounded-lg border border-line caption2 w-full pl-9 pr-4'
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchKeyword)}
                            />
                        </div>

                        <div className="menu-main h-full xl:w-full flex items-center justify-center max-lg:hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
                            <ul className='flex items-center gap-8 h-full'>

                                <li className='h-full'>
                                    <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Destination
                                    </Link>
                                    <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                        <div className="container">
                                            <div className="flex justify-between py-8">
                                                <div className="nav-link basis-2/3 grid grid-cols-4 gap-y-8">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Eastern Asia</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Thailand
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Bali
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Maldives
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Indonesia
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Domestic Places</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kashmir
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kochi
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Rajansthan
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Andaman
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Europe</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    France
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Greece
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Switzerland
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Italy
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Middle East</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Dubai
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Abu dhabi
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Egypt
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Turkey
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">E-visa Places</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Thailand
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Maldives
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Srilanka
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Bali
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Schen-Visa Places</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Amsterdam
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Paris
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Italy
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Norway
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Sessional Packages</div>
                                                        <ul>
                                                            <li>
                                                                <div


                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Eastern Europe
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Middle East
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Turkey
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="banner-ads-block pl-2.5 basis-1/3">
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden cursor-pointer">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Best Package</div>
                                                            <div className="heading6 mt-2 text-white">Our Best Offer <br />on Winter</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>INR 75,000/-</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/2.png'}
                                                            width={1000}
                                                            height={400}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0 duration-700'
                                                        />
                                                    </div>
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden cursor-pointer mt-8">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Best Value</div>
                                                            <div className="heading6 mt-2 text-white">20% off <br /> for All Domestic Packages</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>INR 50,000/-</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/1.png'}
                                                            width={1000}
                                                            height={400}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0 duration-700'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='h-full'>
                                    <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Family Packages
                                    </Link>
                                    <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                        <div className="container">
                                            <div className="flex justify-center py-8">
                                                <div className="nav-link basis-2/4 flex justify-between pr-12">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Domestic Tour Packages</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Delight Kashmir
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Rajasthan Packages
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    Beyond Andaman
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Riverside Kerala
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">International Tour Packages</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/wishlist' ? 'active' : ''}`}
                                                                >
                                                                    Paris Nightlife
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/search-result' ? 'active' : ''}`}
                                                                >
                                                                    Small town Amsterdam
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/cart' ? 'active' : ''}`}
                                                                >
                                                                    Persian Greece
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/login' ? 'active' : ''}`}
                                                                >
                                                                    Delight Collosium
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="banner-ads-block pl-2.5 basis-1/3">
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden cursor-pointer">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Best Package</div>
                                                            <div className="heading6 mt-2 text-white">Our Best Offer <br />on Winter</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>INR 75,000/-</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/2.png'}
                                                            width={1000}
                                                            height={400}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0 duration-700'
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='h-full flex items-center justify-center logo'>
                                    <Link href={'/'} className='heading4'>
                                        <Image
                                            src={'/images/logo.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg5-1'
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </Link>
                                </li>

                                <li className='h-full'>
                                    <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Holiday Packages
                                    </Link>
                                    <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                        <div className="container">
                                            <div className="flex justify-center py-8">
                                                <div className="nav-link basis-2/4 flex justify-between pr-12">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Domestic Tour Packages</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Delight Kashmir
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Rajasthan Packages
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    Beyond Andaman
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Riverside Kerala
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">International Tour Packages</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/wishlist' ? 'active' : ''}`}
                                                                >
                                                                    Paris Nightlife
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/search-result' ? 'active' : ''}`}
                                                                >
                                                                    Small town Amsterdam
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/cart' ? 'active' : ''}`}
                                                                >
                                                                    Persian Greece
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/'}
                                                                    className={`link text-secondary duration-300 ${pathname === '/login' ? 'active' : ''}`}
                                                                >
                                                                    Delight Collosium
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="banner-ads-block pl-2.5 basis-1/3">
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden cursor-pointer">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Best Package</div>
                                                            <div className="heading6 mt-2 text-white">Our Best Offer <br />on Winter</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>INR 75,000/-</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/1.png'}
                                                            width={1000}
                                                            height={400}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0 duration-700'
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                                <li className='h-full relative'>

                                    <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Usefull Links
                                    </Link>
                                    <div className="sub-menu py-3 px-5 -left-10 absolute bg-white rounded-b-xl">
                                        <ul className='w-full'>
                                            <li>
                                                <Link href="/pages/about" className={`link text-secondary duration-300 ${pathname === '/pages/about' ? 'active' : ''}`}>
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/contact" className={`link text-secondary duration-300 ${pathname === '/pages/contact' ? 'active' : ''}`}>
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/" className={`link text-secondary duration-300 ${pathname === '/pages/faqs' ? 'active' : ''}`}>
                                                    FAQs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/" className={`link text-secondary duration-300 ${pathname === '/pages/faqs' ? 'active' : ''}`}>
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="right flex gap-12 z-[1]">
                            <div className="list-action flex items-center gap-4">
                                <div className="user-icon flex items-center justify-center cursor-pointer">
                                    <div className="m-width-call product-tag text-button-uppercase bg-green px-3 py-1 inline-block rounded-full z-[1] auto-shining text-sm">+91 74390-20962</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="menu-mobile" className={`${openMenuMobile ? 'open' : ''}`}>
                <div className="menu-container bg-white h-full">
                    <div className="container h-full">
                        <div className="menu-main h-full overflow-hidden">
                            <div className="heading py-2 relative flex items-center justify-center">
                                <div
                                    className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
                                    onClick={handleMenuMobile}
                                >
                                    <Icon.X size={14} />
                                </div>
                                <Link href={'/'} className='logo text-3xl font-semibold text-center'>
                                    <Image
                                        src={'/images/logo.png'}
                                        width={2560}
                                        height={1080}
                                        alt='bg5-1'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </Link>
                            </div>
                            <div className="form-search relative mt-2">
                                <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
                                <input type="text" placeholder='What are you looking for?' className=' h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4' />
                            </div>
                            <div className="list-nav mt-6">
                                <ul>

                                    <li
                                        className={`${openSubNavMobile === 2 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(2)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Destination
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(2)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="list-nav-item w-full pt-3 pb-12">
                                                <div className="nav-link grid grid-cols-2 gap-5 gap-y-6">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Eastern Asia</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Thailand
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Bali
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Maldives
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Indonesia
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Domestic Places</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kashmir
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Rajasthan
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Andaman
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kochi / Kerala
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Middle East</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Dubai
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Abu dhabi
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Turkey
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Egypt
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Europe</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Italy
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Portugal
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    France
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Switzerland
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="banner-ads-block grid sm:grid-cols-2 items-center gap-6 pt-6">
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Best Value</div>
                                                            <div className="heading6 mt-2 text-white">Our Best Packages <br />on Europe</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>$59.99</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/1.png'}
                                                            width={1000}
                                                            height={500}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0'
                                                        />
                                                    </div>
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Top Packages</div>
                                                            <div className="heading6 mt-2 text-white">20% off <br />for All Domestic Packages</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>INR 50,000/-</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/2.png'}
                                                            width={1000}
                                                            height={500}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li
                                        className={`${openSubNavMobile === 2 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(2)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Family Packages
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(2)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="list-nav-item w-full pt-3 pb-12">
                                                <div className="nav-link grid grid-cols-2 gap-5 gap-y-6">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Eastern Asia</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Thailand
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Bali
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Maldives
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Indonesia
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Domestic Places</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kashmir
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Rajasthan
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Andaman
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kochi / Kerala
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Middle East</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Dubai
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Abu dhabi
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Turkey
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Egypt
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Europe</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Italy
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Portugal
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    France
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Switzerland
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="banner-ads-block grid sm:grid-cols-2 items-center gap-6 pt-6">
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Best Value</div>
                                                            <div className="heading6 mt-2 text-white">Our Best Packages <br />on Europe</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>$59.99</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/1.png'}
                                                            width={1000}
                                                            height={500}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0'
                                                        />
                                                    </div>
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Top Packages</div>
                                                            <div className="heading6 mt-2 text-white">20% off <br />for All Domestic Packages</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>INR 50,000/-</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/2.png'}
                                                            width={1000}
                                                            height={500}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li
                                        className={`${openSubNavMobile === 2 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(2)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Holiday Packages
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(2)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="list-nav-item w-full pt-3 pb-12">
                                                <div className="nav-link grid grid-cols-2 gap-5 gap-y-6">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Eastern Asia</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Thailand
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Bali
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Maldives
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Indonesia
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Domestic Places</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kashmir
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Rajasthan
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Andaman
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kochi / Kerala
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Middle East</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Dubai
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Abu dhabi
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Turkey
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Egypt
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Europe</div>
                                                        <ul>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Italy
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Portugal
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    France
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Switzerland
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div

                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    View All
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="banner-ads-block grid sm:grid-cols-2 items-center gap-6 pt-6">
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Best Value</div>
                                                            <div className="heading6 mt-2 text-white">Our Best Packages <br />on Europe</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>$59.99</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/1.png'}
                                                            width={1000}
                                                            height={500}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0'
                                                        />
                                                    </div>
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden">
                                                        <div className="text-content py-7 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Top Packages</div>
                                                            <div className="heading6 mt-2 text-white">20% off <br />for All Domestic Packages</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>INR 50,000/-</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/photo/menu/2.png'}
                                                            width={1000}
                                                            height={500}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li
                                        className={`${openSubNavMobile === 6 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(6)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Usefull Links
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(6)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="list-nav-item w-full pt-2 pb-6">
                                                <ul className='w-full'>
                                                    <li>
                                                        <Link href="/" className={`link text-secondary duration-300 ${pathname === '/pages/about' ? 'active' : ''}`}>
                                                            About Us
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/" className={`link text-secondary duration-300 ${pathname === '/pages/contact' ? 'active' : ''}`}>
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                    {/* <li>
                    <Link href="/pages/store-list" className={`link text-secondary duration-300 ${pathname === '/pages/store-list' ? 'active' : ''}`}>
                        Store List
                    </Link>
                </li>
                <li>
                    <Link href="/pages/page-not-found" className={`link text-secondary duration-300 ${pathname === '/pages/page-not-found' ? 'active' : ''}`}>
                        404
                    </Link>
                </li> */}
                                                    <li>
                                                        <Link href="/" className={`link text-secondary duration-300 ${pathname === '/pages/faqs' ? 'active' : ''}`}>
                                                            FAQs
                                                        </Link>
                                                    </li>
                                                    {/* <li>
                    <Link href="/pages/coming-soon" className={`link text-secondary duration-300 ${pathname === '/pages/coming-soon' ? 'active' : ''}`}>
                        Coming Soon
                    </Link>
                </li> */}
                                                    <li>
                                                        <Link href="/" className={`link text-secondary duration-300 ${pathname === '/pages/customer-feedbacks' ? 'active' : ''}`}>
                                                            Blog
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuFour