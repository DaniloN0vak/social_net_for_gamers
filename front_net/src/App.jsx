import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FollowedPage from './FollowedPage';
import Pages from './Pages.jsx';
import MainLayout from './MainLayout.jsx';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/followed" element={<FollowedPage />} />
          <Route path="/pages" element={<Pages />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
