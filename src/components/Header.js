import Image from "next/image";
import React from "react";
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import {FaAmazon} from 'react-icons/fa'

export default function Header() {
    return (
        <header>
            {/* TOP NAVIGATION */}
            <div className="flex items-center bg-amazon_blue px-6 sm:px-4 py-3 sm:py-2 space-x-8 ">
                {/* LOGO  */}
                <div className="sm:h-12 flex-grow forNavigationSearch:flex-grow-0 cursor-pointer">
                    <Image
                        src={"https://links.papareact.com/f90"}
                        width={105}
                        height={40}
                        className="hidden pt-3  forNavigationLogo:block"
                    />
                    <FaAmazon
                        src={"https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"}
                        className="forNavigationLogo:hidden block text-white flex-grow scale-[2]"
                    />
                </div>

                {/* SEARCH BAR */}
                <div className="h-10 flex-grow hidden forNavigationSearch:flex">
                    <input
                        type="text"
                        className="flex-grow h-full rounded-l-md flex-shrink focus:outline-none px-4 "
                    />
                    <MagnifyingGlassIcon className="search-icon " />
                </div>

                {/* RIGHT HAND SIDE  */}
                <div className="text-white text-xs flex items-center 
                space-x-5 md:space-x-8 sm:leading-3">
                    {/* ACCOUNT DETAILS  */}
                    <div className="link">
                        <p >Hello, Pratiyush</p>
                        <p className="sm:text-sm font-bold">Accounts and Lists</p>
                    </div>

                    {/* ORDERS  */}
                    <div className="link">
                        <p>Returns</p>
                        <p className="sm:text-sm font-bold">& Orders</p>
                    </div>

                    {/* CART  */}
                    <div className="relative link flex items-end">
                        <ShoppingCartIcon className=" h-6 sm:h-8 flex" />
                        <span className="hidden md:block pb-1 font-bold link">Cart</span>
                        <div className="cart-icon">
                            <span className="font-bold text text-sm">5</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM NAVIGATION  */}
            <div>
                <div></div>
            </div>
        </header>
    );
}
