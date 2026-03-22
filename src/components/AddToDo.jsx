import React, { useState } from 'react';

function AddToDo() {
    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredDescription, setEnteredDescription] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        let rawData = JSON.parse(localStorage.getItem('To-Do')) || []
        let entry = {
            title: enteredTitle,
            description: enteredDescription
        }
        const data = [...rawData, entry]
        localStorage.setItem('To-Do', JSON.stringify(data))
        setEnteredTitle('');
        setEnteredDescription('');
    }
    function handleCloseForm() {
        
    }
    return (

        <div className='absolute top-0 bottom-0 right-0 left-0 z-60 w-full flex justify-center items-center bg-gray-600/70'>
            {/* <div className='relative'> */}
                <div>
                    <form onSubmit={handleSubmit} action="" className='p-4 bg-white rounded-xl flex flex-col w-[500px] h-[400px] '>
                        <h1 className='text-center text-4xl'>Add To-Do</h1>
                        <label htmlFor="">Title:-</label>
                        <input type="text" required={true} value={enteredTitle} onChange={(e) => setEnteredTitle(e.target.value)} className='shadow-[0px_0px_2px_black] p-1' />
                        <label htmlFor="">Description:-</label>
                        <textarea required={true} value={enteredDescription} onChange={(e) => setEnteredDescription(e.target.value)} className='shadow-[0px_0px_2px_black] p-1 h-full' name="" id="" placeholder='Please write your description here...'></textarea>
                        <button type='submit' className='m-4 bg-green-500 p-2 transition-all duration-150 rounded-2xl text-white cursor-pointer hover:shadow-[0px_3px_2px_black] hover:scale-[1.05]'>Add</button>
                    </form>
                </div>
                <button onClick={handleCloseForm} className='absolute top-0 right-0 m-2 bg-red-600 text-white p-2 rounded-lg cursor-pointer'>X</button>
            {/* </div> */}
        </div>
    )
}

export default AddToDo;
