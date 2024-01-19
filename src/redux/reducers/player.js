import { DEEZER_SET_PLAYER } from "../actions";

const initialState = {
  selectedAlbum: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEEZER_SET_PLAYER:
      return {
        ...state,
        selectedAlbum: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
