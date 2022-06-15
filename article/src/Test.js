import React, {useState} from 'react'

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

const Test = (props) => {
  const [names, setNames] = useState(props.names);
  const [test, setTest] = useState(0);
  const submitForm = (event) => {
    //actulizamos el valor test sumado 1
    setTest(test => test + 1);
    alert(`Aumenta ${test}`);
  }
  
  return (
    <>
      <TestBody names={names}/>
      <input type="button" value="Submit" onClick={submitForm} />
    </>
      
  )

}

export default Test