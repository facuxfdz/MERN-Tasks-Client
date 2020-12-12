import {
    PROJECT_TASKS,
    ADD_TASK,
    TASK_VALIDATE,
    ELIMINATE_TASK,
    TASK_STATE,
    ACTUAL_TASK,
    EDIT_TASK,
    CLEAN_TASK_BTN
} from '../../types/index';



const taskReducer = (state, action) => {
    switch(action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                actualTasks: state.tasks.filter(task => task.projectID === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks, ],
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
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case EDIT_TASK:
        case TASK_STATE:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
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
        default:
            return state;
    }
}

export default taskReducer;