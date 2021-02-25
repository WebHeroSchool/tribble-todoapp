import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Пройти новый урок';

const App = () => (<div>
  <h1>your todos</h1>
  <InputItem />
  <ItemList todoItem={todoItem}/>
  <Footer count={3}/>
</div>);

export default App;
