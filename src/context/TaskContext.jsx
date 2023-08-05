import { createContext, useState } from "react";

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
    
    const [inputValue, setInputValue] = useState('')
    
    
    const data = {
        inputValue,
        setInputValue
    }

    return <TaskContext.Provider value={data}>{children}</TaskContext.Provider>
}

export { TaskContext, TaskProvider }