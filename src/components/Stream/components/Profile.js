import React from 'react';
import { Link } from 'react-router';
import styles from '../Stream.css';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    fetchData() {
      fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
              // How can we use `this` inside a callback without binding it??
              // Make sure you understand this fundamental difference with arrow functions!!!
              this.setState({
                  user: user
              });
            }
        );
    }
    componentDidMount() {
        this.fetchData(); 
    }
    componentDidUpdate(prevProps, prevState) {
      // only update if the user has changed
      // console.log(prevProps, prevState);
      // if (prevProps.params.username !== this.props.username) {
        this.fetchData(); 
      // }
    }
    /*
    This method is used as a mapping function. Eventually this could be factored out to its own component.
    */
    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }

    render() {
        // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
        if (!this.state.user) {
            return (<div className="user-page">LOADING...</div>);
        }

        // If we get to this part of `render`, then the user is loaded
        const user = this.state.user;

        // Gather up some number stats about the user, to be used in a map below
        const stats = [
            {
                name: 'Public Repos',
                value: user.public_repos,
                url: `/users/${this.props.params.username}/repos`
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/users/${this.props.params.username}/followers`
            },
            {
                name: 'Following',
                value: user.following,
                url: `/users/${this.props.params.username}/following`
            }
        ];

        // Look in index.css for the styles that make this look like it does
        return (
          <div>
            <div className={styles.userPage}>
              <div className="image">
                <img className="userInfo_avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
              </div>
              <div className="text">
                <h2 className="userInfo_title">{user.login} ({user.name})</h2>
                <p className="userInfo_bio">{user.bio}</p>
                <ul className="userInfo_stats">
                  {stats.map(this.renderStat)}
                </ul>
              </div>
            </div>
            <div className={styles.followersPage}>
             {this.props.children}
            </div>
          </div>
        );
    }
};

export default User;
