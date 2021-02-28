import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styles from './InputItem.module.css';

const inputStyles = makeStyles({
  root: {
    '& .MuiFormLabel-root': {
      color: 'rgb(29,116,113)',
      fontFamily: 'Raleway',
    },
    '& .MuiInputLabel-root': {
      color: 'rgb(29,116,113)',
      fontFamily: 'Raleway',
    },
    '& .MuiInput-underline:before': {
      borderColor: 'rgb(0,101,97)'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderColor: 'rgb(0,101,97)'
    },
    '& .MuiInput-underline:after': {
      borderColor: 'rgb(0,101,97)',
    },
    '& .MuiInput-underline:after': {
      borderColor: 'rgb(0,101,97)',
    }
  }
})

export default function InputItem () {
  const classes = inputStyles();

  return (
    <div>
      <TextField
        className={classes.root}
        label="What needs to be done?"
        id="standard-size-small"
        size="small"
        fullWidth
      />
    </div>
  )
};
