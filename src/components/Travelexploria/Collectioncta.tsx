import React from 'react'

interface Props {
    props: string
}

const Collectioncta: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="container-full">
                <div className={`newsletter-block md:py-10 sm:py-5 py-5 sm:px-8 px-6 sm:rounded-[15px] rounded-xl flex flex-col items-start ${props}`}>
                    <div className="heading6 text-white">Are you confused where to travel?</div>
                    <div className='text-white text-center mt-3'>Lat&apos;s connect with us</div>
                    <div className="input-block lg:w-2/2 sm:w-5/5 w-full h-auto sm:mt-3 mt-3 p-0 rounded-xl">
                        <form className="w-full flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-3" action="post">
                            {/* Name Field */}
                            <div className="flex-1 sm:w-auto w-full">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="caption1 w-full h-[48px] pl-4 pr-4 rounded-[10px] border border-line"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className="flex-1 sm:w-auto w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="caption1 w-full h-[48px] pl-4 pr-4 rounded-[10px] border border-line"
                                    required
                                />
                            </div>

                            {/* Phone Number Field */}
                            <div className="flex-1 sm:w-auto w-full">
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="caption1 w-full h-[48px] pl-4 pr-4 rounded-[10px] border border-line"
                                    required
                                />
                            </div>

                            {/* Request to Call Back Button */}
                            <div className="sm:w-auto w-full">
                                <button
                                    type="submit"
                                    className="button-main bg-green text-black w-full h-[48px] rounded-[10px] flex items-center justify-center"
                                >
                                    Request to Call Back
                                </button>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Collectioncta