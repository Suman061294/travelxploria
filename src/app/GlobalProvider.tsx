import React from 'react'
import { ModalQuickviewProvider } from '@/context/ModalQuickviewContext'

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        // <CartProvider>
        //     <ModalCartProvider>
        //         <WishlistProvider>
        //             <ModalWishlistProvider>
        //                 <CompareProvider>
        //                     <ModalCompareProvider>
        //                         <ModalSearchProvider>
                                    <ModalQuickviewProvider>
                                        {children}
                                    </ModalQuickviewProvider>
        //                         </ModalSearchProvider>
        //                     </ModalCompareProvider>
        //                 </CompareProvider>
        //             </ModalWishlistProvider>
        //         </WishlistProvider>
        //     </ModalCartProvider>
        // </CartProvider>
    )
}

export default GlobalProvider