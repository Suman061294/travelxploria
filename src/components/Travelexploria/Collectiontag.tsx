'use client'

import React from 'react';

interface Props {
    props: string;
    slogan: string;
}

const Collectiontag: React.FC<Props> = ({ props, slogan }) => {
    return (
        <>
            <div className={`md:h-[65px] h-[60px] ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="top-nav-main flex justify-between h-full">
                        <div className="text-center text-white flex flex-col items-center justify-center flex-1 h-full">
                            <p className="text-white text-sm">Ideal Duration</p>
                            <p className="text-green  font-bold"> 6 Days</p>
                        </div>


                        <div className="text-center text-white flex flex-col items-center justify-center flex-1 h-full">
                            <p className="text-white text-sm">Starting Price</p>
                            <p className="text-green  font-bold"> 25,000/-</p>
                        </div>
                        <div className="text-center text-white flex flex-col items-center justify-center flex-1 h-full">
                            <p className="text-white text-sm">Ideal Session</p>
                            <p className="text-green  font-bold"> DEC - MAR</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collectiontag;
