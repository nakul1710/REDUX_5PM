import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = () => {
  const data = useSelector((state) => state.allcart.items);
  console.log(data);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap gap-4 mt-4 justify-center">
      {data.map((item, key) => (
        <div className="card bg-base-100 w-96 shadow-sm" key={key}>
          <figure>
            <img
              src={item.img}
              alt={item.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>
              {item.description}
            </p>
            <div className="mb-2">
              <span className="text-lg font-semibold text-green-600">Price: ${item.price}</span>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard