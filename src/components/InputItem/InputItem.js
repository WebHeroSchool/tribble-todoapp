import React from 'react';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false,
    errorInfo: null
  }

  onButtonClick = () => {
    this.setState({
      inputValue: '',
      error: false,
      errorInfo: ''
    });

    if (this.state.inputValue) {
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({
        error: true,
        errorInfo: 'Please, write your task.'
      });
    }
  }

  render () {
    const { onClickAdd } = this.props;

    return (
      <div>
        <div className={styles.wrap}>
          <input
            type="text" required
            value={this.state.inputValue}
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            onChange={event => this.setState({ inputValue: event.target.value.toUpperCase() })}
            className={this.state.error ? styles.input__error : styles.input}
          />
          <span className={styles.bar}></span>
          <label className={this.state.error ? styles.label__error : styles.label}>What needs to be done?</label>
        </div>
        <button
          className={styles.button}
          onClick={this.onButtonClick}
        >
          <span className={styles.button__text}>Add task</span>
        </button>
      </div>
    )
  }
}

export default InputItem;
