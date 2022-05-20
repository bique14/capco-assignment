import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Header, Footer } from './components';
import { News, Regions, TV, Videos } from './pages';

import './App.css';
import { classNames } from './lib';

interface IPage {
  NEWS: string;
  REGIONS: string;
  TV: string;
  VIDEOS: string;
}

export const PAGE: IPage = Object.freeze({
  NEWS: 'news',
  REGIONS: 'regions',
  TV: 'tv',
  VIDEOS: 'videos',
});

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Header />
        <div
          className={classNames([
            'mx-auto mb-20',
            'md:w-11/12',
            'lg:w-4/5 lg:mx-auto',
          ])}
        >
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/news" element={<News />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
