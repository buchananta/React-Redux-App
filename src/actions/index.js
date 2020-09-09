import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

function random() {
  return Math.ceil(Math.random() * 2356);
}

export const getComic = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios(`https://xkcd.now.sh/?comic=${random()}`)
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data})
      console.log(res.data)
    })
    .catch((e) => {
      console.log('AXIOS ERROR: ', e);
      dispatch({ type: FETCH_FAIL, payload: 'ERROR LOADING'})
    })
}