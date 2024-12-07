'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from '@/type/ProductType'
import Product from '../Product/Product';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import HandlePagination from '../Other/HandlePagination';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ColorRing } from 'react-loader-spinner';
import ContentLoader from 'react-content-loader';
import SkeletonLoader from './Skeleton';

interface Props {
    data: Array<ProductType>;
    productPerPage: number
    dataType: string | null
}



const ShopSidebarList: React.FC<Props> = ({ data, productPerPage, dataType }) => {
    /*----------------------------------------------------*/
    const [visibleProducts, setVisibleProducts] = useState<Array<ProductType>>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    /*---------------------- Type view for product ------------*/
    const [viewType, setViewType] = useState('grid'); // Default to 'grid' for mobile

    useEffect(() => {
        // Function to check screen size
        const updateViewType = () => {
            if (window.innerWidth >= 768) {
                setViewType('list'); // List for tablet and desktop
            } else {
                setViewType('grid'); // Grid for mobile
            }
        };
        updateViewType();
        window.addEventListener('resize', updateViewType);
        return () => window.removeEventListener('resize', updateViewType);
    }, []);
    /*---------------END ----------------------*/

    const [type, setType] = useState<string | null>(dataType)
    const [showOnlySale, setShowOnlySale] = useState(false)
    const [sortOption, setSortOption] = useState('');
    const [size, setSize] = useState<string | null>()
    const [color, setColor] = useState<string | null>()
    const [brand, setBrand] = useState<string | null>()
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 10000, max: 450000 });



    const handleType = (type: string) => {
        setType((prevType) => (prevType === type ? null : type))
        setPage(0);
    }

    const handleShowOnlySale = () => {
        setShowOnlySale(toggleSelect => !toggleSelect)
        setPage(0);
    }

    const handleSortChange = (option: string) => {
        setSortOption(option);
        setPage(0);
    };

    const handleSize = (size: string) => {
        setSize((prevSize) => (prevSize === size ? null : size))
        setPage(0);
    }

    const handlePriceChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setPriceRange({ min: values[0], max: values[1] });
            setPage(1);
        }
    };

    const handleColor = (color: string) => {
        setColor((prevColor) => (prevColor === color ? null : color))
        setPage(0);
    }

    const handleBrand = (brand: string) => {
        setBrand((prevBrand) => (prevBrand === brand ? null : brand));
        setPage(0);
    }
    const filteredData = data.filter(product => {
        const isSaleMatched = !showOnlySale || product.sale;
        const isTypeMatched = !type || product.type === type;
        const isSizeMatched = !size || product.sizes.includes(size);
        const isColorMatched = !color || product.variation.some(v => v.color === color);
        const isBrandMatched = !brand || product.brand === brand;
        const isPriceMatched = product.price >= priceRange.min && product.price <= priceRange.max;
        return isSaleMatched && isTypeMatched && isSizeMatched && isColorMatched && isBrandMatched && isPriceMatched;
    });

    // Sorting filtered data
    const sortedData = [...filteredData];
    if (sortOption === 'soldQuantityHighToLow') {
        sortedData.sort((a, b) => b.sold - a.sold);
    } else if (sortOption === 'discountHighToLow') {
        sortedData.sort((a, b) => (100 - (b.price / b.originPrice) * 100) - (100 - (a.price / a.originPrice) * 100));
    } else if (sortOption === 'priceHighToLow') {
        sortedData.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'priceLowToHigh') {
        sortedData.sort((a, b) => a.price - b.price);
    }

    const selectedType = type
    const selectedSize = size
    const selectedColor = color
    const selectedBrand = brand

    let filerdat = filteredData;
    if (filerdat.length === 0) {
        filerdat = [{
            id: 'no-data',
            category: 'no-data',
            type: 'no-data',
            name: 'no-data',
            gender: 'no-data',
            new: false,
            sale: false,
            rate: 0,
            price: 0,
            originPrice: 0,
            brand: 'no-data',
            sold: 0,
            quantity: 0,
            quantityPurchase: 0,
            sizes: [],
            variation: [],
            thumbImage: [],
            images: [],
            description: 'no-data',
            action: 'no-data',
            slug: 'no-data'
        }];
    }


    const totalProducts = filteredData.length;
    const pageCount = Math.ceil(totalProducts / productPerPage);
    console.log("pageCount", pageCount);

    const handleClearAll = () => {
        setType(null);
        setSize(null);
        setColor(null);
        setBrand(null);
        setPriceRange({ min: 10000, max: 450000 });
        setShowOnlySale(false);
        setSortOption('');
        setPage(0);
        dataType = null
        setType(dataType);
    }


    // Memoize filtered and sorted data
    const filteredSortedData = useMemo(() => {
        const filteredData = data.filter(product => {
            const isSaleMatched = !showOnlySale || product.sale;
            const isTypeMatched = !type || product.type === type;
            const isSizeMatched = !size || product.sizes.includes(size);
            const isColorMatched = !color || product.variation.some(v => v.color === color);
            const isBrandMatched = !brand || product.brand === brand;
            const isPriceMatched = product.price >= priceRange.min && product.price <= priceRange.max;
            return isSaleMatched && isTypeMatched && isSizeMatched && isColorMatched && isBrandMatched && isPriceMatched;
        });

        // Sort the filtered data
        const sortedData = [...filteredData];
        if (sortOption === 'soldQuantityHighToLow') {
            sortedData.sort((a, b) => b.sold - a.sold);
        } else if (sortOption === 'discountHighToLow') {
            sortedData.sort((a, b) => (100 - (b.price / b.originPrice) * 100) - (100 - (a.price / a.originPrice) * 100));
        } else if (sortOption === 'priceHighToLow') {
            sortedData.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'priceLowToHigh') {
            sortedData.sort((a, b) => a.price - b.price);
        }
        return sortedData;
    }, [data, type, showOnlySale, size, color, brand, priceRange, sortOption]);


    useEffect(() => {
        const initialProducts = filteredSortedData.slice(0, productPerPage);
        setVisibleProducts(initialProducts);
        setHasMore(filteredSortedData.length > productPerPage);
        setPage(0);
    }, [filteredSortedData, productPerPage]);

    const loadMoreProducts = () => {
        if (loading || !hasMore) return;

        setLoading(true);

        // Simulate a minimum loading time of 1 second
        setTimeout(() => {
            const nextPage = page + 1;
            const nextProducts = filteredSortedData.slice(nextPage * productPerPage, (nextPage + 1) * productPerPage);

            setVisibleProducts(prev => [...prev, ...nextProducts]);
            setPage(nextPage);
            setHasMore((nextPage + 1) * productPerPage < filteredSortedData.length);
            setLoading(false);
        }, 1000); // 1000ms = 1 second
    };





    const stickyRef = useRef<HTMLDivElement>(null);
    const [isFixed, setIsFixed] = useState(false);
    const [offsetTop, setOffsetTop] = useState(0);

    useEffect(() => {
        if (stickyRef.current) {
            // Save the initial offset position of the sticky div
            setOffsetTop(stickyRef.current.offsetTop);
        }

        const handleScroll = () => {
            if (stickyRef.current) {
                const scrollTop = window.scrollY; // Current scroll position
                if (scrollTop > offsetTop) {
                    setIsFixed(true); // Fix the div when scrolling down
                } else {
                    setIsFixed(false); // Reset to normal position when scrolling up
                }
            }
        };

        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Cleanup on unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offsetTop]);


    return (
        <>

            <div className="shop-product breadcrumb1 lg:py-5 md:py-5 py-5 main-bg-contain" style={{ height: "2000px" }}

            >
                <div className="container padding-0 rounded-2xl shadow-custom2 bg-white" style={{ height: "2000px" }}
                >
                    <div className="flex max-md:flex-wrap max-md:flex-col-reverse gap-8">
                        <div className="sidebar bg-white lg:w-1/4 md:w-1/3 w-full md:pr-12 lg:p-10 md:p-10 p-10 rounded-2xl">
                        <div  ref={stickyRef} style={{
                            position: isFixed ? "sticky" : "relative",
                            top: isFixed ? "0" : "auto",
                            padding: "10px",
                            zIndex: 1000,
                        }}>
                            <div className="filter-type pb-8 border-b border-line">
                                <div className="heading6">Cities</div>
                                <div className="list-type mt-4">
                                    {['Maldives', 'Srilanka', 'France', 'Dubai', 'Paris', 'Kashmir', 'Europe', 'Andaman'].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`item flex items-center justify-between cursor-pointer ${dataType === item ? 'active' : ''}`}
                                            onClick={() => handleType(item)}
                                        >
                                            <div className='text-secondary has-line-before hover:text-black capitalize'>{item}</div>
                                            <div className='text-secondary2'>
                                                ({data.filter(dataItem => dataItem.type === item && dataItem.category === 'fashion').length})
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="filter-size pb-8 border-b border-line mt-8">
                                <div className="heading6">Hotel Rating</div>
                                <div className="list-size flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                                    {
                                        ['2', '3', '4', '5'].map((item, index) => (
                                            <div
                                                key={index}
                                                className={`size-item text-sm w-[44px] h-[44px] flex items-center justify-center rounded-full border border-line ${size === item ? 'active' : ''}`}
                                                onClick={() => handleSize(item)}
                                            >
                                                {item} <span className="text-yellow-500">⭐</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="filter-price pb-8 border-b border-line mt-8">
                                <div className="heading6">Price Range</div>
                                <Slider
                                    range
                                    defaultValue={[10000, 450000]}
                                    min={10000}
                                    max={450000}
                                    onChange={handlePriceChange}
                                    className='mt-5'
                                />
                                <div className="price-block flex items-center justify-between flex-wrap mt-4 text-xs">
                                    <div className="min flex items-center gap-1">
                                        <div>Min:</div>
                                        <div className='price-min'>₹
                                            <span>{priceRange.min}</span>
                                        </div>
                                    </div>
                                    <div className="min flex items-center gap-1">
                                        <div>Max:</div>
                                        <div className='price-max'>₹
                                            <span>{priceRange.max}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-color pb-8 border-b border-line mt-8">
                                <div className="heading6">Duration (in Days)</div>
                                <div className="list-color flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'pink' ? 'active' : ''}`}
                                        onClick={() => handleColor('2 to 3')}
                                    >

                                        <div className="caption1">2 to 3</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'red' ? 'active' : ''}`}
                                        onClick={() => handleColor('4 to 5')}
                                    >
                                        <div className="caption1">4 to 5</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'green' ? 'active' : ''}`}
                                        onClick={() => handleColor('5 to 7')}
                                    >
                                        <div className="caption1">5 to 7</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'yellow' ? 'active' : ''}`}
                                        onClick={() => handleColor('7 to 9')}
                                    >
                                        <div className="caption1">7 to 9</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'purple' ? 'active' : ''}`}
                                        onClick={() => handleColor('9 to 13')}
                                    >
                                        <div className="caption1">9 to 13</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'black' ? 'active' : ''}`}
                                        onClick={() => handleColor('13+')}
                                    >
                                        <div className="caption1">13+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-brand mt-8">
                                <div className="heading6">Activities</div>
                                <div className="list-brand mt-4">
                                    {['Adventure', 'Nature', 'Hill Station', 'Rekigion', 'Water Activities'].map((item, index) => (
                                        <div key={index} className="brand-item flex items-center justify-between">
                                            <div className="left flex items-center cursor-pointer">
                                                <div className="block-input">
                                                    <input
                                                        type="checkbox"
                                                        name={item}
                                                        id={item}
                                                        checked={brand === item}
                                                        onChange={() => handleBrand(item)} />
                                                    <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                                                </div>
                                                <label htmlFor={item} className="brand-name capitalize pl-2 cursor-pointer">{item}</label>
                                            </div>
                                            <div className='text-secondary2'>
                                                ({data.filter(dataItem => dataItem.brand === item && dataItem.category === 'fashion').length})
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="list-product-block lg:w-3/4 md:w-2/3 w-full md:pl-3 md:p-10 p-5">
                            <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                                <div className="left flex has-line items-center flex-wrap gap-5">
                                    <div className="check-sale flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="filterSale"
                                            id="filter-sale"
                                            className='border-line'
                                            onChange={handleShowOnlySale}
                                            checked={showOnlySale}
                                        />
                                        <label htmlFor="filter-sale" className='cation1 cursor-pointer'>Trending Package Only</label>
                                    </div>
                                </div>
                                <div className="right flex items-center gap-3">
                                    <label htmlFor='select-filter' className="caption1 capitalize"></label>
                                    <div className="select-block relative">
                                        <select
                                            id="select-filter"
                                            name="select-filter"
                                            className='caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line'
                                            onChange={(e) => { handleSortChange(e.target.value) }}
                                            defaultValue={'Sorting'}
                                        >
                                            <option value="Sorting" disabled>Sorting</option>
                                            <option value="soldQuantityHighToLow">Best Selling</option>
                                            <option value="discountHighToLow">Best Discount</option>
                                            <option value="priceHighToLow">Price High To Low</option>
                                            <option value="priceLowToHigh">Price Low To High</option>
                                        </select>
                                        <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                    </div>
                                </div>
                            </div>

                            <div className="list-filtered flex items-center gap-3 mt-4">
                                <div className="total-product">
                                    {totalProducts}
                                    <span className='text-black font-bold pl-1'>Package Found</span>
                                </div>
                                {
                                    (selectedType || selectedSize || selectedColor || selectedBrand) && (
                                        <>
                                            <div className="list flex items-center gap-3">
                                                <div className='w-px h-4 bg-line'></div>
                                                {selectedType && (
                                                    <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setType(null) }}>
                                                        <Icon.X className='cursor-pointer' />
                                                        <span>{selectedType}</span>
                                                    </div>
                                                )}
                                                {selectedSize && (
                                                    <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setSize(null) }}>
                                                        <Icon.X className='cursor-pointer' />
                                                        <span>{selectedSize}</span>
                                                    </div>
                                                )}
                                                {selectedColor && (
                                                    <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setColor(null) }}>
                                                        <Icon.X className='cursor-pointer' />
                                                        <span>{selectedColor}</span>
                                                    </div>
                                                )}
                                                {selectedBrand && (
                                                    <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setBrand(null) }}>
                                                        <Icon.X className='cursor-pointer' />
                                                        <span>{selectedBrand}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div
                                                className="clear-btn flex items-center px-2 py-1 gap-1 rounded-full border border-red cursor-pointer"
                                                onClick={handleClearAll}
                                            >
                                                <Icon.X color='rgb(219, 68, 68)' className='cursor-pointer' />
                                                <span className='text-button-uppercase text-red'>Clear All</span>
                                            </div>
                                        </>
                                    )
                                }
                            </div>


                            <InfiniteScroll
                                dataLength={visibleProducts.length}
                                next={loadMoreProducts}
                                hasMore={hasMore}
                                loader={
                                    <div className="placeholder-grid">
                                        {Array.from({ length: 1 }).map((_, idx) => (
                                            <SkeletonLoader viewType={viewType} key={idx} />
                                        ))}
                                    </div>
                                }
                                endMessage={<p>No more products to show.</p>}
                            >
                                <div className="list-product hide-product-sold flex flex-col gap-8 mt-7">
                                    {visibleProducts.map((item) =>
                                        item.id === 'no-data' ? (
                                            <div key={item.id} className="no-data-product">
                                                No Package matches the selected criteria.
                                            </div>
                                        ) : (
                                            <Product key={item.id} data={item} type={viewType} />
                                        )
                                    )}
                                </div>
                            </InfiniteScroll>


                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ShopSidebarList