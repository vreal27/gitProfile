import React, { Component } from 'react'
import Profile from './Profile'
import Repos from './Repos'

import '../styles/Home.css'

class Home extends Component {
    render(){
        return (
            <div className="container">
                <ul className = "navbar">
                    <li><input type="text" name="search" placeholder="Search or jump to..." /></li>
                    <li>Pull requests</li>
                    <li>Issues</li>
                    <li>Marketplace</li>
                    <li>Explore</li>
                </ul>
                <div className="homeinfo">
                    <Profile/>
                    <Repos />
                </div>
            </div>
        )
    }
}

export default Home