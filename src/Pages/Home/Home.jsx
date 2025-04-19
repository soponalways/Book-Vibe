import React from 'react';
import Header from '../../Components/Header/Header';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData(); 
    // console.log(booksData);
    return (
        <div>
            <Header></Header>
            <Books books={booksData}></Books>
        </div>
    );
};

export default Home;