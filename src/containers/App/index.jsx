import PeoplePage from '../PeoplePage';

import styles from './App.module.css'

const App = () => {
  return (
    <>
      <h1 className={styles.header}>
        Hello!
      </h1>
      <PeoplePage />
    </>
  );
}

export default App;
