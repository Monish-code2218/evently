import React from 'react'

function TaskCard({ task, onEdit, onDelete }) {
    return (
        <div className='p-4 border rounded-lg shadow hover:shadow-lg'>
            <h3 className='font-bold'></h3>
            <p className='text-gray-600'></p>
            <span
                className={`text-xs px-2 py-1 rounded 'bg-green-200 text-green-800'
                    : task.status === 'inProgress'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                    }`}>
                
            </span>
            <div>
                <button
                    onClick={() => onEdit(task)}
                    className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg'>Edit
                </button>
                <button
                    onClick={() => onDelete(task)}
                    className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg ml-2'>Delete
                </button>
            </div>
        </div>
    )
}

export default TaskCard