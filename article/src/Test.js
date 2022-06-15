import React, {Component} from 'react'

const TestBody = (props) => {
  const content = props.names.map((index)=>{
    return <h1> Hola {index.name} {index.lastName}</h1>
  });
  return(
      <>
          {content}
      </>
  )
}

class Test extends Component {
render() {
  const names = this.props.names;
  return (
      <TestBody names={names}/>
  )
}
}

export default Test