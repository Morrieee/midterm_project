import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')
  const [error,setError]=useState(false)

  const addList = (grocery) => {
    const newList = {
      id: Math.random(),
      grocery:grocery,
    }
    if(input.length == 0|| setInput.length == 0){
      setError(true)

    }else {
      setError(false)
      console.log(input, setInput)
      setList([...list, newList])
      setInput("")

    }
  };

  const deleteGrocery = (id) =>{
    const newList = list.filter((grocery)=> grocery.id !==id);

    setList(newList);

  }

  return (
    <div className='Grocerylist'>
      {error ?
        <label className='label'> Item can't be empty!</label>: 
      " "}
      <h1>Grocery List</h1>
      <div className='word'>
        <input 
          placeholder="eggs.. e.g"
          type = "text" 
          value={input} 
          onChange = {(e) => setInput(e.target.value)}
          />
        <button className='enter' onClick = {() => addList(input)}>Add</button>
        <ul>
          {list.map((grocery) => (
          <li key ={grocery.id}>
            {grocery.grocery}
            <button className = 'delete' onClick ={() => deleteGrocery(grocery.id)}>&times;</button>
          </li> 
          ))}
        </ul>
      </div>
     
    </div>
  )
}

export default App
