import React from 'react'
import Task from './Task'

const Tasks = ({tasks, handleTaskClick, handleTaskRemove}) => {
    return (
        <>
            {tasks.map((task, index) => <Task task={task} key={index} handleTaskRemove={handleTaskRemove} handleTaskClick={handleTaskClick}/>)}
        </>
    )
}

export default Tasks