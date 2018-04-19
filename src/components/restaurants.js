import React, { Component } from 'react';
import Restaurant from './restaurant';

export default class Restaurants extends Component{
    render() {
        const restaurants   = this.props.restaurants;
        let restaurantArray = restaurants.map((restaurant)=>{
            return <Restaurant {...restaurant} key={restaurant.id}/>
        });

        return (
            <div className="restaurants">
                <div className="container">
                    <p className="restaurants__count">{this.props.restaurants.length} Restaurants</p>
                    <div className="restaurants__list">
                        {restaurantArray}
                    </div>
                </div>
            </div>
        );
    }
}