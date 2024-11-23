'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const TopProduct: React.FC = () => {
    // const router = useRouter();

    // const handleDetailProduct = (productId: string) => {
    //     // router.push(`/product/default?id=${productId}`);
    // };

    const productItems = [
        { id: '149', image: '/photo/5.png', desc: 'Wonderful Bali', nights: '5 Nights / 7 Days', price: '₹75,500', discount: '₹95,000' },
        { id: '150', image: '/photo/6.png', desc: 'Wonderful Bali', nights: '5 Nights / 7 Days', price: '₹75,500', discount: '₹95,000' },
        { id: '151', image: '/photo/4.png', desc: 'Wonderful Bali', nights: '5 Nights / 7 Days', price: '₹75,500', discount: '₹95,000' },
        { id: '152', image: '/photo/1.png', desc: 'Wonderful Bali', nights: '5 Nights / 7 Days', price: '₹75,500', discount: '₹95,000' },
        { id: '153', image: '/photo/3.png', desc: 'Amazing Maldives', nights: '4 Nights / 5 Days', price: '₹85,000', discount: '₹1,00,000' },
        { id: '154', image: '/photo/2.png', desc: 'Exotic Thailand', nights: '6 Nights / 7 Days', price: '₹65,000', discount: '₹80,000' },
    ];

    return (
        <div className="top-product md:mt-[60px] mt-[60px] md:py-[60px] py-10 bg-light-yellow">
            <div className="container">
                <div className="heading flex items-center justify-between gap-5 flex-wrap">
                    <div className="heading3">Budget Packages</div>
                    <Link href="/shop/breadcrumb-img" className="text-button pb-0.5 border-b-2 border-black">
                        View All
                    </Link>
                </div>

                {/* Swiper Slider for Mobile */}
                <div className="md:hidden section-swiper-navigation">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                        }}

                        className="mt-6"
                    >
                        {productItems.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Grid Layout for Desktop */}
                <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
                    {productItems.map((product) => (
                        <div key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProductCard: React.FC<{ product: any; onClick?: (id: string) => void }> = ({ product, onClick }) => (
    <div
        className="product-item flex bg-white rounded-[10px] cursor-pointer overflow-hidden"
        onClick={() => onClick?.(product.id)}
        style={{ border: '1px solid #ededed' }}
    >
        <div className="bg-img w-1/2 flex-shrink-0 aspect-square relative">
            <div className="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 right-3 z-[1] auto-shining text-xs">
                18% off
            </div>
            <Image
                width={5000}
                height={5000}
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.desc}
            />
        </div>
        <div className="product-infor w-1/2 py-2 px-3 relative">
            <span className="desc mt-2 fs-16">
                <strong>{product.desc}</strong>
            </span>
            <div className="flex items-center gap-3 mt-1">
                <span className="text-title inline-block text-xs font-bold grey">{product.nights}</span>
            </div>

            <div className="flex items-center gap-3 mt-1">
                <span className="text-title inline-block text-xs text-black">3 Hotel , 3 Activity , 2 Transfer , 1 Intercity</span>
            </div>

            <div className="absolute bottom-1 w-full">
                <div className="flex items-center gap-1 mt-3">
                    <del className="text-red text-sm rotate-1">{product.discount}</del>
                </div>
                <div className="flex items-center gap-1 mt-0">
                    <span className="text-lg font-bold text-green-600 inline-block">{product.price}</span>
                    <div className="product-tag px-3 py-0.5 inline-block rounded-full text-xs light-red">
                        Person
                    </div>
                </div>
                <div className="quick-shop-btn button-main whitespace-nowrap py-2 px-3 max-lg:px-5 rounded-md bg-green text-black border border-green hover:bg-black hover:text-white text-xs">
                    View Packages
                </div>
            </div>
        </div>
    </div>
);

export default TopProduct;
