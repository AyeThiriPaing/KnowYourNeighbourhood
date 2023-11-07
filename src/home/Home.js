import React, { Component } from 'react';
import './Home.css';
import store from '../img/kyn.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title"> Welcome from Know-Your-Neighbourhood!!!</h1>
                    <div className="container">
                        
                        <img src={store} alt="KYN"></img>
                    </div>
            </div>
        )
    }
}

export default Home;