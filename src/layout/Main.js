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
            <div className="md:mx-20">
                <div className="grid grid-cols-12">
                    <div className="col-span-2 bg-blue-200">
                        <LeftSideNav />
                    </div>
                    <div className="col-span-7 bg-red-200">
                        <Outlet />
                    </div>
                    <div className="col-span-3 bg-green-200">
                        <RightSideNav />
                    </div>
                </div>
            </div>
            <Footer /
        </>
    );
};

export default Main;
