import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Page from './components/page';

class Body extends Component{
    constructor(props){
        super(props);

        this.state = {
            userName: 'Jane Smith'
        }
    }
    render(){
        return (
            <div>
                <Header userName={this.state.userName}/>
                <Page />
            </div>
        );
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));