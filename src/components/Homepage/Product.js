import React from "react";

import { AiFillStar } from "react-icons/ai";

export default function Product({
    image,
    desc,
    price,
    title,
    category,
    rating,
}) {
    return (
        <div className="bg-white m-10 sm:m-5 relative flex flex-col justify-center p-8 text-sm">
            {/* CATEGORY TEXT  */}
            <p className="absolute top-2 right-2 italic text-xs">{category}</p>

            {/* IMAGE  */}
            <img
                src={image}
                className="self-center object-contain h-[200px] w-[180px] mt-2"
                alt=""
            />

            {/* TITLE TEXT  */}
            <h4 className="font-bold mt-2">{title}</h4>

            {/* RATING  */}
            <div className="flex items-center mt-2">
                {Array(Math.round(rating.rate))
                    .fill()
                    .map(() => (
                        <AiFillStar key={Math.random()} className="h-5 text-yellow-500" />
                    ))}
                <div className="pl-3 text-xs font-semibold text-gray-500">
                    {rating.rate + " "}
                    <span>out of</span>
                    {" " + rating.count}
                </div>
            </div>

            {/* DESCRIPTION  */}
            <p className="line-clamp-2 mt-2">{desc}</p>

            {/* CURRENCY  */}
            <div className="mt-2 mb-2 font-bold">{`$${price}`}</div>

            {/* ADD TO CART BUTTON  */}
            <button className="btn mt-auto">Add to cart</button>
        </div>
    );
}
