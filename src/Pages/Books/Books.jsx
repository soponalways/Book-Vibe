import React from 'react';
import Book from '../../Components/Book/Book';

const Books = ({ books }) => {
    // console.log(books);
    return (
        <div className='mb-24'>
            <h2 className='font-bold text-[#131313] playfair text-3xl lg:text-5xl text-center mb-9'>Books</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;