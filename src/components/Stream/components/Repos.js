import React from 'react';
import { Link } from 'react-router';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    fetchData() {
      fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response => response.json())
        .then(
            repos => {
                this.setState({
                    repos: repos
                });
            }
        );
    }
    componentDidMount() {
      this.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.params.username !== this.props.params.username) {
        this.fetchData(); 
      }
    }
    render() {
        // If the state doesn't have a Repos key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
        if (!this.state.repos) {
            return (<div className="reposPage">LOADING...</div>);
        }

        return (
          <div className="reposPage">
            <h2>Repos of {this.props.params.username}</h2>
            <ul>
                {this.state.repos.map((repo, key) => <GithubRepo key={key} repo={repo} />)}
            </ul>
          </div>
        );
    }
};

export default Repos;
