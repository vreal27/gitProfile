import React, { Component } from 'react'
import { getRepos } from '../actions/repos'
import { connect } from 'react-redux'
import '../styles/Repos.css'

class Repos extends Component {
    componentDidMount (){
        getRepos()
    }
    render() {
        return (
            <div>
                <ul className = "repolist">
                    {this.props.repos.map((repo, i) => (
                    <li key ={'repo' + i}>{repo.name}</li>))}
                </ul>
            </div> 
        )
    }
}
 

function mapStateToProps (appState) {
    return {
        repos : appState.repoReducer.repos
    }
}

export default connect (mapStateToProps)(Repos)