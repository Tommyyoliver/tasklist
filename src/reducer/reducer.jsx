import { TYPES } from "./TYPES"

export const reducer = (state, action) => {
    switch(action.type){
        case TYPES.ADD_TASK :
            return [
                ...state,
                {
                    id: new Date().getTime(),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]
        case TYPES.UPDATE_TASK:
            const newTask = state.map(task => task.id == action.payload.id ? action.payload : task)
            return newTask
        case TYPES.DELETE_TASK:
            return state.filter(task => task.id !== action.payload)
    }
    return state
}