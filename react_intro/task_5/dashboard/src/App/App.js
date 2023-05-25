import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form className="Form-body">
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" />
        </label>
        <input type="submit" value="OK" />
      </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
      </div>
    </div>
  );
}

export default App;
