import React, {Component} from 'react'

const TestBody = (props) => {
  const content = props.names.name.map((index)=>{
    return <h1> Hola {index.name} {index.lastName}</h1>
  });
  return(
      <>
          {content}
      </>
  )
}

class Test extends Component {

  submitForm = (event) => {
    alert(`Evento Click ejecutado`);
  }
  
  render() {
    const names = this.props.names;
    
    return (
      <>
        <TestBody names={names}/>
        <input type="button" value="Submit" onClick={this.submitForm} />
      </>
        
    )
  }
}

export default Test