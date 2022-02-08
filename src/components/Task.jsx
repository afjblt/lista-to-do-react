import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg'
import { useRouter } from 'next/router'
import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
    const roteamento = useRouter()

    const handleDetailsClick = () => {
        console.log(task.title)
        roteamento.push(`/${task.title}`)
    }

    return (
        <div className="task-container" style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div className='task-title' onClick={() => { handleTaskClick(task.id) }} >{task.title}</div>
            <div className="buttons-container">
                <button className='remove-task-button' onClick={() => { handleTaskRemove(task.id) }}><CgClose /></button>
                <button className='see-task-details-button' onClick={handleDetailsClick}><CgInfo /></button>
            </div>
        </div>

    )
}

export default Task