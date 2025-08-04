import { NavLink } from "react-router";
import { deleteAllCart, deleteCart, deleteWishlist, getCartData, getWishlistData, setToCart } from "../Utilities/DB";
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
    const [cartActive, setCartActive] = useState(true)

    useEffect(() => {
        if (cartActive) {
            const cartId = getCartData()
            setCartData(products.filter(product => cartId.includes(product.id)))
        }
        else {
            const cartId = getWishlistData()
            setWishlists(products.filter(product => cartId.includes(product.id)))
        }
    }, [cartActive, products])

    const handleCart = () => {
        setCartActive(true)
    }

    const handleWishlist = () => {
        setCartActive(false)
    }

    const handleDeleteCart = (id) => {
        const updatedCart = deleteCart(id)
        setCartData(products.filter(product => updatedCart.includes(product.id)))
    }
    const handleDeleteWishlist = (id) => {
        const updatedWishlist = deleteWishlist(id)
        setWishlists(products.filter(product => updatedWishlist.includes(product.id)))
    }

    const handleSortDesc = () => {
        const sorted = [...cartData].sort((a, b) => b.productPrice - a.productPrice);
        setCartData(sorted);
    };

    const handleAddToCardFromWishlist = (id) => {
        setToCart(id)
        handleDeleteWishlist(id)
    }

    const handlePurchased = () => {
        const purchaseIds = cartData.filter(cart => !cart.stock).map(cart => cart.id)
        deleteAllCart(purchaseIds)
    }


    let totalCost = 0
    cartData.map(cart => {
        if (cart.stock) {
            totalCost = totalCost + cart.productPrice
        }
    })


    return (
        <div>
            <div className="text-center space-y-6 bg-violet-500 px-[402px] py-8">
                <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                <p className="text-base text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="flex items-center justify-center space-x-6">
                    {/* <button className="btn text-lg font-extrabold px-16 py-3 rounded-full text-violet-500 ">Cart</button>
                    <button className="btn text-lg font-extrabold px-16 py-3 rounded-full text-violet-500 ">Wishlist</button> */}
                    <NavLink id="btnCart" to={'/dashboard/cart'} onClick={() => handleCart()}
                        className={`btn btn-outline text-lg font-extrabold px-16 py-3 rounded-full  border-2 border-amber-100 ${cartActive ? "bg-white text-violet-500" : "text-white"}`}>Cart</NavLink>
                    <NavLink id="btnWishlist" to={'/dashboard/wishlist'} onClick={() => handleWishlist()}
                        className={`btn btn-outline text-lg font-extrabold px-16 py-3 rounded-full  border-2 border-amber-100 ${!cartActive ? "bg-white text-violet-500" : "text-white"}`}>Wishlist</NavLink>
                </div>
            </div>

            <div id="cart" className={`px-40 ${cartActive ? "block" : "hidden"}`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Cart</h2>
                    <div className="flex justify-end items-center space-x-5 my-8">
                        <h2 className="text-2xl font-bold">Total cost: $ {totalCost}</h2>
                        <button onClick={handleSortDesc} className="btn text-lg text-violet-500 font-semibold rounded-full px-6 py-3.5">Sort by Price</button>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn text-lg font-medium bg-violet-500 text-white rounded-full px-6 py-3.5">Purchase</button>
                    </div>
                </div>

                {
                    cartData.map(cart => <Cart key={cart.id} cart={cart} handleDeleteCart={handleDeleteCart} />)
                }
            </div>

            <div id="wishlist" className={`px-40 ${!cartActive ? "block" : "hidden"}`}>
                <div className="my-8">
                    <h2 className="text-2xl font-bold">WishList</h2>
                </div>

                {
                    wishlists.map(wishlist => <Wishlist key={wishlist.id} wishlist={wishlist} handleDeleteWishlist={handleDeleteWishlist} handleAddToCardFromWishlist={handleAddToCardFromWishlist} />)
                }
            </div>


            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center space-y-4 rounded-2xl">
                    <img className="mx-auto" src="/src/assets/Group.png" alt="" />
                    <h3 className="font-bold text-2xl">Payment Successfully</h3>
                    <hr className="border-t-gray-200" />
                    <p className="text-gray-500 text-lg">Thanks for purchasing</p>
                    <p className="text-gray-500 text-lg">Total: $ {totalCost}</p>
                    <div className="modal-action">
                        <form method="dialog" className="w-full">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handlePurchased} className="btn font-semibold  text-lg w-full rounded-full">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>

    );
};

export default Dashboard;