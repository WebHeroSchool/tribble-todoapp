import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const styles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Raleway',
    color: 'rgb(166,75,0)',
    fontSize: '12px',
      '&:hover': {
        color: 'rgb(166,75,0)',
        backgroundColor: 'rgb(255,241,230)'
      }
    },
  groupedTextHorizontal: {
    '&:not(:last-child)': {
      borderColor: 'rgb(166,75,0)'
    },
  }
});

export default function FooterFilters() {
  const classes = styles();

  return (
    <div>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group" className={classes.groupedTextHorizontal}>
        <Button className={classnames(classes.root, classes.groupedTextHorizontal)}>All</Button>
        <Button className={classnames(classes.root, classes.groupedTextHorizontal)}>Active</Button>
        <Button className={classes.root}>Completed</Button>
      </ButtonGroup>
    </div>
  );
}
