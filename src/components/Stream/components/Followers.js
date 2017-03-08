/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import GithubUser from './GithubUser';

class Followers extends Component {
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
    fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
    .then(response => response.json())
    .then(
      (followers) => {
        this.setState({
          followers,
        });
      },
    );
  }
  render() {
      // If the state doesn't have a Followers key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    if (!this.state.followers) {
      return (<div className="Followers-page">LOADING...</div>);
    }

    return (
      <div className="followers-page">
        <h2>Followers of {this.props.params.username}</h2>
        <ul>
          {this.state.followers.map((follower, key) => <GithubUser key={key} follower={follower} />)}
        </ul>
      </div>
    );
  }
}

Followers.propTypes = {
  params: React.PropTypes.shape({
    username: React.PropTypes.shape,
  }).isRequired,
};

export default Followers;
