import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';
import LeftSideNav from '../pages/Shared/LeftSideNav';
import RightSideNav from '../pages/Shared/RightSideNav';

const Main = () => {
    return (
        <>
            <Header />
            <div className="md:mx-12 lg:mx-20">
                <div className="grid gap-5 lg:grid-cols-12">
                    <div className="order-2 hidden md:block lg:col-span-2 lg:order-1">
                        <LeftSideNav />
                    </div>
                    <div className="order-1 lg:col-span-7 lg:order-2">
                        <Outlet />
                    </div>
                    <div className="order-3 lg:col-span-3">
                        <RightSideNav />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;
