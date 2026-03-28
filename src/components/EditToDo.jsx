import React, { useEffect, useState } from 'react'
import AddToDo from './AddToDo';

function EditToDo(props) {
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateDescription, setUpdateDescription] = useState('')

    useEffect(() => {
        let Data = JSON.parse(localStorage.getItem('To-Do')) || [];
        let DataToEdit = Data.find((e) => { return e.id === props.getid })
        if (DataToEdit) {
            setUpdateTitle(DataToEdit.title)
            setUpdateDescription(DataToEdit.description)
            // localStorage.setItem('To-Do', )
            console.log('update title', DataToEdit.title);
            console.log('update title', updateTitle);
        }
    }, [props.getid])
    function handleEdit(e) {
        e.preventDefault();
        let existingData = JSON.parse(localStorage.getItem('To-Do')) || []
        let UpdatedData = existingData.map((e) => e.id === props.getid ?
            {
                ...e,
                title: updateTitle,
                description: updateDescription
            }

            : e)
        localStorage.setItem('To-Do', JSON.stringify(UpdatedData))

        // for(let i of UpdatedData){
        //     setUpdateTitle(e.target.value)
        //     setUpdateDescription(e.target.description)
        //     console.log('loop',i.title);
        // }
        props.setEdit(false)
        props.setTodoData(UpdatedData)
    }
    function handleCloseEdit() {
        props.setEdit(false);
    }
    return (
        <div className='w-full h-screen flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 z-60 bg-gray-600/70'>
            {/* <AddToDo handleEdit={handleEdit}/> */}
            <form action="" className='p-4 bg-white rounded-xl flex flex-col w-[300px] md:w-[500px] h-fit gap-2 '>
                <h1 className='text-center text-xl font-bold md:text-4xl'>Update To-Do</h1>
                <label htmlFor="">Title:-</label>
                <input type="text" required className='shadow-[0px_0px_2px_black] p-1' value={updateTitle} onChange={(e) => { setUpdateTitle(e.target.value) }} />
                <label htmlFor="">Description:-</label>
                <textarea name="" required className='shadow-[0px_0px_2px_black] p-1' id="" value={updateDescription} onChange={(e) => { setUpdateDescription(e.target.value) }}></textarea>
                <button onClick={handleEdit} type='submit' className='m-4 bg-blue-700 p-2 transition-all duration-700 rounded-2xl text-white cursor-pointer hover:shadow-[0px_3px_10px_black] hover:scale-[1.05] hover:bg-blue-500'>Update</button>
            </form>
            <button onClick={handleCloseEdit} className='absolute top-2 right-5 transition-all hover:scale-[1.09] cursor-pointer'><img src="./cancel.png" width={'35px'} alt="" /></button>
        </div>
    )
}

export default EditToDo;