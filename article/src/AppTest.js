import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import { AuthContext } from './AuthContext';

class AppTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:[
            {name: 'pedro', lastName: 'perez'}
        ]
    }

  }

  render() {
  
    const name =this.state
    return (
      <AuthContext.Provider value={name}>
        <Test names={name} />
      </AuthContext.Provider>
    )
  }
}

export default AppTest;
