import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import '../styles/Search.css'

function Search() {
    
    const { setInputValue } = useContext(TaskContext)
    
    return (
        <div className="input">
            <input onChange={(e) => setInputValue(e.target.value)} placeholder="search task" />
        </div>
    )
}

export { Search }