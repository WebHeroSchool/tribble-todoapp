import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({ items, id, onClickDone, onClickDelete }) => (<ul className={styles.list}>
    {items.map(item => <li key={item.id}>
      <Item
        value={item.value}
        isDone={item.isDone}
        id={item.id}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
    </li>)}
</ul>);

ItemList.propTypes = {
  items: PropTypes.array,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;
