import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
// import AddToDo from './AddToDo';

function ToDoList(props) {
    console.log('data from todolist data',props.todoData);
    console.log('data from todolist id',props.id);
    console.log('data from todolist edit',props.edit);
    console.log('data from todolist setEdit',props.setEdit);
    
    return (
        <div className='relative h-screen'>

            {/* <AddToDo /> */}
            {
                props.todoData.length? (
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative top-[100px] p-2 gap-2 md:gap-4'>
                        {
                            props.todoData.map((e) => {
                                return (
                                    <ToDoItem key={e.id} id={e.id} setGetId={props.setGetId} tododata={e} setTododata={props.setTodoData} edit={props.edit} setEdit={props.setEdit}  />
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