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

    return (
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 my-12 ">
            <figure className='w-1/2 p-14 md:p-16 lg:p-20 bg-[#131313]/5 rounded-xl lg:rounded-2xl'>
                <img
                    className='w-full rounded-xl'
                    // max-w-[320px] md:w-[380px] lg:w-[425px]
                    src={image}
                    alt="Movie" />
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
                <p className='text-sm lg:text-base work-sans'><span className='font-bold'>review: </span><span className='font-normal text-[#131313]/70 '>{review}</span></p>
            </div>
        </div>
    );
};

export default BookDetails;