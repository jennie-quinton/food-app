import React from 'react';

export default function Location(props){
    return (
        <div className="hero">
            <div className="container">
                <div className="hero--left">
                    <p className="hero__text">Location</p>
                    <h1 className="hero__header font__stratos">{props.location}</h1>
                </div>
                <div className="hero--right">
                <button className="hero__button" onClick={props.changeLocation}>Change location</button>
                </div>
            </div>
        </div>
    );
}