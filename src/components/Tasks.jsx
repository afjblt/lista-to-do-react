import React from 'react'
import Task from './Task'

const Tasks = ({tasks, handleTaskClick, handleTaskRemove}) => {
    return (
        <>
            {tasks.map(task => <Task task={task} handleTaskRemove={handleTaskRemove} handleTaskClick={handleTaskClick}/>)}
        </>
    )
}

export default Tasks