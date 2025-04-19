import React from 'react';
import { Link } from 'react-router';
import BookImage from './../../assets/books.jpg'; 

const Header = () => {
    return (
        <div className='py-10 lg:py-20 px-16 lg:px-32 bg-[#131313]/5 mt-6 lg:mt-12 mb-12 lg:mb-24 rounded-3xl flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20'>
            <div className='lg:w-3/5'>
                <h1 className='playfair font-semibold lg:font-bold text-4xl lg:text-6xl leading-12 lg:leading-20'>Books to freshen up your bookshelf</h1>
                <Link to={"/listedbooks"} className='btn font-semibold lg:font-bold text-xl work-sans bg-[#23BE0A] text-white '>View The List</Link>
            </div>
            <div className='lg:w-2/5'>
                <img src={BookImage} alt="" className='rounded-xl w-full' />
            </div>
        </div>
    );
};

export default Header;