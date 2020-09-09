import { 
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SET_LATEST, } from '../actions';

const initialState = {
  comic: {},
  fetching: true,
  latest: 2357,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_START:
      return {...state, fetching: true}
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        comic: action.payload,
      }
    case FETCH_FAIL:
      return {
        ...state,
        fetching: false,
        comic: {
          ...state.comic,
          title: action.payload
        }
      }
    case SET_LATEST:
      return {
        ...state,
        latest: action.payload
      }
    default:
      return state;
  }
}

export { reducer };