import React from 'react';
import userIcon from '../resources/svgs/user-icon.svg';

export default function User(props){
    return (
        <div className="user">
            <img className="user__img" src={userIcon} alt="user icon"/>
            <p className="user__name">{props.userName}</p>
        </div>
    );
}