import React from 'react';
import styles from './Stream.css';

function Stream() {
  return (
    <div className={styles.stream}>
      <div className="image">
        <img src="blank-profile-picture.png" alt="Avatar placeholder" className="img-responsive" />
      </div>
      <div className="text">
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default Stream;
