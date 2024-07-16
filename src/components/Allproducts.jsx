import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTheSingleProduct, fetchData } from '../actions/action';
import {useNavigate} from 'react-router-dom'

function Allproducts() {
  const { products } = useSelector((state) => state.productReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchData());
    dispatch(clearTheSingleProduct())
  }, []);

  function routeToSingleProductPage(id){
    navigate(`product/${id}`)
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {products.map((product) => (
        <div 
        onClick={()=>{routeToSingleProductPage(product.id)}}
        key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden w-72 cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain"
            style={{ maxHeight: '200px' }}
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="mb-2m text-green-600 font-semibold">${product.price}</p>
            <p className="text-gray-600">{product.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Allproducts;
