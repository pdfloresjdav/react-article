import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Test from './Test';

class AppTest extends Component {
  render() {
    const name =[{name: 'pedro', lastName: 'perez'}];
    return (
      <div className="containerTest">
        <Test names={name} />
      </div>
    )
  }
}

export default AppTest;
