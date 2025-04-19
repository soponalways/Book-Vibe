
// import { Star } from 'lucide-react';
import React from 'react';

const Book = ({book}) => {
    const { author, bookName, category, image, rating, tags} = book; 
    return (
        <div className="card bg-base-100 w-fit mx-auto shadow-sm p-6 space-y-6 border-1 border-[#131313]/15">
            <figure className='bg-[#F3F3F3] px-24 py-8 rounded-xl lg:rounded-2xl'>
                <img
                    className='w-36 h-44'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="">
                <div className='flex gap-3'>
                    {
                        tags.map((tag, i) => <span key={i} className='text-[#23BE0A] font-medium text-sm lg:text-base py-1 lg:py-2 px-2 lg:px-4 rounded-2xl lg:rounded-4xl bg-[#23BE0A]/5 '>{tag}</span>)
                    }
                </div>
                <div>
                    <h1 className='font-medium lg:font-bold playfair text-lg md:text-xl lg:text-2xl text-[#131313] '>{bookName}</h1>
                    <h2 className='text-sm lg:text-base text-[#131313]/80 font-medium work-sans'>By: {author}</h2>
                </div>
                <div className='border-t-2 border-dashed my-5 border-[#131313]/15'></div>
                <div className='flex justify-between'>
                    <h2 className='text-sm lg:text-base work-sans font-medium text-[#131313] '>{category}</h2>
                    <div className='text-sm lg:text-base work-sans font-medium text-[#131313] '>
                        <h2>{rating}</h2>
                        {/* <Star></Star> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;