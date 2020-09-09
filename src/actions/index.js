import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const SET_LATEST = 'SET_LATEST';

function random(max) {
  return Math.ceil(Math.random() * max);
}

export const getComic = (latest) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios(`https://xkcd.now.sh/?comic=${random(latest)}`)
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch((e) => {
      dispatch({ type: FETCH_FAIL, payload: 'ERROR LOADING'})
 })
}

export const getLatest = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios(`https://xkcd.now.sh/?comic=latest`)
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data})
      dispatch({ type: SET_LATEST, payload: res.data.num})
    })
    .catch((e) => {
      dispatch({ type: FETCH_FAIL, payload: 'ERROR LOADING'})
 })
}

export const getPrev = (current) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios(`https://xkcd.now.sh/?comic=${Number(current) - 1}`)
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch((e) => {
      dispatch({ type: FETCH_FAIL, payload: 'ERROR LOADING'})
 })
}

export const getNext = (current) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios(`https://xkcd.now.sh/?comic=${current + 1}`)
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch((e) => {
      dispatch({ type: FETCH_FAIL, payload: 'ERROR LOADING'})
 })
}  