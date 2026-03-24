import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import AddToDo from './components/AddToDo'

function App() {

  // const [userData, setUserData] = useState([]);
  const [showForm, setShowForm] = useState(false)
  const [edit, setEdit] = useState(false)
  // const [completed, setCompleted] = useState(false)

  // let data = JSON.parse(localStorage.getItem('To-Do')) || [];
  // useEffect(() => {
  //   console.log(data)
  //   setUserData(data)
  // }, [])
  return (
    <div className="bg-[url('https://png.pngtree.com/background/20210709/original/pngtree-gold-pattern-poster-background-picture-image_424792.jpg')] h-screen bg-cover w-full overflow-scroll">
      <Header setShowForm={setShowForm} setEdit={setEdit} />
      <ToDoList setShowForm={setShowForm} setEdit={setEdit} />
      {
        (showForm || edit)
        &&
        (<AddToDo setShowForm={setShowForm} edit={edit} setEdit={setEdit} text={edit ? 'Edit' : 'Add'} />)
      }
    </div>
  )
}

export default App
