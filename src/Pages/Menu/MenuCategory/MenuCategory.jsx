import React from 'react';
import MenuItem from '../../Shared/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={coverImg} title={"Our menu"}></Cover>}
                        <div className='grid md:grid-cols-2 gap-4'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;