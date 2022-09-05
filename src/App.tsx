import React from 'react';

//Components
import Footer from './components/Footer';
import Hearder from './components/Hearder';

//CSS
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
        <Hearder/>
        <main className={styles.main}>
          <h1>Conteúdo...</h1>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
