import React from 'react';
import styles from '../Stream.css';

const GithubRepo = ({ repo }) =>
  <div>
    <a href={repo.html_url} rel="noopener noreferrer" target="_blank">
      <div className={styles.repos}>
        <div className="name">
          {repo.name}
        </div>
        <div className="text">
          {repo.description}
        </div>
      </div>
    </a>
  </div>;

export default GithubRepo;
