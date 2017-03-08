/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.fetchData();
  }
  /* eslint-disable no-unused-vars */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.params.username !== this.props.params.username) {
      this.fetchData();
    }
  }
  fetchData() {
    fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
    .then(response => response.json())
    .then(
      (repos) => {
        this.setState({
          repos,
        });
      },
    );
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
}

Repos.propTypes = {
  params: React.PropTypes.shape({
    username: React.PropTypes.shape,
  }).isRequired,
};


export default Repos;
