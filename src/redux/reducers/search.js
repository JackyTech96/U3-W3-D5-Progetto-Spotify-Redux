import { DEEZER_SET_SEARCH } from "../actions";

const initialState = {
  searchValue: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEEZER_SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
