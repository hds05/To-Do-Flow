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
  const [todoData, setTodoData] = useState([])
  // const [completed, setCompleted] = useState(false)

  useEffect(() => {
    try {
      let Data = JSON.parse(localStorage.getItem('To-Do')) || [];
      console.log('Data from App.jsx', Data)
      setTodoData(Data)
    } catch {
      setTodoData([]);
    }
  }, [])

  return (
    <div className="bg-[url('BG.jpg')] h-screen bg-cover w-full overflow-scroll">
      <Header setShowForm={setShowForm} />
      <ToDoList todoData={todoData} setGetId={setGetId} setTodoData={setTodoData} setShowForm={setShowForm} setEdit={setEdit} />
      {
        (showForm && <AddToDo todoData={todoData} setTodoData={setTodoData} setShowForm={setShowForm} />) ||
        (edit && <EditToDo getid={getid} todoData={todoData} setTodoData={setTodoData} setEdit={setEdit} />)
      }
    </div>
  )
}

export default App
