import React, { Component } from 'react';
import Location from './location';
import Restaurants from './restaurants';
import restaurantsData from '../resources/data/restaurants.json';

export default class Page extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: restaurantsData
        };
    }

    changeLocation = (e) => {
        /* change location code here */
        console.log('change location from ' + this.state.data.neighborhood);

        /* setState({
            data: newLocationData
        } */
    }

    render(){
        return (
            <div>
                <Location 
                    location= {this.state.data.neighborhood} 
                    changeLocation= {this.changeLocation}
                />
                <Restaurants restaurants= {this.state.data.restaurants}/>
            </div>
        );
    }
}