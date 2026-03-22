import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)
  // const rawData = JSON.parse(localStorage.getItem('To-Do-Data')|| []) ;
  // console.log('its raw data',rawData)
  // const newData = [
  //   {id: Date.now()}
  // ]
  // if(!rawData){
  //   localStorage.setItem(...rawData, JSON.stringify(newData))
  // }
  return (
   <div className="bg-[url('https://png.pngtree.com/background/20210709/original/pngtree-gold-pattern-poster-background-picture-image_424792.jpg')] h-screen bg-cover fixed w-full overflow-scroll">
      <Header />
      <ToDoList />
   </div>
  )
}

export default App
