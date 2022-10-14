import React from 'react';
import styles from './Card.module.css';

export function CardMedia({ imageURL }) {
  return <img src={imageURL} />;
}

export function CardHeader({ title, subTitle = '' }) {
  return (
    <header className={styles.cardHeader}>
      <h2>{title}</h2>
      {subTitle ? <p>{subTitle}</p> : null}
    </header>
  );
}

export function CardMain({ children }) {
  return <main className={styles.cardBody}>{children}</main>;
}

export function CardFooter({ children }) {
  return <footer className={styles.cardFooter}>{children}</footer>;
}

export function Card({ children, ...props }) {
  return (
    <div {...props} className={styles.card}>
      {children}
    </div>
  );
}
