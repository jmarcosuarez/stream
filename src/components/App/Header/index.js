import React from 'react';
import Search from './Search';
import Filters from './Filters';

import styles from '../App.css';

const Header = () =>
  <header className={styles.header}>
    <p>Stream - Github User Searcher</p>
    <Search />
    <Filters />
  </header>;

export default Header;
