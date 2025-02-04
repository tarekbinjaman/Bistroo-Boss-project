import React from 'react';
import SectionTitle from '../../../Secitiontitle/SectionTitle';
import featured from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item pt-8 bg-fixed'>
            <SectionTitle heading={"Featured item"} subHeading={"check it out"}></SectionTitle>
            <div  className='flex justify-center items-center pb-20 pt-12 px-16'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quam eaque dolorum? Velit aliquam hic molestias enim quod earum numquam!</p>
                    <button className='btn btn-outline'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;