import Image from "next/image";
import React from "react";

import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";

export default function Product({
    image,
    desc,
    price,
    title,
    category,
    rating,
}) {

    const hasPrime = Math.random() < 0.5;
    return (
        <div className=" border border-black lg:px-5 div">
            {/* CATEGORY TEXT  */}
            <p>{category}</p>

            {/* TITLE TEXT  */}
            <h4>{title}</h4>

            {/* IMAGE  */}
            <img
                src={image}
                className=" object-contain h-[200px] w-[200px]"
                alt=""
            />

            {/* RATING  */}
            <div className="flex items-center">
                {Array(Math.round(rating.rate))
                    .fill()
                    .map(() => (
                        <AiFillStar className="h-5" />
                    ))}
                <div className="">
                    {rating.rate + " "}
                    <span>out of</span>
                    {" " + rating.count}
                </div>
            </div>

            {/* DESCRIPTION  */}
            <p>{desc}</p>

            {/* CURRENCY  */}
            <div>
                <Currency quantity={price} />
            </div>

            {/* PRIME STATUS  */}
            {hasPrime && (
                <div>
                    <img src="https:/links.papareact.com/fdw" alt="" />
                    <p>Free Next-day delivery</p>
                </div>
            )}

            {/* ADD TO CART BUTTON  */}
            <button>Add to cart</button>
        </div>
    );
}
