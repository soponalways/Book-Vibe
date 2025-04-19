import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-[1170px] mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;