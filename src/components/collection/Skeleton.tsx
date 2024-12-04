import React from 'react';

interface SkeletonLoaderProps {
    viewType: string
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ viewType }) => {
    return (
        <>
            {viewType === "list" ? (
                <div className="product-item list-type my-10">
                    <div className="product-main flex gap-7 rounded-2xl bg-white pr-7">
                        <div
                            className="product-thumb"
                            style={{ maxWidth: '30%', minWidth: '30%' }}
                        >
                            <div
                                className="skeleton skeleton-block"
                                style={{ width: '100%', height: '250px' }}
                            ></div>
                        </div>

                        <div
                            className="flex gap-4 flex-col"
                            style={{ maxWidth: '70%', minWidth: '70%' }}
                        >
                            <div
                                className="skeleton skeleton-text"
                                style={{ width: '100%', height: '10px' }}
                            ></div>

                            <div
                                className="skeleton skeleton-text"
                                style={{ width: '40%', height: '10px' }}
                            ></div>
                            <div
                                className="skeleton skeleton-text"
                                style={{ width: '80%', height: '60px' }}
                            ></div>
                            <div
                                className="skeleton skeleton-text"
                                style={{ width: '70%', height: '30px' }}
                            ></div>
                            <div
                                className="skeleton skeleton-text"
                                style={{ width: '100%' }}
                            ></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="product-item list-type my-10">
                    <div className="product-main rounded-2xl bg-white flex flex-col items-center">
                        {/* Skeleton for the product thumbnail */}
                        <div
                            className="product-thumb"
                            style={{ maxHeight: '250px', width: '100%' }}
                        >
                            <div style={{ width: '100%', height: '250px' }}>
                                <div className='skeleton skeleton-block'></div>
                            </div>
                        </div>

                        <div className="product-thumb my-2" style={{ maxHeight: '15px', width: '100%' }}>
                            <div style={{ width: '75%', height: '15px' }}>
                                <div className='skeleton skeleton-block'></div>
                            </div>
                        </div>

                        <div className="product-thumb my-2" style={{ maxHeight: '20px', width: '100%' }}>
                            <div style={{ width: '80%', height: '20px' }}>
                                <div className='skeleton skeleton-block'></div>
                            </div>
                        </div>

                        <div className="product-thumb my-2" style={{ maxHeight: '20px', width: '100%' }}>
                            <div style={{ width: '70%', height: '20px' }}>
                                <div className='skeleton skeleton-block'></div>
                            </div>
                        </div>

                        <div className="product-thumb my-2" style={{ maxHeight: '20px', width: '100%' }}>
                            <div style={{ width: '100%', height: '20px' }}>
                                <div className='skeleton skeleton-block'></div>
                            </div>
                        </div>

                       
                    </div>
                </div>

            )}
        </>
    );
};

export default SkeletonLoader;
