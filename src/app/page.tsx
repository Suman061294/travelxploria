import React from 'react'
import TopNavOne from '@/components/Travelexploria/TopNavOne'
import MenuOne from '@/components/Travelexploria/MenuOne'
import Banner from '@/components/Travelexploria/Banner'
import Benefit from '@/components/Travelexploria/Benefit'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Travelexploria/Testimonial'
import Footer from '@/components/Travelexploria/Footer'
import SliderFive from '@/components/Travelexploria/SliderFive'
import Thumbneilslider from '@/components/Travelexploria/Thumbneilsilder'
import TopProduct from '@/components/Travelexploria/TopProduct'
import Collectionsix from '@/components/Travelexploria/Collection'
import NewsInsight from '@/components/Travelexploria/NewsInsight'
import blogData from '@/data/Blog.json'
import TrendingNow from '@/components/Travelexploria/TrendingNow'
import Newsletter from '@/components/Travelexploria/Newsletter'
import Budget from '@/components/Travelexploria/Budget'
import Collectionthumb from '@/components/Travelexploria/Collection2'
import MenuOrganic from '@/components/Header/Menu/MenuOrganic'


export default function Home() {

  
  return (
    <>
      {/* <TopNavOne props="style-one bg-black shine-effect" slogan="New customers save 10% with the code GET10" /> */}
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className='relative w-full'>
        {/* <MenuOne props="bg-transparent" /> */}
        <MenuOrganic />
        <SliderFive />
      </div>
      <Thumbneilslider nameprops={`Explore Packages`} />

      <Collectionthumb />

      <Thumbneilslider nameprops={`Our Domestic Packages`} />

      <TopProduct />

      <Collectionsix />

      <Budget />

      {/* <CommunityStory /> */}

      <NewsInsight data={blogData} start={6} limit={9} />

      <TrendingNow />

      <Newsletter props="bg-green md:mt-20 mt-10" />
      <Benefit props="md:py-20 py-10" />


      <Testimonial data={testimonialData} limit={5} />


      {/* <WhatNewOne data={productData} start={0} limit={4} />
      
      <TabFeatures data={productData} start={0} limit={6} /> */}
      <Banner />
      
     
      
      {/* <Brand /> */}
      <Footer />
      {/* <ModalNewsletter /> */}
    </>
  )
}
