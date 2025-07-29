import React from 'react';

const Cart = ({cart}) => {

        const { id, productName, productPrice, productImage, category, description, stock, rating } = cart;
    return (

        <div className="flex items-center justify-between p-8 bg-white shadow-sm mb-6 rounded-2xl">
            <div className="flex items-center space-x-8">
                <div className="bg-base-300 rounded-2xl w-52 h-32 px-8 py-3">
                    <img className=" h-full w-full mx-auto" src={productImage} alt="" />
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{productName}</h3>
                    <p className="text-lg text-gray-500">{description}</p>
                    <p className="text-xl font-semibold text-gray-700">Price: ${productPrice}</p>
                </div>
            </div>
            <button className="btn text-red-500 text-3xl border-red-500 px-3 py-5 rounded-full">x</button>
        </div>

    );
};

export default Cart;