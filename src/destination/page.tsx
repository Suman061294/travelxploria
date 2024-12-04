'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import productData from '@/data/Product.json'
import MenuOne from '@/components/Travelexploria/MenuOne';
import Footer from '@/components/Travelexploria/Footer';
import TopNavOne from '@/components/Travelexploria/TopNavOne';
import ShopSidebarList from '@/components/collection/ShopSidebarList';

export default function SidebarList() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    const category = searchParams.get('category')

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>
            <ShopSidebarList data={productData} productPerPage={4} dataType={type} />
            <Footer />
        </>
    )
}
