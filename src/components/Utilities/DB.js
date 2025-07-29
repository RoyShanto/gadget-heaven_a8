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