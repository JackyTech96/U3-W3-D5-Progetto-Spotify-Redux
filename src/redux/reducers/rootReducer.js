import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../reducers/search";
import albumReducer from "../reducers/album";
import playerReducer from "../reducers/player";
import likedReducer from "../reducers/liked";

const rootReducer = combineReducers({
  search: searchReducer,
  album: albumReducer,
  player: playerReducer,
  liked: likedReducer,
});

export default rootReducer;
