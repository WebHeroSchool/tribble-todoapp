import logo from './logo.svg';
import './App.css';

const item = 'some item';
const catsAreNice = true;
const catsAreBad = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {{
          color: 'green'
        }}>
          There will be a to-do app!
        </p>
        <p>
          Вывод переменной: {item}
        </p>
        <p>
          Вывод числа: {21}
        </p>
        <p>
          Арифметическая операция: {24 + 7}
        </p>
        <p>
          Логическая операция: {catsAreNice && 'Cats are so nice!'}
        </p>
        <p>
          Тернарное условие: {catsAreBad ? 'No, cats are nice!' : 'Yes, cats are evil creatures.'}
        </p>
        <p>
          Вывод undefined: {undefined}, null: {null}, false: {false}, true: {true}. Они не выводятся :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
