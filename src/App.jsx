import React from 'react';
import { Card } from './Card';
import styles from './App.module.css';

export class App extends React.Component {
  render() {
    return (
      <>
        <header className={styles.header}>
          <h1>Hello World</h1>
        </header>
        <main>
          <div className={styles.grid}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((d) => (
              <Card>This is card #{d}</Card>
            ))}
          </div>
        </main>
        <footer>Footer</footer>
      </>
    );
  }
}
