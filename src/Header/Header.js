import React from 'react'
import './Header.css'
import { useDispatch} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { logout} from '../features/userSlice';
import { auth } from '../firebase';
import AcUnitIcon from '@material-ui/icons/AcUnit';

function Header() {
    const dispatch = useDispatch();

    const logoutApp = () => {
        
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header" >

            <div className="header__left">
            <img
          src="data:image/png;base64,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"
          alt="Linkedin Logo"
        />
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SuperVisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} onClick={logoutApp}
                    title="me" />
            </div>
        </div>
    )
}

export default Header
