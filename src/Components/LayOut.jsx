import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './SideBar/SideBar.jsx';
import WelcomUser from './welcomUser/WelcomUser.jsx';
const Layout = () => {
  // get the information about the the current page to use it 
  const location = useLocation();
  const hideSidebar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="grid grid-cols-12 bg-tertiary ">
      {!hideSidebar && (
        <div className=" col-span-2 bg-primary px-5 pt-5">
          <Sidebar />
        </div>
      )}
      <div className={!hideSidebar ? "col-span-10" : "col-span-12"}>
        {/* content of the right side of the page */}
        <WelcomUser name={"useName"} className='inline-block' />
        <div className='bg-white mx-4 mt-2 rounded-lg pb-3'>
          <div className='block'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;