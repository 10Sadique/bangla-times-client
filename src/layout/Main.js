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
                <div className="grid lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-2 lg:order-1 order-2">
                        <LeftSideNav />
                    </div>
                    <div className="lg:col-span-7 lg:order-2 order-1">
                        <Outlet />
                    </div>
                    <div className="lg:col-span-3 order-3">
                        <RightSideNav />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;
