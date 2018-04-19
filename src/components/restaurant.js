import React, { Component } from 'react';

export default class Restaurant extends Component{
    render() {
        let price = '';
        for(var i=0 ; i< this.props.price; i++){
            price+= '£'
        }

        return (
            <a className="restaurant" href={this.props.url}>
                <img className="restaurant__image" src={this.props.image} alt={`food from ${this.props.name}`}/>
                <h2 className="restaurant__name">{this.props.name}</h2>
                <p className="restaurant__tags">
                    {this.props.tags.map(tag=><span key={tag}>{tag}<i className="restaurant__tags--seperator"/></span>)}
                    {price}
                </p>
            </a>
        );
    }
}