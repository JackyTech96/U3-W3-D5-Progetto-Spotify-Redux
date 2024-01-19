export const DEEZER_SET_SEARCH = "DEEZER/SET_SEARCH";
export const DEEZER_SET_ALBUM = "DEEZER/SET_ALBUM";
export const DEEZER_SET_PLAYER = "DEEZER/SET_PLAYER";
export const DEEZER_SET_LIKED = "DEEZER/SET_LIKED";

const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const searching = (searchValue) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseEndpoint + searchValue, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        dispatch({
          type: DEEZER_SET_SEARCH,
          payload: data.data,
        });
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAlbum = (artist) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + artist, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        dispatch({ type: DEEZER_SET_ALBUM, payload: data.data });
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setPlayer = (selectedAlbum) => {
  return {
    type: DEEZER_SET_PLAYER,
    payload: selectedAlbum,
  };
};

export const setLiked = (likedSong) => {
  return {
    type: DEEZER_SET_LIKED,
    payload: likedSong,
  };
};

export default searching;
