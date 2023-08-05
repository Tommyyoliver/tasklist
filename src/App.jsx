import './styles/App.css'
import { TaskList } from "./components/TaskList"
import { TaskProvider } from './context/TaskContext'
import { Search } from './components/Search'

function App() {
    return (
        <TaskProvider>
            <div className='app'>
                <header className='app-header'>
                    <h1>TASK</h1>
                    <Search />
                </header>
                <TaskList />
            </div>
        </TaskProvider>
    )
}

export { App }