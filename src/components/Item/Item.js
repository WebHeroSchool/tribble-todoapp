import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Item.module.css';

const itemStyle = makeStyles({
  root: {
      color: 'rgb(166,74,0)',
      '&$checked': {
        color: 'rgb(166,74,0)',
      },
  },
  checked: {
    color: 'rgb(166,74,0)'
  },
  label: {
    color: 'rgb(29,116,113)',
  }
})

export default function Item({ value, isDone, id, onClickDone, onClickDelete }) {
  const classes = itemStyle();

  return (
    <span className={classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
    }>
      <span className={styles.task}>
        <Checkbox
          checked={isDone}
          className={
            classnames(classes.root, classes.checked)
          }
          onClick={() => onClickDone(id)}
        />
        {value}
        </span>
      <IconButton
        aria-label="delete"
        onClick={() => onClickDelete(id)}
      >
        <DeleteIcon
          fontSize="small"
          className={classes.label}
        />
      </IconButton>
    </span>
  )
};
