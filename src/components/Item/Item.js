import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => (
  <span className={classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>
    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
    {value}
</span>);

export default Item;
