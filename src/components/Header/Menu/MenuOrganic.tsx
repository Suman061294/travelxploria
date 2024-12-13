'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import Product from '@/components/Product/Product';
import productData from '@/data/Product.json'
import useLoginPopup from '@/store/useLoginPopup';
import useShopDepartmentPopup from '@/store/useShopDepartmentPopup';
import useMenuMobile from '@/store/useMenuMobile';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useCart } from '@/context/CartContext';
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider';

const MenuOrganic = () => {
    const pathname = usePathname()
    const { openLoginPopup, handleLoginPopup } = useLoginPopup()
    const { openShopDepartmentPopup, handleShopDepartmentPopup } = useShopDepartmentPopup()
    const { openMenuMobile, handleMenuMobile } = useMenuMobile()
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)
    const { openModalCart } = useModalCartContext()
    const { cartState } = useCart()
    const { openModalWishlist } = useModalWishlistContext()

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


    /*------------------------ Search --------------------------------*/

    const keywords: string[] = ["Maldives", "Bali", "Thailand", "Kashmir", "Andaman"];

    const [displayedText, setDisplayedText] = useState<string>(""); // Text being displayed
    const [currentIndex, setCurrentIndex] = useState<number>(0); // Tracks the index of the current keyword
    const [isDeleting, setIsDeleting] = useState<boolean>(false); // Typing or deleting mode

    // Ref to keep track of the typing speed and delay
    const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const currentWord = keywords[currentIndex];
        const typingSpeed = isDeleting ? 50 : 100; // Speed for typing and deleting
        const delayBetweenWords = 1000; // Delay before moving to the next word

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing mode
                setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
                if (displayedText === currentWord) {
                    setTimeout(() => setIsDeleting(true), delayBetweenWords); // Start deleting after a delay
                }
            } else {
                // Deleting mode
                setDisplayedText((prev) => prev.slice(0, -1));
                if (displayedText === "") {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % keywords.length); // Move to the next word
                }
            }
        };

        // Use ref to clear the timer on cleanup and avoid stale timers
        typingTimerRef.current = setTimeout(handleTyping, typingSpeed);

        // Cleanup function to clear the timer on unmount or rerun
        return () => {
            if (typingTimerRef.current) {
                clearTimeout(typingTimerRef.current);
            }
        };
    }, [currentIndex, isDeleting, displayedText]); // Removed 'keywords' from dependencies


    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };


    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 50000, max: 500000 });
    const handlePriceChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setPriceRange({ min: values[0], max: values[1] });
        }
    };
    /*---------------------------------------------------*/

    return (
        <>
            {/* <div className={`${fixedHeader ? ' fixed' : 'relative'} header-menu bg-white w-full top-0 z-10 duration-500`}> */}
            <div className={`relative header-menu bg-white w-full top-0 z-10 duration-500`}>
                <div className={`header-menu-main style-eight bg-white w-full md:h-[60px] h-[56px]`}>
                    <div className="container mx-auto h-full">
                        <div className="header-main flex items-center justify-between h-full">
                            <div className="menu-mobile-icon lg:hidden flex items-center" onClick={handleMenuMobile}>
                                <i className="icon-category text-2xl"></i>
                            </div>
                            <Link href={'/'} className='flex items-center'>
                                <div className="heading4"><Image
                                    src={'/images/logo.png'}
                                    width={2560}
                                    height={1080}
                                    alt='bg5-1'
                                    priority={true}
                                    className='w-full md:h-[40px] h-[35px] object-cover'
                                /></div>
                            </Link>
                            <div className="form-search w-2/3 pl-8 flex items-center h-[44px] max-lg:hidden">

                                <div className='w-full flex items-center h-full justify-center'>

                                    <div className="input-block lg:w-2/5 sm:w-5/5 h-[40px]">
                                        <div className="relative w-full h-full" onClick={toggleModal}>
                                            <Icon.MagnifyingGlass
                                                size={20}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-black"
                                            />
                                            <input
                                                type="text"
                                                value="Explore & Discover"
                                                className="caption1 w-full h-full pl-12 pr-14 rounded-full border border-line cursor-pointer text-xs text-secondary shadow-custom"
                                                readOnly
                                            />
                                            {/* Overlay for displayedText */}
                                            <span className="absolute md:left-[157px] left-[160px] top-1/2 -translate-y-1/2 font-bold text-sm text-black">
                                                {displayedText}
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="right flex gap-12">
                                <div className="list-action flex items-center gap-4">
                                    <div className="m-width-call product-tag text-button-uppercase bg-green px-3 py-1 inline-block rounded-full z-[1] auto-shining text-sm hidden md:block lg:block">+91 74390-20962</div>
                                    <Icon.MagnifyingGlass
                                        size={20}
                                        onClick={toggleModal}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-black md:hidden lg:hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-nav-menu relative bg-white border-t border-b border-line h-[44px] max-lg:hidden z-10">
                    <div className="container h-full">
                        <div className="top-nav-menu-main flex items-center justify-between h-full">
                            <div className="left flex items-center h-full">

                                <div className="menu-main style-eight h-full pl-12 max-lg:hidden">
                                    <ul className='flex items-center gap-8 h-full'>

                                        <li className='h-full'>
                                            <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                                Destination
                                            </Link>
                                            <div className="mega-menu absolute top-[43px] left-0 bg-white w-screen">
                                                <div className="container">
                                                    <div className="flex justify-between py-8">
                                                        <div className="nav-link basis-2/3 grid grid-cols-4 gap-y-8">
                                                            <div className="nav-item">
                                                                <div className="text-button-uppercase pb-2">Eastern Asia</div>
                                                                <ul>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Thailand
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Bali
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Maldives
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Indonesia
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            View All
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="nav-item">
                                                                <div className="text-button-uppercase pb-2">Domestic Places</div>
                                                                <ul>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Kashmir
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Kochi
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Rajansthan
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Andaman
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            View All
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="nav-item">
                                                                <div className="text-button-uppercase pb-2">Europe</div>
                                                                <ul>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            France
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Greece
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Switzerland
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Italy
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            View All
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="nav-item">
                                                                <div className="text-button-uppercase pb-2">Middle East</div>
                                                                <ul>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Dubai
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Abu dhabi
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Egypt
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Turkey
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            View All
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="nav-item">
                                                                <div className="text-button-uppercase pb-2">E-visa Places</div>
                                                                <ul>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Thailand
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Maldives
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Srilanka
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Bali
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            View All
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="nav-item">
                                                                <div className="text-button-uppercase pb-2">Schen-Visa Places</div>
                                                                <ul>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Amsterdam
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Paris
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Italy
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Norway
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            View All
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="nav-item">
                                                                <div className="text-button-uppercase pb-2">Sessional Packages</div>
                                                                <ul>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Eastern Europe
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Middle East
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            Turkey
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 cursor-pointer`}
                                                                        >
                                                                            View All
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
                                            <div className="mega-menu absolute top-[43px] left-0 bg-white w-screen">
                                                <div className="container">
                                                    <div className="flex justify-center py-8">
                                                        <div className="nav-link basis-2/4 flex justify-between pr-12">
                                                            <div className="nav-item">
                                                                <div className="text-button-uppercase pb-2">Domestic Tour Packages</div>
                                                                <ul>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                        >
                                                                            Delight Kashmir
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                        >
                                                                            Rajasthan Packages
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                        >
                                                                            Beyond Andaman
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
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
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/wishlist' ? 'active' : ''}`}
                                                                        >
                                                                            Paris Nightlife
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/search-result' ? 'active' : ''}`}
                                                                        >
                                                                            Small town Amsterdam
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/cart' ? 'active' : ''}`}
                                                                        >
                                                                            Persian Greece
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
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
                                        <li className='h-full'>
                                            <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                                Holiday Packages
                                            </Link>
                                            <div className="mega-menu absolute top-[43px] left-0 bg-white w-screen">
                                                <div className="container">
                                                    <div className="flex justify-center py-8">
                                                        <div className="nav-link basis-2/4 flex justify-between pr-12">
                                                            <div className="nav-item">
                                                                <div className="text-button-uppercase pb-2">Domestic Tour Packages</div>
                                                                <ul>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                        >
                                                                            Delight Kashmir
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                        >
                                                                            Rajasthan Packages
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                        >
                                                                            Beyond Andaman
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
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
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/wishlist' ? 'active' : ''}`}
                                                                        >
                                                                            Paris Nightlife
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/search-result' ? 'active' : ''}`}
                                                                        >
                                                                            Small town Amsterdam
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
                                                                            className={`link text-secondary duration-300 ${pathname === '/cart' ? 'active' : ''}`}
                                                                        >
                                                                            Persian Greece
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href={'/destination'}
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

                                        <li className='h-full relative'>
                                            <Link href="#!" className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${pathname.includes('/pages') ? 'active' : ''}`}>
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
                                                    {/* <li>
                                                    <Link href="/pages/store-list" className={`link text-secondary duration-300 ${pathname === '/pages/store-list' ? 'active' : ''}`}>
                                                        Store List
                                                    </Link>
                                                </li> */}
                                                    {/* <li>
                                                    <Link href="/pages/page-not-found" className={`link text-secondary duration-300 ${pathname === '/pages/page-not-found' ? 'active' : ''}`}>
                                                        404
                                                    </Link>
                                                </li> */}
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
                                                    {/* <li>
                                                    <Link href="/pages/coming-soon" className={`link text-secondary duration-300 ${pathname === '/pages/coming-soon' ? 'active' : ''}`}>
                                                        Coming Soon
                                                    </Link>
                                                </li> */}
                                                    {/* <li>
                                                    <Link href="/pages/customer-feedbacks" className={`link text-secondary duration-300 ${pathname === '/pages/customer-feedbacks' ? 'active' : ''}`}>
                                                        Customer Feedbacks
                                                    </Link>
                                                </li> */}
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right flex items-center gap-1">
                                {/* <div className="caption1">Hotline:</div>
                                <div className="text-button-uppercase">+01 1234 8888</div> */}
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
                                <Link href={'/destination'} className='logo text-3xl font-semibold text-center'><Image
                                    src={'/images/logo.png'}
                                    width={2560}
                                    height={1080}
                                    alt='bg5-1'
                                    priority={true}
                                    className='w-full h-full object-cover'
                                /></Link>
                            </div>
                            <div className="form-search relative mt-2">
                                <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
                                <input type="text" placeholder='What are you looking for?' className=' h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4' />
                            </div>
                            <div className="list-nav mt-6">
                                <ul>
                                    <li
                                        className={`${openSubNavMobile === 1 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(1)}
                                    >
                                        <a href={'#!'} className={`text-xl font-semibold flex items-center justify-between`}>Destination
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
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Thailand
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Bali
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Maldives
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Indonesia
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Domestic Places</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kashmir
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Rajasthan
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Andaman
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kochi / Kerala
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Middle East</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Dubai
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Abu dhabi
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Turkey
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Egypt
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Europe</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Italy
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Portugal
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    France
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Switzerland
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    View All
                                                                </Link>
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
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Thailand
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Bali
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Maldives
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Indonesia
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Domestic Places</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Kashmir
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/destination'}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Rajasthan
                                                                </Link>
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
                                        className={`${openSubNavMobile === 3 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(3)}
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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            onClick={toggleModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>


                        <div className="input-block lg:w-2/2 sm:w-5/5 w-full h-[40px] sm:mt-10 mt-7">
                            <div className="relative w-full h-full" >
                                <Icon.MagnifyingGlass
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-black"
                                />
                                <input
                                    type="text"

                                    className="caption1 w-full h-full lg:pl-12 md:pl-12 pl-12 pr-14 rounded-xl border border-line text-md text-secondary"
                                    placeholder='Enter Your Destination'
                                />

                            </div>

                        </div>

                        {/* Modal Content */}
                        <h4 className="text-sm font-bold mb-2 mt-8">Trip Duration</h4>
                        <div className="list-size flex items-center flex-wrap gap-1 gap-y-4 mt-2 mb-4">
                            <div className="size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line text-xs">2-3 Days</div>
                            <div className="size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line text-xs">3-5 Days</div>
                            <div className="size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line text-xs">5-7 Days</div>
                            <div className="size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line text-xs">7+ Days</div>
                        </div>
                        <hr />
                        <div className="filter-price pb-8 border-b border-line mt-2">
                            <div className="text-sm font-bold mb-2">Price Range</div>
                            <Slider
                                range
                                defaultValue={[50000, 500000]}
                                min={50000}
                                max={500000}
                                onChange={handlePriceChange}
                                className='mt-5'
                            />
                            <div className="price-block flex items-center justify-between flex-wrap mt-4">
                                <div className="min flex items-center gap-1">
                                    <div>Min price:</div>
                                    <div className='price-min'>
                                        <span>{priceRange.min}</span>
                                    </div>
                                </div>
                                <div className="min flex items-center gap-1">
                                    <div>Max price:</div>
                                    <div className='price-max'>
                                        <span>{priceRange.max}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        {/* Footer Buttons */}
                        <div className="flex justify-end mt-6 space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>


                            <button type="button" className="hover:bg-black hover:text-white text-gray-900 bg-green focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                View Packages
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MenuOrganic