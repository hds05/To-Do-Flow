import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import AddToDo from './components/AddToDo'
import EditToDo from './components/EditToDo'

function App() {

  // const [userData, setUserData] = useState([]);
  const [showForm, setShowForm] = useState(false)
  const [edit, setEdit] = useState(false)
  const [getid, setGetId] = useState('')
  const [todoData, setTodoData] = useState('')
  // const [completed, setCompleted] = useState(false)

    let Data = JSON.parse(localStorage.getItem('To-Do')) || [];
    useEffect(()=>{
        console.log('Data from App.jsx',Data)
        setTodoData(Data)
    },[])
    
  return (
    <div className="bg-[url('https://png.pngtree.com/background/20250207/original/pngtree-soft-pastel-floral-design-light-blue-background-picture-image_16257054.jpg')] h-screen bg-cover w-full overflow-scroll">
      <Header setShowForm={setShowForm} />
      <ToDoList todoData={todoData} setGetId={setGetId} setTodoData={setTodoData} setShowForm={setShowForm} edit={edit} setEdit={setEdit} />
      {
        (showForm && <AddToDo setTodoData={setTodoData} setShowForm={setShowForm} />) ||
        (edit && <EditToDo getid={getid} setTodoData={setTodoData} setEdit={setEdit} />)
      }
    </div>
  )
}

export default App
