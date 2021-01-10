import axios from 'axios';

// ACTION TYPES
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

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
}

export const addNewSmurf = smurf => {
    return ({ type: ADD_NEW_SMURF, payload: smurf });
}

// export const addNewSmurf = () => {
//     return dispatch => {
//         dispatch({ type: ADD_NEW_SMURF });
//         axios
//             .post("http://localhost:3333/smurfs")
//             .then(res => {
//                 dispatch({ type: ADD_NEW_SMURF, payload: res.data })
//             })
//             .catch(err => {
//                 dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message })
//             })
//     }