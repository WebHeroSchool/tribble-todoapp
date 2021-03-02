import React from 'react';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FooterFilters from '../FooterFilters/FooterFilters';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Footer.module.css';

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: '6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Raleway',
    color: 'rgb(166,75,0)',
    fontSize: 12,
    border: 'none',
      '&:hover': {
        border: 'none'
      }
  }
});

 const Footer = ({ count }) => {
  const classes = useStyles();

  return (
    <div className={styles.footer}>
      <span className={styles.counter}>{ count } ITEMS LEFT</span>
      <FooterFilters />
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<DeleteIcon />}
        className={classes.root}
      >
        Delete all
      </Button>
    </div>
  )
};

Footer.defaultProps = {
    count: 0
};

export default Footer;
