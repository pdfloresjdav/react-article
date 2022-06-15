import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Test from './Test';

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
      <div className="containerTest">
        <Test names={name} />
      </div>
    )
  }
}

export default AppTest;
