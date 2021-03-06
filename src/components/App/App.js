import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <nav className={styles.menu}>
        <Link to='/'>
          <button className={styles.menu__item}>
            About
          </button>
        </Link>
        <Link to='/todo'>
          <button className={styles.menu__item}>
            Todo
          </button>
        </Link>
        <Link to='/contacts'>
          <button className={styles.menu__item}>
            Contacts
          </button>
        </Link>
      </nav>
      <div className={styles.container}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </div>
  </Router>
);

export default App;
