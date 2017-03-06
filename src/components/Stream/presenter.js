import React from 'react';
import styles from './Stream.css';

function Stream({ tracks = [] }) {
  return (
    <div className={styles.stream}>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
}

export default Stream;
