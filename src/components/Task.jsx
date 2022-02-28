import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg'
import {Link} from 'react-router-dom'
import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
    // const router = useRouter()

    return (
        <div className="task-container" style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div className='task-title' onClick={() => { handleTaskClick(task.id) }} >{task.title}</div>
            <div className="buttons-container">
                <button className='remove-task-button' onClick={() => { handleTaskRemove(task.id) }}><CgClose /></button>
                <Link to={`/${task.title}`}>
                    <button className='see-task-details-button'><CgInfo /></button>
                </Link>
            </div>
        </div>

    )
}

export default Task