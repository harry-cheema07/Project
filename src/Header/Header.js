import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import {AuthContext} from '../Auth';
import {auth} from "../base";
import { Navigate } from 'react-router';
import logo from '../images/icon/icon.png';
function Header(){
    const { currentUser } = useContext(AuthContext);
    const logout = ()=>{
        auth.signOut();
        return <Navigate to="/" />;
    }
    return(
        <div>
        {currentUser?
        <div className='header'>
            <div className='logo'>
                <img width="40" src={logo}/>
                <span style={{'marginLeft':'5px'}}>Crypto Land</span> 
            </div>
            <div className='links'>
                <Link to='/'>Dashboard</Link>
                <Link to='/login' onClick={logout}>Logout</Link>
            </div>
        </div>
        :
        <div className='header'>
            <div className='logo'>
                <img width="40" src={logo}/>
                <span style={{'marginLeft':'5px'}}>Header Go Here</span> 
            </div>
            <div className='links'>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </div>
        </div> }
        </div>
    )
}

export default Header;