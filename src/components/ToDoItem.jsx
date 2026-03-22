import React from 'react';

function ToDoItem(props) {

    return (
        // <div>
        <div className='bg-white w-[150px] sm:w-[250px] min-h-[200px] p-2 m-auto my-5 shadow-[0px_0px_5px_black] rounded-2xl '>

            <div className='flex justify-between'>
                <label className='text-gray-400 text-sm'>Title:-</label>
                <button className='bg-blue-500 rounded-2xl p-1 cursor-pointer hover:scale-[1.1] relative top-[-20px] 
                left-3.5 shadow-[1px_-1px_5px_black]'><img src="./note.png" width={'25px'} alt="" /></button>
            </div>
            <h2>{props.tododata.title}</h2>
            <label className='text-gray-400 text-sm'>
                Description:-
            </label>
            <div className='no-scrollbar bg-amber-100 rounded-2xl p-1 pl-2 text-sm  overflow-y-scroll shadow-[0px_0px_13px_black_inset]  h-[100px]'>
                {props.tododata.description}
            </div>
            <div>
                <button className='bg-green-400 rounded-2xl p-1 cursor-pointer hover:scale-[1.1]  relative top-6 right-3.5'>
                    <img src="./checklist.png" width={'28px'} alt="" />
                </button>
                <button>
                    <img src="" alt="" />
                </button>
            </div>
        </div>
        // </div>
    )
}

export default ToDoItem;