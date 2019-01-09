import React, { Component } from 'react'
import Profile from './Profile'
import Repos from './Repos'
import 'font-awesome/css/font-awesome.css'

import '../styles/Home.css'

class Home extends Component {
    render(){
        return (
            <div className="container">
                <ul className = "navbar">
                    <li><i class="fa fa-github"></i></li>
                    <li><input type="text" name="search" placeholder="Search or jump to..." /></li>
                    <li className = "links">Pull requests</li>
                    <li className = "links">Issues</li>
                    <li className = "links">Marketplace</li>
                    <li className = "links">Explore</li>
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