import { useContext, useEffect, useReducer, useRef, useState } from "react"
import { Task } from "./Task"
import { reducer } from "../reducer/reducer"
import { TYPES } from "../reducer/TYPES"
import { PortalTask } from "./PortalTask"
import { TaskContext } from "../context/TaskContext"
import '../styles/TaskList.css'
import btnAdd from '../assets/add.png'

function TaskList() {
    
    const { inputValue } = useContext(TaskContext)

    const initialState = []
    const [showPortal, setShowPortal] = useState('portal notActive')
    // const [task, dispath] = useReducer(reducer, initialState)
    const [task, dispath] = useReducer(reducer, JSON.parse(localStorage.getItem('taskV5')) ? JSON.parse(localStorage.getItem('taskV5')) : initialState)


    useEffect(() => {
        localStorage.setItem('taskV5', JSON.stringify(task))
    }, [ task ])


    const addTask = () => {
        dispath({type: TYPES.ADD_TASK, payload: {title: inputTitleRef.current.value, content: inputContentRef.current.value}})
    }
    const updateTask = (id, valueTitle, valueContent) => {
        dispath({type: TYPES.UPDATE_TASK, payload: {id: id, title: valueTitle, content: valueContent}})
    }
    const deleteTask = (id) => {
        dispath({type: TYPES.DELETE_TASK, payload: id})
    }


    const inputTitleRef = useRef()
    const inputContentRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handlePortal = () => {
        if(showPortal == 'portal notActive') {
            setShowPortal('portal')
        } else {
            setShowPortal('portal notActive')
        }
    }

    return (
        <div>
            <img className="btn-add" onClick={handlePortal} src={btnAdd} alt="add" />
            <div className="btn-add-background"></div>
            
            <PortalTask 
                showPortal={showPortal} 
                handlePortal={handlePortal} 
                addTask={addTask} 
                handleSubmit={handleSubmit} 
                inputTitleRef={inputTitleRef}
                inputContentRef={inputContentRef}
            />

            <div className="tasklist">
                {
                    inputValue.length > 0 ? (
                        task.map(task => task.title.toLowerCase().includes(inputValue.toLowerCase()) && (
                            <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
                        ))
                    ) : (
                        task.map(task => (
                            <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
                        ))
                    )
                }
            </div>            
            {
                task.length == 0 && <p className="tasklist-empty">EMPTY</p>
            }
        </div>
    )
}

export { TaskList }