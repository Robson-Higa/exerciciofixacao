import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>Sua Foto!</p>
      </header>

      <p className={styles.p}>Uma foto para você!</p>
      <img src='https://picsum.photos/1920/1281' alt="Imagem aleatória" />
    </div>
  );
}

export default App;
