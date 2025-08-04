import React, { useEffect, useState } from 'react';
import { Chart } from 'react-charts';

const Statistics = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const data = [
        {
            label: 'Products',
            data: products.map(product => ({
                primary: product.productName,      // or product.productName
                secondary: product.productPrice    // or product.productPrice
            }))
        }
    ];

    const primaryAxis = {
        getValue: datum => datum.primary,
        title: 'Product Name'
    };

    const secondaryAxes = [
        {
            getValue: datum => datum.secondary,
            title: 'Price ($)',
            min: 0
        }
    ];

    return (
        <div className='pt-12 pb-24 p-40 h-[400] mx-auto'>
            <h2 className='text-2xl font-bold mb-8'>Statistics</h2>
            <div className='bg-white p-8 rounded-lg'>
                <div className='h-96'>
                    {products.length > 0 && (
                        <Chart
                            options={{
                                data,
                                primaryAxis,
                                secondaryAxes
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
