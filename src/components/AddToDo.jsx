import React, { useState } from 'react';

function AddToDo(props) {
    // const [entryId, setEntryId] = useState(1)
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // let rawData = JSON.parse(localStorage.getItem('To-Do')) || []
        let entry = {
            id: Date.now(),
            title: enteredTitle,
            description: enteredDescription,
            completed: false
        }
        // setEntryId(entryId + 1)
        const data = [...props.todoData, entry]
        props.setTodoData(data)
        localStorage.setItem('To-Do', JSON.stringify(data))
        setEnteredTitle('');
        setEnteredDescription('');
        props.setShowForm(false)
    }
    function handleCloseForm() {
        props.setShowForm(false)
        // props.setEdit(false)
    }
    // function handleEdit() {
    //     let existingData = JSON.parse(localStorage.getItem('To-Do')) || [];
    //     let updatedData = existingData.filter((e) => e.id !== )
    // }
    return (

        <div className='w-full flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 z-60 bg-gray-600/70'>
            {/* <div className='relative'> */}
            <div>
                <form onSubmit={handleSubmit} action="" className='p-4 bg-white rounded-xl flex flex-col w-[300px] md:w-[500px] h-fit '>
                    <h1 className='text-center text-xl font-mono underline md:text-4xl mb-2'>Add To-Do</h1>
                    <div className='flex justify-center'>
                        <img src="./clippy-put.gif" width={'150'} alt="" />
                    </div>
                    <label htmlFor="">Title:-</label>
                    <input type="text" required={true} value={enteredTitle} onChange={(e) => setEnteredTitle(e.target.value)} className='shadow-[0px_0px_2px_black] p-1' />
                    <label htmlFor="">Description:-</label>
                    <textarea required={true} value={enteredDescription} onChange={(e) => setEnteredDescription(e.target.value)} className='shadow-[0px_0px_2px_black] p-1 h-full' name="" id="" placeholder='Please write your description here...'></textarea>

                    {/* {props.edit ?
                        (
                            <button onClick={props.handleEdit} className='m-4 bg-blue-700 p-2 transition-all duration-700 rounded-2xl text-white cursor-pointer hover:shadow-[0px_3px_10px_black] hover:scale-[1.05] hover:bg-blue-500'>Edit</button>
                        ) : ( */}
                    <button type='submit' className='mt-4 bg-green-700 p-2 transition-all duration-700 rounded-2xl text-white cursor-pointer hover:shadow-[0px_3px_10px_black] hover:scale-[1.05] hover:bg-green-500'>Add</button>
                    {/* // )
                    } */}
                </form>
            </div>

            <button onClick={handleCloseForm} className='absolute top-2 right-5 transition-all hover:scale-[1.09] cursor-pointer'><img src="./cancel.png" width={'35px'} alt="" /></button>
            {/* </div> */}
        </div>
    )
}

export default AddToDo;
