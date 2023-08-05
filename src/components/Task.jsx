import { useState } from 'react'
import btnDelete from '../assets/delete.png'
import btnUpdate from '../assets/check.png'
import '../styles/Task.css'

function Task({ task, updateTask, deleteTask }) {
    
    const [openTask, setOpenTask] = useState('task')
    const [valueTitle, setValueTitle] = useState(task.title)
    const [valueContent, setValueContent] = useState(task.content)

    const handleOpenTask = () => {
        if (openTask == 'task'){
            setOpenTask('task openTask')
        }
    }
    const update = () => {
        updateTask(task.id, valueTitle, valueContent)
        if (openTask == 'task openTask') {
            setOpenTask('task')
        }
    }


    
    return (
        <div className={openTask} onClick={handleOpenTask}>
            {openTask == 'task' ? (
                <div className='task-close'>
                    <h3>{task.title}</h3>
                    <p>{task.content}</p>
                    <img className='btn-delete' onClick={() => deleteTask(task.id)} src={btnDelete} alt='btn delete' />
                </div>
            ) : (
                <div className='task-open'>
                    <textarea onChange={(e) => setValueTitle(e.target.value)} className='task-open-textarea-1' rows="1" defaultValue={task.title}></textarea>
                    <textarea onChange={(e) => setValueContent(e.target.value)} className='task-open-textarea-2' defaultValue={task.content}></textarea>
                    <img className='btn-update' onClick={update} src={btnUpdate} alt='btn-update' />
                    <img className='btn-delete' onClick={() => deleteTask(task.id)} src={btnDelete} alt='btn delete' />
                </div>
            )}
        </div>
    )
}

export { Task }