import { Search, Home, SupervisorAccount, BusinessCenter, Chat, Notifications } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/counter/UserSlice';
import { auth } from '../FirebaseConfig/Firebase';
import '../styles/Header.css';
import HeaderOption from './HeaderOption';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoff = () =>{
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">
      
      <div className="header__left">

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png" alt="LinkedIn" />

        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home"/>
        <HeaderOption Icon={SupervisorAccount} title="My network"/>
        <HeaderOption Icon={BusinessCenter} title="Jobs"/>
        <HeaderOption Icon={Chat} title="Messaging"/>
        <HeaderOption Icon={Notifications} title="Notifications"/>
        <HeaderOption avatar="url" title="me" onClick={logoff}/>
      </div>

    </div>
  )
}

export default Header