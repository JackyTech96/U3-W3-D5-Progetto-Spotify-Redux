import { DEEZER_SET_ALBUM } from "../actions";

const initialState = {
  results: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEEZER_SET_ALBUM:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
