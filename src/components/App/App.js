import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const items = [
    { value: 'Пройти новый урок' },
    { value: 'Сделать зарядку' },
    { value: 'Написать приложение' }
  ];

  return (
    <div className="wrap">
      <h1 className="wrap__title">your todos</h1>
      <InputItem />
      <ItemList items={items}/>
      <Footer count={3}/>
    </div>
)};

export default App;
