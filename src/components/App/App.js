import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const items = [
    {
      value: 'Пройти новый урок',
      isDone: true
    },
    {
      value: 'Сделать зарядку',
      isDone: false
    },
    {
      value: 'Написать приложение',
      isDone: false
    }
  ];

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Y
        <span className={styles.letter}>O</span>
      UR T
        <span className={styles.letter}>O</span>
      D
        <span className={styles.letter}>O</span>
      S</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3}/>
    </div>
)};

export default App;
