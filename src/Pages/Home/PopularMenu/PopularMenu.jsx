import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Secitiontitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem';
import useMenu from '../../../hooks/UseMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(()=> {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => setMenu(data.filter(items => items.category === "popular")))
    // }, [])
    return (
        <div>
            <SectionTitle
                heading={"From our menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;