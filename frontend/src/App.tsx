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
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="h-full">
      <BrowserRouter>
        <Header _onChange={onSearchQueryChange} />
        <div
          className={classNames([
            'content',
            'mx-auto mb-20',
            'md:w-11/12',
            'lg:w-4/5 lg:mx-auto',
          ])}
        >
          <Routes>
            <Route path="/" element={<News searchQuery={searchQuery} />} />
            <Route path="/news" element={<News searchQuery={searchQuery} />} />
            <Route
              path="/regions"
              element={<Regions searchQuery={searchQuery} />}
            />
            <Route path="/tv" element={<TV searchQuery={searchQuery} />} />
            <Route
              path="/videos"
              element={<Videos searchQuery={searchQuery} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
