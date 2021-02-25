import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';



const App = () => {
  const items = [
    { value: 'Пройти новый урок' },
    { value: 'Сделать зарядку' },
    { value: 'Написать приложение' }
  ];

  return (
    <div>
      <h1>your todos</h1>
      <InputItem />
      <ItemList items={items}/>
      <Footer count={3}/>
    </div>
)};

export default App;
