import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: 0
  }

  onButtonClick = () => {
    this.setState({
      inputValue: '',
      error: 0
    });

    if (this.state.inputValue) {
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({
        error: 1
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
};

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired
};

export default InputItem;
