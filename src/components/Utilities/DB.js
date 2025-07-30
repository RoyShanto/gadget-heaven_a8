export const getCartData = () => {
    const cartDataStr = localStorage.getItem('cartData')
    if (cartDataStr) {
        const cartData = JSON.parse(cartDataStr)
        return cartData;
    }
    else {
        return [];
    }
}
export const getWishlistData = () => {
    const cartDataStr = localStorage.getItem('wishlist')
    if (cartDataStr) {
        const cartData = JSON.parse(cartDataStr)
        return cartData;
    }
    else {
        return [];
    }
}

export const setToCart = (id) => {
    let cartData = getCartData();
    if (cartData.includes(id)) {
        alert('Already added')
    }
    else {
        const newCartData = [...cartData, id]
        localStorage.setItem('cartData', JSON.stringify(newCartData))
    }
}
export const setToWishlist = (id) => {
    let cartData = getWishlistData();
    if (cartData.includes(id)) {
        alert('Already added')
    }
    else {
        const newCartData = [...cartData, id]
        localStorage.setItem('wishlist', JSON.stringify(newCartData))
    }
}

export const deleteCart = (id) => {
    let cartData = getCartData();
    const updatedCart = cartData.filter(cart => cart !== id)
    localStorage.setItem('cartData', JSON.stringify(updatedCart))
    return updatedCart
}
export const deleteWishlist = (id) => {
    let wishlists = getWishlistData();
    const updatedWishlist = wishlists.filter(wishlist => wishlist !== id)
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
    return updatedWishlist
}
