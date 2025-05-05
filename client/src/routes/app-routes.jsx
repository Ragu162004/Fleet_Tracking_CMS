import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeLayout } from '../layouts';
import { Home, Track, ContactUs, About } from './../pages/';
import NotFound from '../pages/common/not-found';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/track" element={<Track />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
