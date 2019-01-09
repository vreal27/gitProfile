import React, { Component } from 'react'
import { getProfile } from '../actions/profile'
import { connect } from 'react-redux'
import '../styles/Profile.css'

class Profile extends Component {
    componentDidMount (){
        getProfile()
    }
    render() {
        return (
            <div className="biobox">
                <img src={this.props.profile.avatar_url}/>
                <h1>{this.props.profile.name}</h1>
                <h2>{this.props.profile.login}</h2> 
                <ul className = "bioinfo">
                    <li>Bio: {this.props.profile.bio}</li>
                    <li>Company: {this.props.profile.company}</li>
                </ul>
                
            </div>
        )
    }
}
 

function mapStateToProps (appState) {
    return {
        profile : appState.profileReducer.profile
    }
}

export default connect (mapStateToProps)(Profile)