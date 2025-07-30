import { NavLink } from "react-router";
import { deleteCart, deleteWishlist, getCartData, getWishlistData } from "../Utilities/DB";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../wishlist/wishlist";

const Dashboard = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cartData, setCartData] = useState([])
    const [wishlists, setWishlists] = useState([])

    const handleCart = () => {
        document.getElementById('cart').classList.remove('hidden')
        document.getElementById('wishlist').classList.add('hidden')
        const cartId = getCartData()
        setCartData(products.filter(product => cartId.includes(product.id)))
    }

    const handleWishlist = () => {
        document.getElementById('cart').classList.add('hidden')
        document.getElementById('wishlist').classList.remove('hidden')
        const cartId = getWishlistData()
        setWishlists(products.filter(product => cartId.includes(product.id)))
    }

    const handleDeleteCart = (id) => {
        const updatedCart = deleteCart(id)
        setCartData(products.filter(product => updatedCart.includes(product.id)))
    }
    const handleDeleteWishlist = (id) => {
        const updatedWishlist = deleteWishlist(id)
        setWishlists(products.filter(product => updatedWishlist.includes(product.id)))
    }
    
    return (
        <div>
            <div className="text-center space-y-6 bg-violet-500 px-[402px] py-8">
                <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                <p className="text-base text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="flex items-center justify-center space-x-6">
                    {/* <button className="btn text-lg font-extrabold px-16 py-3 rounded-full text-violet-500 ">Cart</button>
                    <button className="btn text-lg font-extrabold px-16 py-3 rounded-full text-violet-500 ">Wishlist</button> */}
                    <NavLink to={'/dashboard/cart'} onClick={() => handleCart()} className={({ isActive }) =>
                        isActive ? "btn text-lg font-extrabold px-16 py-3 rounded-full text-violet-500"
                            : "btn btn-outline text-lg font-extrabold px-16 py-3 rounded-full  border-2 border-amber-100 text-white"
                    }>Cart</NavLink>
                    <NavLink to={'/dashboard/wishlist'} onClick={handleWishlist} className={({ isActive }) =>
                        isActive ? "btn text-lg font-extrabold px-16 py-3 rounded-full text-violet-500"
                            : "btn btn-outline text-lg font-extrabold px-16 py-3 rounded-full  border-2 border-amber-100 text-white"
                    }>Wishlist</NavLink>
                </div>
            </div>

            <div id="cart" className="px-40">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Cart</h2>
                    <div className="flex justify-end items-center space-x-5 my-8">
                        <h2 className="text-2xl font-bold">Total cost: 999.99</h2>
                        <button className="btn text-lg text-violet-500 font-semibold rounded-full px-6 py-3.5">Sort by Price</button>
                        <button className="btn text-lg font-medium bg-violet-500 text-white rounded-full px-6 py-3.5">Purchase</button>
                    </div>
                </div>

                {
                    cartData.map(cart => <Cart key={cart.id} cart={cart} handleDeleteCart={handleDeleteCart} />)
                }
            </div>

            <div id="wishlist" className="px-40">
                <div className="my-8">
                    <h2 className="text-2xl font-bold">WishList</h2>
                </div>

                {
                    wishlists.map(wishlist => <Wishlist key={wishlist.id} wishlist={wishlist} handleDeleteWishlist={handleDeleteWishlist} />)
                }
            </div>


        </div>
    );
};

export default Dashboard;