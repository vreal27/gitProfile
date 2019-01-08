import React, { Component } from 'react'
import { getProfile } from '../actions/profile'
import { connect } from 'react-redux'

class Profile extends Component {
    componentDidMount (){
        getProfile()
    }
    render() {
        return (
            <div>
                <img src={this.props.profile.avatar_url}/>
                <h1>{this.props.profile.name}</h1>
                <h2>{this.props.profile.login}</h2> 
                <ul>
                    <li>{this.props.profile.bio}</li>
                    <li>{this.props.profile.company}</li>
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