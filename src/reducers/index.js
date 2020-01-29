export default function(state = {}, action) {
    switch (action.type) {
      case "LOAD_SPINNER": {
        return {
          ...state,
          isFetching: {
              ...isFetching,
              loading: !state.isFetching.loading
          }
        };
      }
      case "ERRORS": {
        return {
          ...state,
          errors: {
            ...state.errors,
          }
        };
      }


    }
  }