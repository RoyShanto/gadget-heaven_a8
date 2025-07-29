import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {

    const params = useParams();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const findProduct = products.find(product => product.id === parseInt(params.id))

    // console.log(findProduct)
    if (!findProduct) {
        return (
            <span className="loading loading-bars loading-xl"></span> //need to place center
        );
    }

    const { id, productName, productPrice, productImage, category, description, stock, rating } = findProduct;

    console.log(productName)

    return (
        <div className='bg-base-200'>
            <div className='bg-violet-500 lg:px-40 h-96 text-white'>
                <div className='lg:px-96 md:px-16 max-sm:px-5 py-8 space-y-4 text-center'>
                    <h2 className='text-3xl font-bold'>Product Details</h2>
                    <p className='text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className='lg:flex bg-white md:p-8 max-sm:p-5 rounded-2xl lg:space-x-8 lg:space-y-0 md:space-y-5 max-sm:space-y-3'>
                    <div className="bg-base-300 rounded-2xl max-sm:px-5 md:py-10 lg:w-1/3 lg:h-[500px] md:h-[400px] max-sm:h-64">
                        <img className="h-full mx-auto" src={productImage} alt="" />
                    </div>
                    <div className='md:space-y-4 text-black lg:w-2/3'>
                        <h3 className='text-3xl max-sm:text-2xl font-semibold'>{productName}</h3>
                        <div className="max-sm:flex justify-between items-center">
                            <p className='text-xl font-semibold'>Price: ${productPrice}</p><br />
                            <span className='bg-green-300 text-green-700 px-3.5 py-2 rounded-full'>{stock? "In Stock" : "Not available" }</span>
                        </div>
                        <p className='text-lg text-gray-500'>{description}</p>
                        <label htmlFor="" className='text-lg font-bold'>Specification:</label>
                        <ol className="list-decimal pl-5">
                            <li className='text-lg text-gray-500'>Intel i7 11th Gen</li>
                            <li className='text-lg text-gray-500'>16GB RAM</li>
                            <li className='text-lg text-gray-500'>Intel i7 11th Gen</li>
                            <li className='text-lg text-gray-500'>Intel i7 11th Gen</li>
                        </ol>
                        <div className="flex items-center">
                            <p className='text-lg font-bold'>Rating: </p>

                            <div className="rating pl-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <input
                                        key={star}
                                        type="radio"
                                        name={`rating-${id}`} // Unique name for each product
                                        className="mask mask-star-2 bg-orange-400"
                                        checked={Math.round(rating) === star}
                                        readOnly
                                    />
                                ))}
                            </div>
                        </div>

                        <hr className="border-t-gray-300 border-dashed my-5" />
                        <div className='flex space-x-4 lg:justify-start md:justify-center max-sm:justify-center'>
                            <button className='btn px-6 py-3 rounded-full bg-violet-500 text-white'>
                                Add To Card
                                <img className='text-white' width="20" height="20" src="https://img.icons8.com/material-rounded/24/ffffff/shopping-cart.png" alt="shopping-cart--v1" />
                            </button>
                            <a className="btn bg-white p-2 rounded-full">
                                <img width="20" height="20" src="https://img.icons8.com/ios/50/like.png" alt="like" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="lg:h-[500px] md:h-[800px] max-sm:h-[500px]"></div>
        </div>
    );
};

export default ProductDetails;