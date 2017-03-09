/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as actions from '../../../actions';

import styles from '../Stream.css';

class Profile extends React.Component {
  componentDidMount() {
    this.props.onProfileFetch(this.props.params.username);
  }
  componentDidUpdate(prevProps, prevState) {
    // only update if the user has changed
    if (prevProps.params.username !== this.props.params.username) {
      this.props.onProfileFetch(this.props.params.username);
    }
  }
  /*
  This method is used as a mapping function. To be factored out to its own component.
  */
  renderStat(stat) {
    return (
      <li key={stat.name} className="user-info__stat">
        <Link to={stat.url}>
          <p className="userInfo_value">{stat.value}</p>
          <p className="userInfo_name">{stat.name}</p>
        </Link>
      </li>
    );
  }

  render() {
    const { user } = this.props;
    // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    if (!this.props.user) {
      return (<div className="user-page">LOADING...</div>);
    }

    // Gather up some number stats about the user, to be used in a map below
    const stats = [
      {
        name: 'Public Repos',
        value: user.public_repos,
        url: `/users/${this.props.params.username}/repos`,
      },
      {
        name: 'Followers',
        value: user.followers,
        url: `/users/${this.props.params.username}/followers`,
      },
      {
        name: 'Following',
        value: user.following,
        url: `/users/${this.props.params.username}/following`,
      },
    ];

    return (
      <div>
        <div className={styles.userPage}>
          <div className="image">
            <img className="userInfo_avatar" src={user.avatar_url} alt={`${user.login} avatar`} />
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
          {
            React.Children.map(this.props.children, child => React.cloneElement(
                child,
                { ...this.props },
              ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.user;
  return {
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onProfileFetch: bindActionCreators(actions.fetchUser, dispatch),
  };
}

Profile.propTypes = {
  children: React.PropTypes.node.isRequired,
  onProfileFetch: React.PropTypes.func.isRequired,
  params: React.PropTypes.shape({
    username: React.PropTypes.shape,
  }).isRequired,
  user: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
