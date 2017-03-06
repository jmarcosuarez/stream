import React from 'react';
import { Link } from 'react-router';

const GithubUser = ({ follower }) =>
  <div>
    <Link to={follower.followers_url}>
      <img src={follower.avatar_url}/>
      {follower.login}
    </Link>
  </div>;

export default GithubUser;
