import './App.css'
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import MyProjects from './Pages/MyProjects'
import ToDo from './Pages/ToDo'
import Account from './Pages/Account';
import SettingLayOut from './Components/settings/SettingLayOut';
import Notification from './Pages/Notification';
import Cv from './Pages/Cv';
import Calendar from './Pages/Calendar'
import Layout from './Components/LayOut';
import CreatePoject from './Pages/CreatePoject';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/createproject" element={<CreatePoject />} />
          {/* setting rout */}
          <Route path="/setting" element={<SettingLayOut />} >
            <Route path="/setting/account" element={<Account />} />
            <Route path="/setting/notification" element={<Notification />} />
            <Route path="/setting/cv" element={<Cv />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
