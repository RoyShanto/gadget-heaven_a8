import { Link } from "react-router";


const Card = ({ product }) => {
    const { id, productName, productPrice, productImage, category, description, stock, rating } = product;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="bg-base-300 h-60 px-20">
                <img className="h-full" src={productImage} alt="Shoes" />
            </figure>
            <div className="card-body space-y">
                <h2 className="card-title text-2xl"> {productName} </h2>
                <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-xl">Price: {productPrice}$</p>
                    <div className="text-white badge badge-secondary ">
                        {stock ? <p>In Stoke</p> : <p>Not Available</p>}
                    </div>
                </div>



                <div className="rating">
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


                <div className="mt-auto">
                    <hr className="border-t-gray-300 border-dashed my-5" />
                    <div className="flex">
                        <Link className="w-full btn bg-base-200" to={`/home/product/${id}`}><button>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;