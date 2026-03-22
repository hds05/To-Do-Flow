import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
// import AddToDo from './AddToDo';

function ToDoList(props) {
    
    return (
        <div className='relative h-screen w-full'>

            {/* <AddToDo /> */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative top-[100px] p-2 gap-2'>
                {
                    props.tododata.map((e) => {
                        return (
                            <ToDoItem tododata={e} />
                        )
                    })

                }
            </div>
        </div>
    )
}

export default ToDoList;