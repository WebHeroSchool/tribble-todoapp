import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ todoItem }) => (<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={'Сделать зарядку'}/></li>
  <li><Item todoItem={'Написать приложение'}/></li>
</ul>);

export default ItemList;
