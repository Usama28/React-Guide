import React,{useState,useEffect} from 'react'
import PageOne from './Pages/Page1'
import FormValidation from './Pages/FormValidation'

function App() {

  const [names,setNames]=useState(['ali','abdullah','usman'])
  

  const editFunct=(value)=>{
    const temp=[...names]
    temp.push(value)
    setNames(temp)
  }
  return (
    <div className="App">
    
              <h1>Todo using parent/child</h1>
            <PageOne names={names} setNames={setNames} editFunct={editFunct}/>
            <h1>Form Validation</h1>
            <FormValidation/>

    </div>
  );
}

export default App;
