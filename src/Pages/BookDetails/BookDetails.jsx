import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
    // const alldata = useLoaderData();
    let bookId = useParams();
    const [alldata, setAllData] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json").then(res => res.json()).then(data => setAllData(data))
    }, [bookId.bookId]); 
    // console.log(alldata);
    // let bookId = useParams();
    // console.log(bookId);
    bookId = parseInt(bookId.bookId);
    // console.log(bookId);
    // console.log(alldata);
    const singleBook = alldata.find(data => data.bookId === bookId);
    console.log(singleBook);
    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook || {};

    const newTags = tags || []; 
    return (
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 my-12 ">
            <figure className='w-1/2 p-14 md:p-16 lg:p-20 bg-[#131313]/5 rounded-xl lg:rounded-2xl'>
                <img
                    className='w-full rounded-xl'
                    // max-w-[320px] md:w-[380px] lg:w-[425px]
                    src={image}
                    alt={`this is a book photo of ${bookName}`} />
            </figure>
            <div className=" w-1/2">
                {/* Book Title and author name  */}
                <div>
                    <h1 className='font-semibold lg:font-bold text-3xl lg:text-4xl playfair'>{bookName}</h1>
                    <h2 className='font-medium text-base md:text-lg lg:text-xl text-[#131313]/80 work-sans'>By: {author}</h2>
                </div>
                <div className="divider"></div>
                <h2 className='work-sans font-medium text-base lg:text-xl text-[#131313]/80 '>{category}</h2>
                <div className="divider"></div>
                <p className='text-sm lg:text-base work-sans mb-7'><span className='font-bold'>review: </span><span className='font-normal text-[#131313]/70 '>{review}</span></p>
                <div className='flex gap-3 md:gap-4 items-center'>
                    <span className='work-sans font-bold text-sm md:text-base'>Tag</span>
                    <div className='flex gap-2 md:gap-3'>
                        {
                            newTags.map((tag, i) => <span key={i} className='work-sans font-medium text-sm md:text-base text-[#23BE0A] bg-[#23BE0A]/5 py-1 md:py-2 px-2 md:px-4 rounded-2xl lg:rounded-4xl '>#{tag} </span>)
                        }
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex flex-col gap-2 md:gap-3 mb-6 md:mb-7 lg:mb-8'>
                    <div className='flex gap-14'>
                        <p className='w-[150px] text-sm md:text-base font-medium md:font-semibold work-sans text-[#131313]/70 '>Number of Pages: </p>
                        <p className='text-sm md:text-base font-medium md:font-semibold work-sans'>{totalPages}</p>
                    </div>
                    <div className='flex gap-14'>
                        <p className='w-[150px] text-sm md:text-base font-medium md:font-semibold work-sans text-[#131313]/70 '>Publisher: </p>
                        <p className='text-sm md:text-base font-medium md:font-semibold work-sans'>{publisher} </p>
                    </div>
                    <div className='flex gap-14'>
                        <p className='w-[150px] text-sm md:text-base font-medium md:font-semibold work-sans text-[#131313]/70 '>Year of Publishing: </p>
                        <p className='text-sm md:text-base font-medium md:font-semibold work-sans'>{yearOfPublishing}</p>
                    </div>
                    <div className='flex gap-14'>
                        <p className='w-[150px] text-sm md:text-base font-medium md:font-semibold work-sans text-[#131313]/70 '>Rating: </p>
                        <p className='text-sm md:text-base font-medium md:font-semibold work-sans'>{rating}</p>
                    </div>
                </div>
                <div className='space-x-3  md:space-x-4'>
                    <button className='text-sm md:text-base lg:text-lg font-semibold work-sans text-[#131313] 
                    border border-[#131313]/30 rounded-md md:rounded-lg cursor-pointer py-3 md:py-4 px-5 md:px-6 lg:px-7
                    hover:border-[#50B1C9] hover:bg-[#50B1C9] hover:text-white duration-500
                    '>Read</button>
                    <button className='text-sm md:text-base lg:text-lg font-semibold work-sans text-[#131313] 
                    border border-[#131313]/30 rounded-md md:rounded-lg cursor-pointer py-3 md:py-4 px-5 md:px-6 lg:px-7
                    hover:border-[#50B1C9] hover:bg-[#50B1C9] hover:text-white duration-500
                    '>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;