import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
                <p className='bg-gray-700 text-white font-medium absolute right-0 mr-4 mt-2 px-2 py-1 rounded-xl'>{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;