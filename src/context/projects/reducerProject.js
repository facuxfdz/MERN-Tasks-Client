import { 
    PROJECT_FORM, 
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTUAL_PROJECT,
    ELIMINATE_PROJECT,
    PROJECT_ERROR
    
} from '../../types';


const projectReducer = (state, action) => {
    switch(action.type) {

        case PROJECT_FORM:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                formError: false 
            }
        
        case VALIDATE_FORM:
            return {
                ...state,
                formError: true
            }
        case ACTUAL_PROJECT:
            return {
                ...state,
                activeProject: state.projects.filter(project => project._id === action.payload)
            }

        case ELIMINATE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project._id !== action.payload), //Delte the project from the view, without this, the project would still be seen even if it has been deleted in the DB  
                activeProject: null
            }
        case PROJECT_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default: 
            return state;
    }
}

export default projectReducer;