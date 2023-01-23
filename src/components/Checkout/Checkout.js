import Head from "next/head";
import Image from "next/image";
import React from "react";

import { selectItems, clearBasket } from "@/store/basketSlice";
import CheckoutItem from "./CheckoutItem";

import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

export default function Checkout() {
    const items = useSelector(selectItems);
    const dispatch = useDispatch();

    const shoppingHeading = (
        <div className="flex">
            <div className="flex-grow">Shopping Cart</div>
            <button
                onClick={() => dispatch(clearBasket())}
                className="mr-3 bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-lg"
            >
                <RiDeleteBin2Fill />
            </button>
        </div>
    );

    return (
        <>
            <Head>
                <title>Cart - Amazon 2.0</title>
            </Head>
            <main className="bg-gray-100 h-screen w-screen">
                {/* BANNER IMAGE  */}
                <div className="flex items-center justify-center lg:pt-3">
                    <Image
                        src={"https://links.papareact.com/ikj"}
                        height={250}
                        width={1020}
                    />
                </div>

                {/* LEFT HAND SIDE  */}
                <div className="bg-white flex flex-col m-5">
                    {/* CART HEADER  */}
                    <h1 className="font-bold text-lg m-3 border-b pb-2">
                        {items.length > 0
                            ? shoppingHeading
                            : "Your cart is empty"}
                    </h1>

                    {/* INDIVIDUAL PRODUCTS DISPLAY  */}
                    {items.map((item, index) => {
                        return (
                            <CheckoutItem
                                key={index}
                                id={item.id}
                                image={item.image}
                                desc={item.desc}
                                price={item.price}
                                title={item.title}
                                category={item.category}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
            </main>
        </>
    );
}
