import Head from "next/head";
import Image from "next/image";
import React from "react";

import {
    selectItems,
    clearBasket,
    selectTotalPrice,
} from "@/store/basketSlice";
import CheckoutItem from "./CheckoutItem";

import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { useSession, signIn } from "next-auth/react";

export default function Checkout() {
    const items = useSelector(selectItems);
    const dispatch = useDispatch();
    const totalPrice = useSelector(selectTotalPrice);

    const {data:session} = useSession();

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

                {/* RIGHT HAND SIDE */}
                {items.length > 0 && (
                    <div className="bg-white py-6 px-3 font-bold mx-5">
                        <div>{`Subtotal (${items.length}): $${totalPrice.toFixed(2)}`}</div>
                        <button onClick={()=> signIn()} className="bg-gradient-to-b from-gray-300 to-gray-500 border-gray-200 text-black  p-1.5 mt-3 w-full">{!session?"Sign In to checkout":"Proceed to checkout"}</button>
                    </div>
                )}
            </main>
        </>
    );
}
