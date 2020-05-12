import { DELETE_CITIES, SEARCH_CITIES } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case DELETE_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};
