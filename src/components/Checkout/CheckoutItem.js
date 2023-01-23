import React from "react";

import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "@/store/basketSlice";

export default function CheckoutItem({
    id,
    image,
    desc,
    price,
    title,
    category,
    rating,
}) {
    const dispatch = useDispatch();
    
    function removeItemHandler() {
        dispatch(removeFromBasket(id));
    }

    return (
        <div className="grid grid-cols-5 mx-3 pb-1 border-b relative">
            <img
                src={image}
                alt=""
                className="h-[150px] w-[150px] object-contain my-2"
            />

            {/* MIDDLE  */}
            <div className="col-span-4 mx-7 pt-7">
                {/* TITLE  */}
                <h1 className="font-semibold line-clamp-1 md:text-lg">
                    {title}
                </h1>

                {/* RATING STARS  */}
                <div className="flex mt-0.5">
                    {Array(Math.round(rating.rate))
                        .fill()
                        .map(() => (
                            <AiFillStar
                                key={Math.random()}
                                className="h-5 text-yellow-500"
                            />
                        ))}
                </div>

                {/* DESCRIPTION  */}
                <p className="line-clamp-2 text-xs text-gray-600 mt-1.5 sm:text-sm">
                    {desc}
                </p>

                {/* PRICE  */}
                <p>
                    <div className="mt-2 mb-2 font-bold text-xs sm:text-sm">{`$${price}`}</div>
                </p>

                {/* REMOVE FROM CART ICON (TOP RIGHT) */}
                <div className="absolute top-3 right-3 hover:scale-[1.2] cursor-pointer transition-transform duration-300">
                    <RiDeleteBin2Fill onClick={removeItemHandler} />
                </div>
            </div>
        </div>
    );
}
