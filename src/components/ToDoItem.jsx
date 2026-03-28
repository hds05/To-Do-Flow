import React, { useState } from 'react';
import EditToDo from './EditToDo';

function ToDoItem(props) {
    function handleEdit() {
        // props.setShowForm(true)
        props.setEdit(true)
        props.setGetId(props.tododata.id)
        // {
            // <EditToDo tododata={props.tododata} setTododata={props.setTododata} />
        // }

    }
    let getCard = JSON.parse(localStorage.getItem('To-Do')) || [];


    if(!getCard){
        getCard = [];
    }
    
    
    function handleDelete() {
        let updatedCards = getCard.filter((e) => e.id != props.id);
        localStorage.setItem('To-Do', JSON.stringify(updatedCards))
        // if (props.tododata) {
        props.setTododata(updatedCards)
        // }
    }
    function handleComplete() {
        // let getCard = JSON.parse(localStorage.getItem('To-Do')) || [];

        let completedCard = getCard.map((e) => {

            if (e.id === props.id) {
                // props.setComplete(true)
                console.log('completed', e.id, props.id);
                return { ...e, completed: true }
            }
            return e;
        })
        // getCard.filter((e) => e.id != getCard.id)
        localStorage.setItem('To-Do', JSON.stringify(completedCard))
        props.setTododata(completedCard)
    }
    return (
        <div>
            {
                props.tododata.completed ? (
                    <div className='bg-green-400/50 w-[150px] sm:w-[250px] min-h-[200px] p-2 m-auto my-5 shadow-[0px_0px_5px_black_inset] rounded-2xl '>
                        <div className='flex justify-between'>
                            <label className='text-gray-600 text-sm'>Title:-</label>
                            {/* <button onClick={handleEdit} className='bg-blue-500 rounded-2xl p-1 cursor-pointer hover:scale-[1.1] relative top-[-20px] 
                left-3.5 shadow-[1px_-1px_5px_black]'><img src="./note.png" width={'25px'} alt="" /></button> */}
                            <h1 className='relative bottom-5 left-3 md:text-xl font-extrabold bg-green-900 p-1 rounded-xl text-white'>Completed</h1>
                        </div>
                        <h2 className='min-h-[50px] overflow-auto  p-1 rounded-[10px_10px_0px_0px] shadow-[0px_0px_10px_gray_inset]'>{props.tododata.title}</h2>
                        <label className='text-gray-600 text-sm'>
                            Description:-
                        </label>
                        <div className='no-scrollbar bg-green-200 rounded-[0px_0px_10px_10px] p-1 pl-2 text-sm  overflow-y-scroll shadow-[0px_0px_13px_black_inset] h-[100px] max-h-[100px]'>
                            {props.tododata.description}
                        </div>
                        <div className='flex justify-center'>
                            {/* <button onClick={handleComplete} className='bg-green-400 rounded-2xl p-1 cursor-pointer hover:scale-[1.1]  relative top-6 right-3.5'>
                                <img src="./checklist.png" width={'28px'} alt="" />
                            </button> */}
                            <button onClick={handleDelete} className='bg-red-400 rounded-2xl p-1 cursor-pointer hover:scale-[1.1]  relative top-5 '>
                                <img src="./garbage.png" width={'28px'} alt="" />
                            </button>
                        </div>
                    </div>
                ) : (
                    // props.edit ? (<EditToDo tododata={props.tododata} setEdit={props.setEdit} setTododata={props.setTododata} id={props.id} />) : (

                        <div className='bg-white w-[150px] sm:w-[250px] min-h-[200px] p-2 m-auto my-5 shadow-[0px_0px_5px_black] rounded-2xl '>

                            <div className='flex justify-between'>
                                <label className='text-gray-400 text-sm'>Title:-</label>
                                <button onClick={handleEdit} className='bg-blue-500 rounded-2xl p-1 cursor-pointer hover:scale-[1.1] relative top-[-20px] 
                right-3.5 transition-all duration-150 hover:shadow-[3px_4px_10px_black]'><img src="./note.png" width={'25px'} alt="" /></button>
                            </div>
                            <h2 className='min-h-[50px] max-h-[50px] overflow-auto  p-1 rounded-[10px_10px_0px_0px] shadow-[0px_0px_10px_gray_inset]'>{props.tododata.title}</h2>
                            <label className='text-gray-400 text-sm'>
                                Description:-
                            </label>
                            <div className='no-scrollbar bg-amber-100 text-red-900 rounded-[0px_0px_10px_10px] p-1 pl-2 text-sm  overflow-y-scroll shadow-[0px_0px_13px_black_inset] h-[100px]  max-h-[100px]'>
                                {props.tododata.description}
                            </div>
                            <div className='flex justify-between'>
                                <button onClick={handleComplete} className='bg-green-400 rounded-2xl p-1 cursor-pointer hover:scale-[1.1]  relative top-6 left-3.5 transition-all duration-150 hover:shadow-[3px_4px_10px_black]'>
                                    <img src="./checklist.png" width={'28px'} alt="" />
                                </button>
                                <button onClick={handleDelete} className='bg-red-400 rounded-2xl p-1 cursor-pointer hover:scale-[1.1]  relative top-5 right-3.5 transition-all duration-150 hover:shadow-[3px_4px_10px_black]'>
                                    <img src="./garbage.png" width={'28px'} alt="" />
                                </button>
                            </div>
                        </div>
                    // )
                )
            }
        </div>
    )
}

export default ToDoItem;