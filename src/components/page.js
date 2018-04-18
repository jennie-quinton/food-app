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

    render(){
        return (
            <div>
                <Location location={this.state.data.neighborhood}/>
                <Restaurants />
            </div>
        );
    }
}