import { DEEZER_SET_LIKED } from "../actions";

const initialState = {
  liked: [],
};

const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEEZER_SET_LIKED:
      return {
        ...state,
        liked: [...state.liked, action.payload],
      };
    default:
      return state;
  }
};

export default likedReducer;
