import { GET_CITIES, SEARCH_CITIES } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CITIES:
      return {
        ...state,
        city: action.payload,
      };
    // case GET_CITIES:
    //   return {
    //     ...state,
    //     city: action.payload,
    //   };
    default:
      return state;
  }
};
