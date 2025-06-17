import Sidebar from './LeftSidebar.jsx';
import RightSidebar from './RightSidebar.jsx';
import "./Sidebar.css"
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <main style={{ flex: 1 }}>
      <Outlet />
    </main>
    <RightSidebar />
    </div>
);

export default MainLayout;