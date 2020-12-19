import { 
    PROJECT_FORM, 
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTUAL_PROJECT,
    ELIMINATE_PROJECT,
    
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
                activeProject: state.projects.filter(project => project.id === action.payload)
            }

        case ELIMINATE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload),
                activeProject: null
            }

        default: 
            return state;
    }
}

export default projectReducer;