import { useState } from 'react'
// import './App.css'
import Person from './Queestion1/Person'
import Button from './Question2/Button'
import Header from './Question3/Header'
import List from './Question4/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    //Question 1
     <Person name="Vikash" age={24}/>
    </div>
     
    <div>
    //Question 2
     <Button text="Click here" onClick={()=>console.log("Button is Clicked")}/>
     <h1></h1>
    </div>
     
    <div>
    //Question 3
     <Header title='Hello World'/>
    </div>
     
    <div>
    //Question 4
     <List item={['Vikash','Tanish','Rajendra','Raju']} />
    </div>
     

     
      
     
    </>
  )
}

export default App
