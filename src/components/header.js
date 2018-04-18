import React from 'react';
import logo from '../resources/svgs/logo-horizontal.svg';
import User from './user';

export default function Header(props){
    return (
        <div className="header">
            <div className="header--left">
                <img className="header__image" src={logo} alt="Deliveroo Logo"/>
            </div>
            <div className="header--right">
                <User userName={props.userName}/>
            </div>
        </div>
    );
}