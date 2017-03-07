import React from 'react';
import { Link } from 'react-router';
import GithubUser from './GithubUser';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    fetchData() {
      fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
        .then(response => response.json())
        .then(
            followers => {
                this.setState({
                    followers: followers
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
};

export default Followers;
