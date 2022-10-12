import React from 'react';
import styles from './Card.module.css';

export function Card({ children, ...props }) {
  return (
    <div {...props} className={styles.card}>
      {children}
    </div>
  );
}
