import { useState, useEffect } from 'react';

export default function CollectionOverview() {
    const [isCollapsed, setIsCollapsed] = useState(false); // Panel state
    const [showCloseButton, setShowCloseButton] = useState(false); // Close button visibility

    useEffect(() => {
        const handleScroll = () => {
            // Check the scroll position
            const scrollTop = window.scrollY;

            // Show the close button after scrolling down
            if (scrollTop > 117) {
                setShowCloseButton(true);
            } else {
                setShowCloseButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed); // Toggle panel state
    };

    return (
        <div className="shop-product breadcrumb1 lg:py-5 md:py-5 py-5 main-bg-contain">
            <div className="container padding-0 relative">
                {/* Content Section */}
                <div className={`content-panel ${isCollapsed ? '' : 'collapsed'}`}>
                    <h1 className="text-2xl font-bold">Explore Our Collection</h1>
                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tempus malesuada. Suspendisse id quam ut nulla mattis feugiat.
                    </p>
                    
                </div>

                {!isCollapsed ? (
                <p className='cursor-pointer px-5' onClick={handleToggle} >Read More...</p>
                ) : (<></>)}

                {/* Fixed Button */}
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                    {!isCollapsed ? (
                       <></>
                    ) : (
                        showCloseButton && (
                            <button
                                className="bg-red text-white py-2 px-4 rounded-full shadow-lg hover:bg-red-600 transition"
                                onClick={handleToggle}
                            >
                                Close
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
