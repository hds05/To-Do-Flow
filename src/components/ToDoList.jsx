import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
// import AddToDo from './AddToDo';

function ToDoList(props) {
    const [todoData, setTodoData] = useState([])
    let rawData = JSON.parse(localStorage.getItem('To-Do')) || [];
    useEffect(()=>{
        console.log(rawData)
        setTodoData(rawData)
    },[])
    
    return (
        <div className='relative h-screen'>

            {/* <AddToDo /> */}
            {
                todoData.length? (
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative top-[100px] p-2 gap-2 mx-8'>
                        {
                            todoData.map((e) => {
                                return (
                                    <ToDoItem key={e.id} id={e.id} tododata={e} setTododata={setTodoData} setEdit={props.setEdit} setShowForm={props.setShowForm} />
                                )
                            })
                        }
                    </div>
                ) : (
                    <div className=' w-full flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0'>
                        <div className='bg-white flex flex-col gap-3 z-50 p-4 rounded-2xl shadow-[0px_2px_10px_black] text-center text-gray-700 m-2'>
                            <h1 className=''>You haven't added anything in TO-DO list yet... 😅</h1>
                            <button onClick={() => { props.setShowForm(true) }} className='bg-green-600 text-white p-2 rounded-2xl hover:bg-green-700 hover:shadow-[0pc_3px_5px_black] cursor-pointer transition-all duration-500 hover:scale-105'>Add</button>
                        </div>
                    </div>
                )

            }
        </div>
    )
}

export default ToDoList;