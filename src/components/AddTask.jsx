import React, { useState } from 'react'
import Button from './Button'
import './AddTask.css'

const AddTask = ({handleTaskAdd}) => {
    const [inputData, setInputData] = useState()
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAdd(inputData)
        setInputData('')
    }

    return (
        <div className="add-task-container">
            <input onChange={handleInputChange} value={inputData} type="text" className='add-task-input'/>
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask