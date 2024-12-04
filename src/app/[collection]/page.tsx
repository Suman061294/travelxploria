'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import productData from '@/data/Product.json'
import MenuOne from '@/components/Travelexploria/MenuOne';
import Footer from '@/components/Travelexploria/Footer';
import TopNavOne from '@/components/Travelexploria/TopNavOne';
import ShopSidebarList from '@/components/collection/ShopSidebarList';
import Collectionslider from '@/components/collection/Collectionslider';
import MenuFour from '@/components/Travelexploria/MenuFour';
import MenuYoga from '@/components/Header/Menu/MenuYoga';
import MenuOrganic from '@/components/Header/Menu/MenuOrganic';
import Collectiontag from '@/components/Travelexploria/Collectiontag';
import CollectionOverview from '@/components/Travelexploria/Collectionoverview';

export default function SidebarList() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    const category = searchParams.get('category')

    return (
        <>
            <div id="header" className='relative w-full'>
                <MenuOrganic />
                <Collectionslider />
                <Collectiontag props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            </div>
            <CollectionOverview />
            <ShopSidebarList data={productData} productPerPage={4} dataType={type} />
            <Footer />
        </>
    )
}
