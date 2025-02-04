import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-8'>
            <p className='text-yellow-600 mb-3'>---{subHeading}---</p>
            <h3 className='lg:text-4xl text-2xl uppercase border-y-2 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;