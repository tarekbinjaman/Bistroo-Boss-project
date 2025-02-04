import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:' 0 200px 200px 200px'}} className='w-[100px] h-[80px] object-cover' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}--------</h3>
                <p>{recipe}</p>
                <p className='text-yellow-500'>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;