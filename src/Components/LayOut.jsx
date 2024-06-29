import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './SideBar/SideBar.jsx';
import WelcomUser from './welcomUser/WelcomUser.jsx';
import {  fetchUser , } from "../../rtk/Slices/userSlice";
import { useEffect, } from "react";
import { useSelector, useDispatch } from "react-redux";


const Layout = () => {
  // get the information about the the current page to use it 
  const location = useLocation();
  const hideSidebar = location.pathname === '/login' || location.pathname === '/register';
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser()); 
  },[dispatch]);
  const userInfo = useSelector((state) => state.user.user); 


  return (
    <div className="grid grid-cols-12 bg-tertiary ">
      {!hideSidebar && (
        <div className=" col-span-2 bg-primary px-5 pt-5">
          <Sidebar />
        </div>
      )}
      <div className={!hideSidebar ? "col-span-10" : "col-span-12"}>
        {/* content of the right side of the page */}
        <WelcomUser name={userInfo?userInfo.name:"User Name"} className='inline-block' />
        <div className='bg-white mx-4 mt-2 mb-4 rounded-lg pb-3' style={{minHeight: "90vh"}}>
          <div className='block'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;