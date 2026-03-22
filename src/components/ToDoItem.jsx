import React from 'react';

function ToDoItem() {
    const dummyData = [
        {
            id: 1,
            title: 'Work at home...',
            description: [
                'i have to wake up.and asdf asdf asdf asdf',
                'i have to take bath.',
                'i have to eat.',
                'i have to code.',
                'i have to eat.',
                'i have to sleep.',
                'i have to wake up.',
                'i have to take bath.',
                'i have to eat.',
                'i have to code.',
                'i have to eat.',
                'i have to sleep.',
                'i have to wake up.',
                'i have to take bath.',
                'i have to eat.',
                'i have to code.',
                'i have to eat.',
                'i have to sleep.'
            ]
        },
        {
            id: 2,
            title: 'Work at office...',
            description: [
                'i have to go office.',
                'i have to work there.'
            ]
        },
        {
            id: 3,
            title: 'Work at home...',
            description: [
                'i have to wake up.',
                'i have to take bath.',
                'i have to eat.',
                'i have to code.',
                'i have to eat.',
                'i have to sleep.',
                'i have to wake up.',
                'i have to take bath.',
                'i have to eat.',
                'i have to code.',
                'i have to eat.',
                'i have to sleep.',
                'i have to wake up.',
                'i have to take bath.',
                'i have to eat.',
                'i have to code.',
                'i have to eat.',
                'i have to sleep.'
            ]
        },
        {
            id: 4,
            title: 'Work at office...',
            description: [
                'i have to go office.',
                'i have to work there.'
            ]
        },
        {
            id: 5,
            title: 'Work at home...',
            description: [
                'i have to wake up.',
                'i have to take bath.',
                'i have to eat.',
                'i have to code.',
                'i have to eat.',
                'i have to sleep.',
                'i have to wake up.',
                'i have to take bath.',
                'i have to eat.',
                'i have to code.',
                'i have to eat.',
                'i have to sleep.',
                'i have to wake up.',
                'i have to take bath.',
                'i have to eat.',
                'i have to code.',
                'i have to eat.',
                'i have to sleep.'
            ]
        },
        {
            id: 6,
            title: 'Work at office...',
            description: [
                'i have to go office.',
                'i have to work there.'
            ]
        },
    ]
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                dummyData.map((e) => {
                    return (
                        <div key={e.id} className='bg-white w-[180px] sm:w-[250px] min-h-[200px] p-2 m-auto my-5 shadow-[0px_0px_5px_black] rounded-2xl '>

                            <div>
                                <label className='text-gray-400 text-sm'>Title</label>
                                <h2>{e.title}</h2>
                            </div>
                            <label className='text-gray-400 text-sm'>
                                Description:-
                            </label>
                            <div className='bg-amber-100 rounded-2xl p-1 text-sm shadow overflow-y-scroll shadow-[0px_0px_13px_amber inset]  h-[100px]'>
                                {
                                    e.description.map((e, ind) => {
                                        return <p key={ind}>• {e}</p>
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ToDoItem;