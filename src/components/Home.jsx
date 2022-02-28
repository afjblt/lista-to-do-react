import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import AddTask from "./AddTask";
import Tasks from "./Tasks";

const Home = () => {
    useEffect(() => {
      const fetchTasks = async () => {
        const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
        setTasks(data)
      }

      fetchTasks()
    }, [])

    const [tasks, setTasks] = useState([
        // {
        //   id: '1',
        //   title: 'Estudar programação',
        //   completed: false,
        // },
        // {
        //   id: '2',
        //   title: 'Ler livros',
        //   completed: true,
        // },
        // {
        //   id: '3',
        //   title: 'Aprender inglês',
        //   completed: false,
        // }
      ])


    const handleTaskRemove = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId)
    
        setTasks(newTasks)
      }

    const handleTaskAdd = (taskTitle) => {
        const newTasks = [...tasks, {
          title: taskTitle,
          id: uuidv4(),
          completed: false
        }]
        setTasks(newTasks)
      }

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map(task => {
          if (task.id === taskId) return { ...task, completed: !task.completed }
    
          return task
        })
        setTasks(newTasks)
      }

    return (
        <>
            <AddTask handleTaskAdd={handleTaskAdd} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />
        </>
    )
}

export default Home