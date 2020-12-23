import {
    PROJECT_TASKS,
    ADD_TASK,
    TASK_VALIDATE,
    ELIMINATE_TASK,
    ACTUAL_TASK,
    EDIT_TASK,
    CLEAN_TASK_BTN,
    ELIMINATE_ALL_TASKS

} from '../../types/index';



const taskReducer = (state, action) => {
    switch(action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                actualTasks: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                actualTasks: [action.payload, ...state.actualTasks],
                taskError: false
            }
        case TASK_VALIDATE:
            return {
                ...state,
                taskError: true
            }
        case ELIMINATE_TASK:
            
            return {
                ...state,
                actualTasks: state.actualTasks.filter(task => task._id !== action.payload)
            }
        case EDIT_TASK:
            return {
                ...state,
                actualTasks: state.actualTasks.map(task => task._id === action.payload._id ? action.payload : task)
            }
        case ACTUAL_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }
        case CLEAN_TASK_BTN:
            return {
                ...state,
                selectedTask: []
            }
        case ELIMINATE_ALL_TASKS:
            return {
                ...state,
                actualTasks: [],
            }
        default:
            return state;
    }
}

export default taskReducer;