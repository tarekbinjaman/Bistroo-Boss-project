import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/salad-bg.jpg'
import anotherIm from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import PizzaIMg from '../../assets/menu/pizza-bg.jpg'
import SaladIMg from '../../assets/menu/salad-bg.jpg'
import SoupIMg from '../../assets/menu/soup-bg.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../../hooks/UseMenu';
import SectionTitle from '../../Secitiontitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover img={anotherIm}></Cover>
            {/* Main cove */}
            <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
            items={dessert}
            title={"Dessert"}
            coverImg={dessertImg}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
            items={pizza}
            title={"Pizza"}
            coverImg={PizzaIMg}
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
            items={salad}
            title={"Salad"}
            coverImg={SaladIMg}
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
            items={soup}
            title={"Soup"}
            coverImg={SoupIMg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;