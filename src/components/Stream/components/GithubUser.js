import React from 'react';
import { Link } from 'react-router';
import styles from '../Stream.css';

const GithubUser = ({ follower }) =>
  <div>
    <Link to={follower.followers_url}>
      <div className={styles.followers}>
        <div className="image">
          <img src={follower.avatar_url} alt="The follower avatar" />
        </div>
        <div className="text">
          {follower.login}
        </div>
      </div>
    </Link>
  </div>;

export default GithubUser;
