import { DELETE_CITIES, SEARCH_CITIES, SET_CITY } from "../types";

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
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
