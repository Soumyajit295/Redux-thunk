import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../actions/action';
import { useParams } from 'react-router-dom';

function SingleProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { singleProduct, loading } = useSelector((state) => state.productReducers);
    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-screen-md w-full mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <img
                            src={singleProduct.image}
                            alt={singleProduct.title}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="w-1/2 p-4 bg-gray-200">
                        <h2 className="text-2xl font-semibold mb-4">{singleProduct.title}</h2>
                        <p className="text-gray-800">{singleProduct.description}</p>
                        <p className="text-gray-700 mt-2"><strong>Price:</strong> ${singleProduct.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
