import React, { useState } from 'react';
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import FollowedPage from './FollowedPage';
import Pages from './Pages.jsx';
import MainLayout from './MainLayout.jsx';
import NewsPage from "./NewsPage.jsx";
import CommunityPage from "./CommunityPage.jsx";
import inPages from "./inPages.jsx";
import { CommunityProvider } from './contexts/CommunityContext';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Header currentPath={location.pathname} />
      <Routes>
        
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainContent />} />
            <Route path="/followed" element={<FollowedPage />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/communities" element={<CommunityPage />} />
            <Route path="/page/:slug" element={<inPages />} />
          </Route>

          <Route path="/page/:slug" element={<GamePage />}>
            <Route path="main" element={<GameMain />} />
            <Route path="plot" element={<GamePlot />} />
            <Route path="info" element={<GameInfo />} />
            <Route path="hardware" element={<GameHardware />} />
            <Route path="community" element={<GameCommunity />} />
          </Route>
      </Routes>
    </>
  );
};

const App = () => (
  <BrowserRouter>
  <CommunityProvider>
    <AppContent />
  </CommunityProvider>
  </BrowserRouter>
);


export default App;
