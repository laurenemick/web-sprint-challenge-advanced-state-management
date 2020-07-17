import axios from 'axios';

// ACTION TYPES
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";

// ACTION CREATORS
export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START });
        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                console.log(res.data)
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message })
            })
    }
};

export const postRequest = info => dispatch => {
    return axios.post('/smurfs', info)
        .then(res => {
            const postInAction = { 
                type: SMURF_ADDED, 
                payload: res.data 
            }
        dispatch(postInAction);
    });
  }