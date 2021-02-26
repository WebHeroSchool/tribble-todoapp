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
      <h1 className={styles.title}>your todos</h1>
      <InputItem />
      <ItemList items={items}/>
      <Footer count={3}/>
    </div>
)};

export default App;
