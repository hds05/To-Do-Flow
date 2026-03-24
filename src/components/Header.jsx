import React from 'react';

function Header(props) {
    function handleAddToDo(){
        props.setShowForm(true)
        props.setEdit(false)
    }
    return (
        <div className='fixed w-full p-4 bg-amber-500 flex justify-between items-center z-10'>
            <div>
                <h1 className='text-white text-2xl' style={{ fontFamily: 'fantasy' }}>
                    To_Do_Flow
                </h1>
            </div>
            {/* <div className='relative group'>hds
                <div className='absolute hidden group-hover:block bg-white border ' >
                    <div className='p-2 bg-gray-400 text-white disable'>selectIt</div>
                    <div className='p-2 hover:bg-gray-300 ' value="">option1</div>
                    <div className='p-2 hover:bg-gray-300 ' value="">option2</div>
                    <div className='p-2 hover:bg-gray-300 ' value="">option3</div>
                </div>
            </div> */}
            <div>
                <button onClick={handleAddToDo} className='p-2 tracking-wide transition-all duration-[0.9s] ease-in-out bg-amber-800 rounded-2xl text-white cursor-pointer hover:shadow-[0px_2px_10px_black] hover:scale-[1.1]' style={{ fontFamily: 'fantasy' }}>
                    Add To-Do
                </button>
            </div>
        </div>
    )
}

export default Header;