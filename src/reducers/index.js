export default function(state = {}, action) {
    switch (action.type) {
      case "SELECT_A_STUDENT": {
        return {
          ...state,
        studentselected: {
          ...state.student,
          id: action.payload
        }
        }
      };
      case "LOAD_STUDENTS": {
        return {
          ...state,
          students: action.payload
        }
      };
      case "LOAD_SPINNER": {
        return {
          ...state,
          isLoading: true
        }
      };
      case "UNLOAD_SPINNER": {
        return {
          ...state,
          isLoading: false
        }
      };
      case "ERRORS": {
        return {
          ...state,
          errors: {
            ...state.errors,
          }
        };
      };
      default: 
        return state;

    }
  }