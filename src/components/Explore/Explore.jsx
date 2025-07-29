import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Card from "../Card/Card";

const Explore = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);


    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setCategoryProducts(data)
            })
    }, [])

    const handleCategory = (categoryName) => {
        if (categoryName === "All Product") {
            setCategoryProducts(products)
        }
        else {
            let cP = products.filter(product => product.category === categoryName)
            setCategoryProducts(cP)
        }
    }

    return (
        <div className='lg:px-36'>
            <h2 className='text-4xl max-sm:text-2xl font-bold text-center lg:mb-12'>Explore Cutting-Edge Gadgets</h2>
            <div>
                <div className="drawer lg:drawer-open ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content lg:flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            o
                        </label>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-2">
                            {
                                categoryProducts.length ? categoryProducts.map(product => <Card key={product.id} product={product} />)
                                    : <h1 className="text-4xl font-bold text-red-500 col-span-3">No Products Found</h1>
                            }
                        </div>
                    </div>
                    <div className="drawer-side h-full rounded-2xl mr-6">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-white text-base-content min-h-full w-80 p-6 space-y-6">
                            {
                                categories.map((category, index) => <li className="bg-base-200 rounded-full" key={index}>
                                    <NavLink to={`/home/product/category/${category.name}`}
                                        className={({ isActive }) => isActive ? "bg-violet-500 text-white rounded-full" : "text-black rounded-full"}
                                        onClick={() => handleCategory(category.name)}>{category.name}</NavLink></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;