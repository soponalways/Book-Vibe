import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const [books , setBooks ] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json").then(res => res.json()).then(data => setBooks(data))
    } , [])
    // const booksData = useLoaderData(); 
    // console.log(booksData);
    return (
        <div>
            <Header></Header>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;