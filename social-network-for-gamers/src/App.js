import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Authorization from "./authorization/blocks/main/Authorization";
import Dashboard from "./authorization/blocks/main/Dashboard";
import Chat from "./chat/blocks/chat-items/main/components/Chat";
import CallComponent from './chat/blocks/shared/call-component/CallComponent';

function RequireAuth({ children }) {
  const token = sessionStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/authorization" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  const token = sessionStorage.getItem('token');
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/main-page" element={<MainContent />} />
          <Route path="/main-page/followed" element={<FollowedPage />} />
          <Route path="/main-page/pages" element={<Pages />} />
          <Route path="/main-page/news" element={<NewsPage />} />
          <Route path="/main-page/saved" element={<SavedPostsPage />} />
          <Route path="/main-page/communities" element={<CommunityPage />} />
          <Route path="/main-page/page/:slug" element={<GamePage />}>
            <Route index element={<GameMain />} />
            <Route path="/main-page/plot" element={<GamePlot />} />
            <Route path="/main-page/info" element={<GameInfo />} />
            <Route path="/main-page/hardware" element={<GameHardware />} />
            <Route path="/main-page/community" element={<GameCommunity />} />
          </Route>
        </Route>
        <Route path="/authorization/reset-password/:token" element={<Authorization isResetMode={true} />} />
        <Route path="/authorization/*" element={<Authorization />} />
        <Route path="/*" element={<Authorization />} />
        <Route
          path="/authorization/after-service-authorization"
          element={
            <Dashboard />
          }
        />
        <Route
          path="/chat/:chatId"
          element={
            <RequireAuth>
              <Chat />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
