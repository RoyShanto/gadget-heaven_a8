import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='lg:mt-80 md:pt-72'>
                <Explore/>
            </div>
        </div>
    );
};

export default Home;