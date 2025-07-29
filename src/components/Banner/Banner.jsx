

const Banner = () => {
    return (
        <div className="bg-violet-500 pt-12 pb-64 lg:rounded-b-2xl">
            <div className="lg:px-52 max-sm:px-5 text-center text-white space-y-8 relative">
                <h1 className="text-6xl font-bold max-sm:text-4xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="lg:px-40 md:px-18 text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn text-violet-700 rounded-full">Shop Now</button>
                <div className="lg:w-8/12 md:w-11/12 max-sm:w-10/12 p-6 border-2 rounded-xl absolute left-1/2 transform -translate-x-1/2 ">
                    <img src="/src/assets/banner.jpg" className="rounded-xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;