'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// import { useRouter } from 'next/navigation';
import 'swiper/css/bundle';

const Bannerestination = () => {
    // const router = useRouter()

    // const handleTypeClick = (type: string) => {
    //     // router.push(`/shop/breadcrumb1?type=${type}`);
    // };

    return (
        <>
            <div className="trending-block style-six md:pt-20 pt-10">
                <div className="container">
                    <div className="heading6 text-center">#Popular Choice
                    </div>
                    <div className="list-trending section-swiper-navigation style-small-border style-outline md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={1}
                            // navigation
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                300: {
                                    slidesPerView: 7,
                                    spaceBetween: 60,
                                },
                                576: {
                                    slidesPerView: 6,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 7,
                                    spaceBetween: 20,
                                },
                                1290: {
                                    slidesPerView: 7,
                                    spaceBetween: 30,
                                },
                            }}
                            className='h-full'
                        >

                            {/* ------------ Dubai -------------- */}
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer">
                                    <div className="bg-img rounded-full overflow-hidden flex justify-center">
                                        <div className="shiny-effect-container p-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50px"
                                                height="50px"
                                                viewBox="0 0 1000 1000"
                                                className="image"
                                            >
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} /> {/* White */}
                                                        <stop offset="100%" style={{ stopColor: '#FF5733', stopOpacity: 1 }} /> {/* Red */}
                                                    </linearGradient>
                                                </defs>

                                                <g>
                                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                                        <path className="svg-path" d="M3428.5,4986.6l-46-36.4L3373,3516l-9.6-1432.4l-277.7-5.7c-252.8-3.8-279.6-7.7-319.8-46c-28.7-26.8-44-63.2-44-105.3c0-151.3,63.2-178.1,404.1-178.1h247v-3102.2V-4456H1789.3c-1677.5-1.9-1620,1.9-1667.9-90c-36.4-67-26.8-120.6,32.5-180l55.5-55.5h4791.2h4791.2l55.5,55.5c76.6,76.6,68.9,178.1-19.2,245.1c-23,19.2-712.4,23-3079.3,24.9H3698.5v162.8v162.8h1166.2h1168.1l47.9,44c76.6,65.1,82.3,147.5,21.1,220.2l-51.7,61.3H4874.3H3698.5v162.8v162.8l1217.9,3.8l1217.9,5.7l45.9,53.6c59.4,70.9,59.4,155.1-1.9,214.5l-46,47.9H4914.5h-1216v162.8v162.8l1252.4,3.8l1252.4,5.7l49.8,46c63.2,59.4,67,153.2,5.7,222.1l-44,51.7l-1252.4,1.9l-1254.3,3.8l-5.7,168.5l-5.8,166.6h1294.5c792.8,0,1307.9,7.7,1329,19.2c59.4,30.6,88.1,124.5,59.4,191.5c-49.8,118.7-9.6,114.9-1407.5,114.9H3698.5v162.8v162.8h1300.2H6299l51.7,61.3c59.4,68.9,55.5,151.3-11.5,216.4c-36.4,38.3-65.1,38.3-1338.5,44l-1302.2,3.8v162.8v162.8h1254.3H6209l46,47.9c47.9,45.9,61.3,124.5,36.4,191.5c-32.6,84.2-49.8,86.2-1357.7,86.2H3698.5v162.8v162.8h1208.3h1208.3l55.5,55.5c72.8,72.8,72.8,141.7,0,214.5l-55.5,55.5H4906.8H3698.5v162.8v162.8h1036c704.7,0,1047.5,5.7,1074.3,21.1c55.5,28.7,95.8,137.9,74.7,197.2c-42.1,111.1-13.4,107.2-1145.1,107.2H3698.5v162.8v162.8h882.8h882.8l55.5,55.5c70.8,72.8,74.7,157,7.7,222.1l-45.9,47.9H4589h-890.4v162.8v162.8h953.6h951.7l128.3-214.5c428.9-729.6,693.2-1415.2,819.6-2131.3c59.4-333.2,76.6-576.4,76.6-1032.2c0-882.8-91.9-1673.7-260.4-2275c-63.2-227.9-67-245.1-38.3-298.7c32.5-63.2,65.1-80.4,153.2-80.4c78.5,0,130.2,55.5,170.4,181.9c103.4,327.5,201.1,854.1,252.8,1369.2c42.1,411.7,59.4,1420.9,30.6,1734.9c-78.5,834.9-348.5,1687.1-785.1,2476l-151.3,270h197.2h197.2l86.2-147.5C6911.8,852.3,7176-5.6,7262.2-938.2c28.7-321.7,11.5-1396-30.6-1784.7c-53.6-517-149.4-1018.8-243.2-1290.7c-38.3-113-32.6-160.8,28.7-227.9c26.8-28.7,61.3-42.1,109.2-42.1c95.7,0,139.8,51.7,197.2,239.4c250.9,806.2,363.8,2443.5,233.6,3427.8c-99.6,762.1-319.8,1478.3-654.9,2131.3l-118.7,233.6h344.7c384.9,0,438.5,13.4,473,114.9c24.9,67,15.3,107.2-40.2,168.5l-38.3,42.1h-865.6h-867.5l-99.6,145.5C5242,2868.7,4537.3,3617.5,3870.8,4151.7l-162.8,132.1l-9.6,323.6l-9.6,323.6l-53.6,46C3570.2,5032.6,3489.8,5036.4,3428.5,4986.6z M3928.3,3671.1c222.1-193.4,802.4-781.3,988.1-1003.4c185.7-222.1,448.1-561.1,448.1-578.3c0-9.6-375.3-15.3-833-15.3h-833v892.4c0,706.6,5.7,888.5,24.9,877.1C3734.9,3835.8,3828.7,3759.2,3928.3,3671.1z" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Dubai</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* ---------------- Bali ------------------ */}
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer">
                                    <div className="bg-img rounded-full overflow-hidden flex justify-center">
                                        <div className="shiny-effect-container p-2">
                                            {/* Inline SVG */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50px"
                                                height="50px"
                                                viewBox="0 0 32 32"
                                                className="image"
                                            >
                                                {/* Gradient Definition */}
                                                <defs>
                                                    <linearGradient id="hover-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} /> {/* White */}
                                                        <stop offset="100%" style={{ stopColor: '#FF5733', stopOpacity: 1 }} /> {/* Red */}
                                                    </linearGradient>
                                                </defs>

                                                {/* Your SVG paths */}
                                                <g>
                                                    <path
                                                        className="svg-path"
                                                        d="M14,22.36v-0.72h4v0.721L14,22.36L14,22.36z M20,22.36h4v-0.72h-4V22.36z M21,24.36h4v-0.72h-4V24.36z M27,25.64h-5v0.721h5V25.64z M29,27.64h-6v0.721h6V27.64z M24,30.36h7v-0.72h-7V30.36z M13,24.36h6v-0.72h-6V24.36z M12,26.36h8v-0.72h-8V26.36z M11,27.64v0.721h10V27.64H11z M10,29.64v0.721h12V29.64H10z M8,22.36h4v-0.72H8V22.36z M7,24.36h4v-0.72H7V24.36z M5,26.36h5v-0.72H5V26.36z M3,28.36h6v-0.72H3V28.36z M1,30.36h7v-0.72H1V30.36z M1,20.36h30v-0.72H1V20.36z M31.36,14v1c0,0.199-0.161,0.36-0.36,0.36h-1.64v2.28H31v0.721H1V17.64h1.64v-2.28H1c-0.199,0-0.36-0.161-0.36-0.36v-1c0-0.199,0.161-0.36,0.36-0.36c1.834,0,3.72-0.915,4.682-1.838V10.36H3c-0.199,0-0.36-0.161-0.36-0.36V9c0-0.199,0.161-0.36,0.36-0.36c1.851,0,4.668-1.877,5.64-3.74V3h0.72v1.64h13.28V3h0.721v1.9c0.972,1.863,3.789,3.74,5.64,3.74c0.199,0,0.36,0.161,0.36,0.36v1c0,0.199-0.161,0.36-0.36,0.36h-2.64v1.479c0.973,0.91,2.83,1.801,4.64,1.801C31.199,13.64,31.36,13.801,31.36,14z M3.36,9.64h25.28V9.341c-2.039-0.203-4.772-2.049-5.856-3.981H9.216C8.132,7.292,5.399,9.138,3.36,9.341V9.64z M6.401,10.36v1.28H25.64v-1.28H6.401z M3.36,17.64h1.28v-2.28H3.36V17.64z M25.36,15.36v2.28h1.279v-2.28H25.36z M24.64,15.36h-1.28v2.28h1.279L24.64,15.36L24.64,15.36z M22.64,15.36h-3.28v2.28h1.279V16h0.721v1.64h1.279L22.64,15.36L22.64,15.36z M18.64,15.36h-5.28v2.28h2.28V16h0.72v1.64h2.28V15.36z M12.64,15.36H9.36v2.28h1.28V16h0.72v1.64h1.28C12.64,17.64,12.64,15.36,12.64,15.36z M8.64,15.36H7.36v2.28h1.28V15.36z M6.64,15.36H5.36v2.28h1.28C6.64,17.64,6.64,15.36,6.64,15.36z M28.64,15.36h-1.28v2.28h1.279L28.64,15.36L28.64,15.36z M30.64,14.35c-1.957-0.107-3.797-1.064-4.785-1.99H6.146c-0.988,0.926-2.829,1.883-4.786,1.99v0.29h29.28C30.64,14.64,30.64,14.35,30.64,14.35z"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Bali</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* ---------------- Abudhabi ------------------ */}
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer">
                                    <div className="bg-img rounded-full overflow-hidden flex justify-center">
                                        <div className="shiny-effect-container p-2">
                                            {/* Inline SVG with gradient effect */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="800px" width="800px" version="1.1" id="Capa_1"
                                                viewBox="0 0 488 488"
                                                className="image"
                                            >
                                                {/* Gradient Definition */}
                                                <defs>
                                                    <linearGradient id="hover-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} /> {/* White */}
                                                        <stop offset="100%" style={{ stopColor: '#FF5733', stopOpacity: 1 }} /> {/* Red */}
                                                    </linearGradient>
                                                </defs>

                                                {/* Your SVG Paths */}
                                                <g>
                                                    <path className="svg-path" d="M480,388v-16c0-4.418-3.582-8-8-8v-80c4.418,0,8-3.582,8-8s-3.582-8-8-8v-80c4.418,0,8-3.582,8-8s-3.582-8-8-8h-8v-24h8
                                                    c4.418,0,8-3.582,8-8s-3.582-8-8-8h-0.805c-3.19-15.649-15.545-28.005-31.195-31.195V92c0-4.418-3.582-8-8-8s-8,3.582-8,8v8.805
                                                    c-15.65,3.189-28.005,15.545-31.195,31.195H392c-4.418,0-8,3.582-8,8s3.582,8,8,8h8v24h-8c-4.418,0-8,3.582-8,8s3.582,8,8,8v80h-80
                                                    v-40h8c4.418,0,8-3.582,8-8s-3.582-8-8-8h-8v-8c0-16.229-18.968-20.354-30.301-22.817c-4.947-1.076-8.039-3.033-9.699-4.397V164
                                                    c0-4.418-3.582-8-8-8s-8,3.582-8,8v8h-24v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v12.786c-1.661,1.364-4.753,3.321-9.7,4.397
                                                    C194.968,183.646,176,187.77,176,204v8h-8c-4.418,0-8,3.582-8,8s3.582,8,8,8h8v40H96v-80c4.418,0,8-3.582,8-8s-3.582-8-8-8h-8v-24h8
                                                    c4.418,0,8-3.582,8-8s-3.582-8-8-8h-0.805C92.006,116.35,79.65,103.995,64,100.805V92c0-4.418-3.582-8-8-8s-8,3.582-8,8v8.805
                                                    C32.35,103.995,19.994,116.35,16.805,132H16c-4.418,0-8,3.582-8,8s3.582,8,8,8h8v24h-8c-4.418,0-8,3.582-8,8s3.582,8,8,8v80
                                                    c-4.418,0-8,3.582-8,8s3.582,8,8,8v80c-4.418,0-8,3.582-8,8v16c-4.418,0-8,3.582-8,8s3.582,8,8,8h472c4.418,0,8-3.582,8-8
                                                    S484.418,388,480,388z M456,364h-48v-80h48V364z M432,116c10.429,0,19.321,6.689,22.624,16h-45.248
                                                    C412.679,122.689,421.571,116,432,116z M416,148h32v24h-8v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8h-8V148z M408,188h48v80h-48V188z
                                                    M192,204c0-1.521,3.071-4.002,17.699-7.183c8.891-1.933,14.586-5.899,17.758-8.817h33.085c3.172,2.918,8.868,6.885,17.758,8.817
                                                    C292.93,199.998,296,202.479,296,204v8H192V204z M192,228h104v40h-16v-16c0-4.418-3.582-8-8-8s-8,3.582-8,8v16h-12v-16
                                                    c0-4.418-3.582-8-8-8c-4.418,0-8,3.582-8,8v16h-12v-16c0-4.418-3.582-8-8-8s-8,3.582-8,8v16h-16V228z M392,284v80h-16v-35
                                                    c0-5.825-2.748-14.441-15.842-22.407c-6.697-4.073-13.354-6.309-13.634-6.401c-1.639-0.545-3.41-0.545-5.049,0
                                                    c-0.28,0.093-6.937,2.328-13.634,6.401C314.748,314.559,312,323.175,312,329v35h-36v-35c0-5.825-2.748-14.441-15.842-22.407
                                                    c-6.697-4.073-13.354-6.309-13.634-6.401c-1.639-0.545-3.41-0.545-5.049,0c-0.28,0.093-6.937,2.328-13.633,6.401
                                                    C214.749,314.559,212,323.175,212,329v35h-36v-35c0-5.825-2.749-14.441-15.842-22.407c-6.697-4.073-13.353-6.309-13.633-6.401
                                                    c-1.64-0.545-3.41-0.545-5.05,0c-0.28,0.093-6.936,2.328-13.633,6.401C114.749,314.559,112,323.175,112,329v35H96v-80H392z M328,364
                                                    v-35c0-4.106,8.674-9.71,16.037-12.7C353.992,320.196,360,326.122,360,329v35H328z M228,364v-35c0-4.106,8.674-9.71,16.037-12.7
                                                    C253.992,320.196,260,326.122,260,329v35H228z M128,364v-35c0-4.106,8.674-9.71,16.037-12.7C153.992,320.196,160,326.122,160,329v35
                                                    H128z M56,116c10.429,0,19.321,6.689,22.624,16H33.376C36.679,122.689,45.571,116,56,116z M40,148h32v24h-8v-8c0-4.418-3.582-8-8-8
                                                    s-8,3.582-8,8v8h-8V148z M32,188h48v80H32V188z M32,284h48v80H32V284z M24,380h440v8H24V380z"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Abudhabi</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* ---------------- Thailand ------------------ */}
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer">
                                    <div className="bg-img rounded-full overflow-hidden flex justify-center">
                                        <div className="shiny-effect-container p-2">
                                            {/* Thailand SVG with Gradient */}
                                            <svg
                                                fill="none"
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 512 512"
                                                xmlSpace="preserve"
                                            >
                                                {/* Define the Gradient */}
                                                <defs>
                                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" style={{ stopColor: '#ff7e5f', stopOpacity: 1 }} />
                                                        <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                                                    </linearGradient>
                                                </defs>

                                                {/* SVG Elements with Gradient Applied */}
                                                <g>
                                                    <g>
                                                        <rect x="56.424" y="495.282" width="399.151" height="16.718" fill="url(#gradient1)" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path className="svg-path"
                                                            d="M415.869,470.204v-72.098h-11.166c7.032-8.412,11.21-19.287,11.21-31.156c0-26.608-21.474-48.257-48.077-48.257h-95.118
              v16.718h50.572c16.039,1.751,28.195,15.228,28.195,31.548c0,15.407-10.833,28.28-25.542,31.146h-56.918
              c7.087-8.414,11.314-19.287,11.314-31.156c0-26.608-21.517-48.257-48.12-48.257H144.47c-26.603,0-48.383,21.648-48.383,48.256
              c0,11.868,4.382,22.742,11.547,31.156H96.131v72.098H80.457v16.718h351.086v-16.718H415.869z M232.22,335.412
              c17.385,0,31.402,14.148,31.402,31.538c0,15.732-11.374,28.81-26.698,31.156h-7.358l-25.043-62.694H232.22z M187,335.633
              l25,62.473h-25.939c-14.703-2.867-25.511-15.753-25.511-31.161C160.551,351.257,172.025,338.175,187,335.633z M144.469,335.412
              h11.528c-7.297,8.45-11.728,19.441-11.728,31.428c0,11.91,4.432,22.836,11.677,31.265h-16.483
              c-14.659-2.359-26.658-15.431-26.658-31.156C112.804,349.56,127.084,335.412,144.469,335.412z M399.151,470.204H112.849v-55.38
              h286.302V470.204z M372.696,398.106h-16.215c7.079-8.393,11.285-19.269,11.285-31.146c0-12.069-4.342-23.102-11.629-31.548h11.698
              c17.384,0,31.358,14.148,31.358,31.538C399.195,382.697,388.009,395.784,372.696,398.106z"
                                                            fill="url(#gradient1)"
                                                        />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect x="248.686" y="111.804" width="14.629" height="16.718" fill="url(#gradient1)" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path className="svg-path"
                                                            d="M323.709,135.452h-34.768c4.563-6.369,7.261-14.16,7.261-22.575v-32.42h7.863V63.739h-7.863V46.671
              c0-19.031-13.755-34.899-31.843-38.211V0h-16.718v8.515c-17.938,3.434-31.539,19.232-31.539,38.157v17.067h-8.167v16.718h8.167
              v32.419c0,8.415,2.698,16.207,7.261,22.575h-34.769c-28.819,0-52.267,23.446-52.267,52.266V311.28h79.938V295H152.61V187.718
              c0-19.842,16.142-35.984,35.984-35.984h8.345l95.906,95.907h-20.127v14.629h-32.392v-14.629h-48.065v-56.424h-16.718v73.143
              h24.033v22.988h16.718v-22.988h7.314v47.02h65.829v-47.02h6.269v22.988h16.718v-22.988h24.033v-73.143h-16.718v56.424h-3.868
              l-48.206-48.206l47.701-47.701h8.345c19.842,0,35.984,16.143,35.984,35.984V295h-63.655v16.282h79.938V187.718
              C375.976,158.899,352.53,135.452,323.709,135.452z M272.718,294.661h-32.392v-15.674h32.392V294.661z M254.959,24.095h2.385
              c9.826,0,18.201,6.312,21.296,15.091c-6.695-4.784-14.459-7.358-22.488-7.358c-8.259,0-15.784,2.245-22.038,6.183
              C237.517,29.85,245.578,24.095,254.959,24.095z M232.384,87.771h16.301V71.053h-15.626c0.495-13.098,10.171-22.505,23.462-22.505
              c12.465,0,22.265,11.181,23.398,21.568v0.937h-16.606v16.718h12.405l4.202,2.708v22.396c0,12.448-10.127,22.575-22.576,22.575
              h-2.385c-12.448,0-22.575-10.127-22.575-22.575V87.771z M256.153,187.922l-36.188-36.188h34.995h2.385h34.996L256.153,187.922z"
                                                            fill="url(#gradient1)"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="trending-name text-center 1 duration-500">
                                        <span className='heading8'>Thailand</span>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* ---------------- Singapore ------------------ */}
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer">
                                    <div className="bg-img rounded-full overflow-hidden flex justify-center">
                                        <div className="shiny-effect-container p-2">
                                            {/* Inline SVG with Gradient */}
                                            <svg
                                                fill="none"
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 32 32"
                                                xmlSpace="preserve"
                                            >
                                                {/* Define the Gradient */}
                                                <defs>
                                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                                                        <stop offset="100%" style={{ stopColor: '#feb47b', stopOpacity: 1 }} />
                                                    </linearGradient>
                                                </defs>

                                                {/* Apply the Gradient to the Path */}
                                                <path className="svg-path"
                                                    id="singapore_1_"
                                                    d="M31,11.64H21c-0.199,0-0.36,0.161-0.36,0.36s0.161,0.36,0.36,0.36c2.007,0,3.64,1.633,3.64,3.64v10c0,0.904-0.735,1.64-1.64,1.64c-0.199,0-0.36,0.161-0.36,0.36s0.161,0.36,0.36,0.36c1.302,0,2.36-1.059,2.36-2.36v-1.64h1.279V26c0,1.302,1.059,2.36,2.36,2.36c0.199,0,0.36-0.161,0.36-0.36s-0.161-0.36-0.36-0.36c-0.904,0-1.64-0.735-1.64-1.64V16c0-2.007,1.633-3.64,3.64-3.64c0.199,0,0.36-0.161,0.36-0.36S31.199,11.64,31,11.64z M26.64,16.36v1.28h-1.28v-1.28H26.64z M25.36,18.36h1.279v1.279H25.36V18.36z M25.36,20.36h1.279v1.279H25.36V20.36z M25.36,23.64v-1.28h1.279v1.279L25.36,23.64L25.36,23.64z M26.663,15.64h-1.325c-0.113-1.369-0.853-2.562-1.94-3.28h5.205C27.516,13.078,26.776,14.272,26.663,15.64z M9,27.64c-0.904,0-1.64-0.735-1.64-1.64V16c0-2.007,1.633-3.64,3.64-3.64c0.199,0,0.36-0.161,0.36-0.36s-0.161-0.36-0.36-0.36H1c-0.199,0-0.36,0.161-0.36,0.36S0.801,12.36,1,12.36c2.007,0,3.64,1.633,3.64,3.64v10c0,0.904-0.736,1.64-1.64,1.64c-0.199,0-0.36,0.161-0.36,0.36S2.801,28.36,3,28.36c1.301,0,2.36-1.059,2.36-2.36v-1.64h1.28V26c0,1.302,1.059,2.36,2.36,2.36c0.199,0,0.36-0.161,0.36-0.36S9.199,27.64,9,27.64z M6.64,16.36v1.28H5.36v-1.28H6.64z M6.64,19.64H5.36v-1.28h1.28C6.64,18.36,6.64,19.64,6.64,19.64z M5.36,20.36h1.28v1.279H5.36V20.36z M3.397,12.36h5.205c-1.087,0.718-1.826,1.912-1.939,3.28H5.337C5.224,14.272,4.484,13.078,3.397,12.36z M5.36,23.64v-1.28h1.28v1.279L5.36,23.64L5.36,23.64z M22,30.64c-2.007,0-3.64-1.633-3.64-3.64V7c0-3.11,2.529-5.64,5.64-5.64h2c0.199,0,0.36-0.161,0.36-0.36S26.199,0.64,26,0.64H6C5.801,0.64,5.64,0.801,5.64,1S5.801,1.36,6,1.36h2c3.11,0,5.64,2.53,5.64,5.64v20c0,2.007-1.633,3.64-3.64,3.64c-0.199,0-0.36,0.161-0.36,0.36s0.161,0.36,0.36,0.36c2.404,0,4.36-1.956,4.36-4.36v-1.309c0.343,0.333,0.787,0.556,1.28,0.633V31c0,0.199,0.161,0.36,0.36,0.36s0.36-0.161,0.36-0.36v-4.676c0.493-0.076,0.937-0.3,1.28-0.632V27c0,2.404,1.956,4.36,4.36,4.36c0.199,0,0.36-0.161,0.36-0.36S22.199,30.64,22,30.64z M14.36,17.691c0.343,0.333,0.787,0.556,1.28,0.633v3.273c-0.731-0.165-1.28-0.817-1.28-1.597V17.691z M14.36,13.691c0.343,0.333,0.787,0.556,1.28,0.633v3.273c-0.731-0.165-1.28-0.817-1.28-1.597V13.691z M14.36,9.691c0.343,0.333,0.787,0.556,1.28,0.633v3.274c-0.731-0.165-1.28-0.817-1.28-1.597V9.691z"
                                                    fill="url(#gradient1)" // Apply gradient here
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Singapore</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* ---------------- Japan ------------------ */}
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer">
                                    <div className="bg-img rounded-full overflow-hidden flex justify-center">
                                        <div className="shiny-effect-container p-2">
                                            {/* Japan SVG with Gradient */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="75px"
                                                height="75px"
                                                viewBox="0 0 64 64"
                                                className="image"
                                            >
                                                <defs>
                                                    {/* Gradient Definition */}
                                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" style={{ stopColor: "#ff7f50", stopOpacity: 1 }} />
                                                        <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
                                                    </linearGradient>
                                                </defs>
                                                <g id="japan">
                                                    <line className="svg-path"
                                                        x1="46"
                                                        y1="33"
                                                        x2="46"
                                                        y2="27.587"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "url(#grad1)", // Gradient stroke
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2px",
                                                        }}
                                                    />
                                                    <polyline className="svg-path"
                                                        points="49.678 36 50.884 60.08 46 60.08 46 36"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "url(#grad1)", // Gradient stroke
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2px",
                                                        }}
                                                    />
                                                    <line className="svg-path"
                                                        x1="49.256"
                                                        y1="27.587"
                                                        x2="49.5"
                                                        y2="32.45"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "url(#grad1)", // Gradient stroke
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2px",
                                                        }}
                                                    />
                                                    <line className="svg-path"
                                                        x1="20.101"
                                                        y1="32.45"
                                                        x2="20.101"
                                                        y2="27.587"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "url(#grad1)", // Gradient stroke
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2px",
                                                        }}
                                                    />
                                                    <polyline
                                                        points="16.214 36.465 14.971 60.08 20.101 60.08 20.101 36.465"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "url(#grad1)", // Gradient stroke
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2px",
                                                        }}
                                                    />
                                                    <line className="svg-path"
                                                        x1="16.681"
                                                        y1="27.587"
                                                        x2="16.425"
                                                        y2="32.45"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "url(#grad1)", // Gradient stroke
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2px",
                                                        }}
                                                    />
                                                    <rect className="svg-path"
                                                        x="13"
                                                        y="33"
                                                        width="40"
                                                        height="3"
                                                        rx="1.5"
                                                        ry="1.5"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "url(#grad1)", // Gradient stroke
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2px",
                                                        }}
                                                    />
                                                    <rect
                                                        x="31"
                                                        y="28"
                                                        width="4"
                                                        height="5"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "url(#grad1)", // Gradient stroke
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2px",
                                                        }}
                                                    />
                                                    <path className="svg-path"
                                                        d="M57,21.88v4.094a143.181,143.181,0,0,1-48,0V22.307"
                                                    // style={{
                                                    //     fill: "none",
                                                    //     stroke: "url(#grad1)", // Gradient stroke
                                                    //     strokeLinecap: "round",
                                                    //     strokeLinejoin: "round",
                                                    //     strokeWidth: "2px",
                                                    // }}

                                                    />
                                                    <path className="svg-path"
                                                        d="M62,20.908a137.544,137.544,0,0,1-58,0V15.616c19.14,6.095,38.492,5.935,58,0Z"
                                                    // style={{
                                                    //     fill: "none",
                                                    //     stroke: "url(#grad1)", // Gradient stroke
                                                    //     strokeLinecap: "round",
                                                    //     strokeLinejoin: "round",
                                                    //     strokeWidth: "2px",
                                                    // }}
                                                    />
                                                    <line
                                                        x1="8.13"
                                                        y1="60.08"
                                                        x2="56.014"
                                                        y2="60.08"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "url(#grad1)", // Gradient stroke
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2px",
                                                        }}
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Japan</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                             {/* ---------------- Italy ------------------ */}
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer">
                                    <div className="bg-img rounded-full overflow-hidden flex justify-center">
                                        <div className="shiny-effect-container p-2">
                                            {/* New SVG */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="#000000"
                                                width="75px"
                                                height="75px"
                                                viewBox="0 0 32 32"
                                                className="image"
                                            >
                                                <path className="svg-path" d="M5.5,10c0-0.276,0.224-0.5,0.5-0.5S6.5,9.724,6.5,10S6.276,10.5,6,10.5S5.5,10.276,5.5,10z M26,10.5
                    c0.276,0,0.5-0.224,0.5-0.5S26.276,9.5,26,9.5s-0.5,0.224-0.5,0.5S25.724,10.5,26,10.5z M6,21.5c-0.276,0-0.5,0.224-0.5,0.5
                    s0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5S6.276,21.5,6,21.5z M25.5,22c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5
                    S25.5,21.724,25.5,22z M16,18c-0.276,0-0.5,0.224-0.5,0.5S15.724,19,16,19c0.276,0,0.5-0.224,0.5-0.5S16.276,18,16,18z M16,2.5
                    c0.276,0,0.5-0.224,0.5-0.5S16.276,1.5,16,1.5S15.5,1.724,15.5,2S15.724,2.5,16,2.5z M8,30.36h16v-0.72H8V30.36z M30.333,18.138
                    C30.277,18.272,30.146,18.36,30,18.36h-1.64v7.279H30v0.721h-5.64v1.279H28v0.721H4v-0.72h3.64v-1.28H2v-0.72h1.64v-7.28H2
                    c-0.146,0-0.277-0.088-0.333-0.223s-0.025-0.289,0.078-0.393L3.64,15.85V14c0-1.301,1.059-2.36,2.36-2.36S8.36,12.699,8.36,14v1.64
                    H10c0.146,0,0.277,0.087,0.333,0.222c0.056,0.134,0.025,0.289-0.078,0.392L8.869,17.64h2.771v-3.491l-1.895-1.895
                    c-0.103-0.103-0.134-0.258-0.078-0.392C9.723,11.728,9.854,11.64,10,11.64h1.64V10c0-1.927,1.264-3.546,3-4.121V5
                    c0-0.75,0.61-1.36,1.36-1.36S17.36,4.25,17.36,5v0.879c1.736,0.575,3,2.195,3,4.121v1.64H22c0.146,0,0.277,0.087,0.333,0.222
                    c0.056,0.134,0.024,0.289-0.078,0.392l-1.895,1.895v3.491h2.771l-1.386-1.385c-0.103-0.103-0.134-0.258-0.078-0.392
                    c0.056-0.135,0.188-0.222,0.333-0.222h1.64V14c0-1.301,1.059-2.36,2.36-2.36s2.36,1.059,2.36,2.36v1.851l1.895,1.894
                    C30.357,17.849,30.389,18.003,30.333,18.138z M24.36,15.64h3.279V14c0-0.904-0.735-1.64-1.64-1.64s-1.64,0.736-1.64,1.64
                    L24.36,15.64L24.36,15.64z M8.36,20.36v5.279h1.28V20.36H8.36z M10.36,25.64h1.28v-5.28h-1.28V25.64z M12.36,20.36v5.279h1.28V20.36
                    H12.36z M14.36,19.64h3.28v-1.49L16,16.509l-1.64,1.64V19.64z M14.36,20.36v5.279h3.28V20.36H14.36z M18.36,25.64h1.279v-5.28H18.36
                    V25.64z M10.36,26.36v1.279h1.28V26.36H10.36z M12.36,27.64h1.28v-1.28h-1.28V27.64z M14.36,27.64h3.28v-1.28h-3.28V27.64z
                     M18.36,27.64h1.279v-1.28H18.36V27.64z M20.36,27.64h1.279v-1.28H20.36V27.64z M21.64,25.64v-5.28h-1.28v5.279L21.64,25.64
                    L21.64,25.64z M22.36,25.64h1.279v-5.28H22.36V25.64z M25.131,19.64l-1.28-1.279h-5.49v1.279H25.131z M15.36,5.705
                    C15.57,5.674,15.781,5.64,16,5.64s0.43,0.033,0.64,0.065V5c0-0.353-0.287-0.64-0.64-0.64S15.36,4.647,15.36,5V5.705z M12.36,10v1.64
                    h2.28V9c0-0.75,0.61-1.36,1.36-1.36c0.75,0,1.36,0.61,1.36,1.36v2.64h2.279V10c0-2.007-1.633-3.64-3.64-3.64
                    C13.993,6.36,12.36,7.993,12.36,10z M16.64,11.64V9c0-0.353-0.287-0.64-0.64-0.64S15.36,8.647,15.36,9v2.64H16.64z M10.869,12.36
                    l1.28,1.28h7.702l1.28-1.28H20h-8H10.869z M12.36,17.64h1.491l1.895-1.894c0.141-0.141,0.368-0.141,0.509,0
                    c0.141,0.141,0.141,0.368,0,0.509L14.36,17.64L12.36,17.64z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Italy</span>
                              
                                    </div>
                                </div>
                            </SwiperSlide>

                             {/* ---------------- Amsterdam ------------------ */}
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer">
                                    <div className="bg-img rounded-full overflow-hidden flex justify-center">
                                       <div className="shiny-effect-container p-2">
                                        {/* New SVG */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#000000"
                                            width="75px"
                                            height="75px"
                                            viewBox="0 0 32 32"
                                            className="image"
                                        >
                                            <path className="svg-path" d="M5.5,2.5C5.5,2.224,5.724,2,6,2s0.5,0.224,0.5,0.5S6.276,3,6,3S5.5,2.776,5.5,2.5z M1,25.64H0.64v0.721H1c2.559,0,4.64,2.081,4.64,4.64v0.36h0.72V31C6.36,28.045,3.956,25.64,1,25.64z M25.64,31v0.36h0.721V31c0-2.559,2.081-4.64,4.64-4.64h0.36v-0.72H31C28.045,25.64,25.64,28.045,25.64,31z M16,25.64c-2.956,0-5.36,2.405-5.36,5.36v0.36h0.72V31c0-2.559,2.082-4.64,4.64-4.64s4.64,2.081,4.64,4.64v0.36h0.721V31C21.36,28.045,18.955,25.64,16,25.64z M31.36,9v15c0,0.199-0.161,0.36-0.36,0.36H1c-0.199,0-0.36-0.161-0.36-0.36V11c0-0.199,0.161-0.36,0.36-0.36h0.796L4.64,5.9V4c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v1.9l2.844,4.74h0.436V7c0-0.199,0.161-0.36,0.36-0.36h0.64V5c0-0.199,0.161-0.36,0.36-0.36h0.64V3c0-0.199,0.161-0.36,0.36-0.36h1.64V1c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v1.64H19c0.199,0,0.36,0.161,0.36,0.36v1.64H20c0.199,0,0.36,0.161,0.36,0.36v1.64H21c0.199,0,0.36,0.161,0.36,0.36v1.64h0.481c1.39-1.468,1.707-3.474,1.777-4.28H23V3.64h0.676c0.175-1.13,1.146-2,2.324-2s2.149,0.87,2.324,2H29v0.72h-0.618c0.07,0.806,0.387,2.812,1.777,4.28H31C31.199,8.64,31.36,8.801,31.36,9z M24.403,3.64h3.194C27.432,2.909,26.78,2.36,26,2.36S24.568,2.909,24.403,3.64z M22.786,8.64h6.428c-1.226-1.597-1.499-3.498-1.558-4.28h-3.312C24.285,5.142,24.012,7.043,22.786,8.64z M21.36,9.36v5.28h9.279V9.36H21.36z M12.36,6.64h2.28V6c0-0.75,0.61-1.36,1.36-1.36c0.75,0,1.36,0.61,1.36,1.36v0.64h2.279V5.36H19c-0.199,0-0.36-0.161-0.36-0.36V3.36H17c-0.199,0-0.36-0.161-0.36-0.36V1.36h-1.28V3c0,0.199-0.161,0.36-0.36,0.36h-1.64V5c0,0.199-0.161,0.36-0.36,0.36h-0.64V6.64z M16.64,6c0-0.353-0.287-0.64-0.64-0.64S15.36,5.647,15.36,6v0.64h1.28V6z M2.636,10.64H4.64V10c0-0.75,0.61-1.36,1.36-1.36S7.36,9.25,7.36,10v0.64h2.005L6.691,6.185 C6.687,6.178,6.687,6.169,6.683,6.162C6.672,6.141,6.666,6.118,6.659,6.095C6.653,6.071,6.646,6.048,6.645,6.024 C6.644,6.015,6.64,6.008,6.64,6V4.36H5.36V6c0,0.008-0.004,0.015-0.005,0.024C5.354,6.048,5.347,6.071,5.341,6.095 C5.334,6.118,5.328,6.141,5.317,6.162C5.313,6.169,5.313,6.178,5.309,6.185L2.636,10.64z M6.64,10c0-0.353-0.287-0.64-0.64-0.64 S5.36,9.647,5.36,10v0.64h1.28C6.64,10.64,6.64,10,6.64,10z" />
                                        </svg>
                                    </div>
                                    </div>
                                    <div className="trending-name text-center mt-1 duration-500">
                                        <span className='heading8'>Amsterdam</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                           
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bannerestination