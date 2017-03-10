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
    this.props.onFollowerFetch(this.props.params.username);
  }
/* eslint-disable no-unused-vars */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.params.username !== this.props.params.username) {
      this.props.onFollowerFetch(this.props.params.username);
    }
  }

  render() {
      // If no Followers, fetch didn't complete yet. Render a LOADING indicator.
    if (!this.props.followers) {
      return (<div className="Followers-page">LOADING...</div>);
    }
    const { followers } = this.props;
    return (
      <div className="followers-page">
        <h2>Followers of {this.props.params.username}</h2>
        <ul>
          {followers.map((follower, key) => <GithubUser key={key} follower={follower} />)}
        </ul>
      </div>
    );
  }
}

Followers.propTypes = {
  params: React.PropTypes.func.isRequired,
  onFollowerFetch: React.PropTypes.func.isRequired,
  followers: React.PropTypes.node.isRequired,
};

export default Followers;
