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
        <Route
          path="/chat/call"
          element={
            <RequireAuth>
              <CallComponent groupId={"2"} token={token} />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
