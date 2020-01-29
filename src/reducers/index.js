export default function(state = {}, action) {
    switch (action.type) {
      case "SELECT_A_STUDENT": {
        return {
          ...state,
        studentSelected: {
          ...state.student,
          id: action.payload
        }
        }
      };
      case "LOAD_SPINNER": {
        return {
          ...state,
          isloading: true
        }
      };
      case "FETCH_INFO": {
        return {
          ...state,
          isloading: false
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