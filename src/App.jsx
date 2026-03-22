import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import AddToDo from './components/AddToDo'

function App() {

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('To-Do')) || []
    console.log(data)
    setUserData(data)
  }, [])
  return (
    <div className="bg-[url('https://png.pngtree.com/background/20210709/original/pngtree-gold-pattern-poster-background-picture-image_424792.jpg')] h-screen bg-cover sticky top-0 w-full overflow-scroll">
      <Header />
      <ToDoList tododata={userData} />
      {/* <AddToDo /> */}
    </div>
  )
}

export default App
