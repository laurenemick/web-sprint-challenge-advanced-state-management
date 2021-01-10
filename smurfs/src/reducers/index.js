import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_NEW_SMURF,
  } from "../actions";
  
const initialState = {
    isLoading: false,
    smurfs: [{}],
    error: "",
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ""
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_NEW_SMURF: {
                return {
                    ...state, 
                    smurfs: [
                        ...state.smurfs, 
                        {
                            name: action.payload.name,
                            height: action.payload.height,
                            age: action.payload.age,
                            id: new Date()
                        }
                    ]
                } 
        }
        default:
            return state;
    }
};