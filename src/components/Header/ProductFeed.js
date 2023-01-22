import React from "react";
import Product from "../Homepage/Product";

export default function ProductFeed({ products }) {
    return (
        <div className="relative z-20 lg:-mt-44 -mt-16 sm:px-10 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* FIRST FOUR */}
            {products.slice(0, 4).map(product => {
                return (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        desc={product.description}
                        rating={product.rating}
                    />
                );
            })}

            {/* BANNER  */}
            <img
                src="https://links.papareact.com/dyz"
                alt=""
                className="md:col-span-full my-10 "
            />

            {/* FIFTH PRODUCT (LIKE A BANNER) */}
            <div className="md:col-span-2 ">
                {products.slice(4, 5).map(product => {
                    return (
                        <Product
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            desc={product.description}
                            rating={product.rating}
                        />
                    );
                })}
            </div>

            {/* REMAINING */}
            {products.slice(5, products.length).map(product => {
                return (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        desc={product.description}
                        rating={product.rating}
                    />
                );
            })}
        </div>
    );
}
