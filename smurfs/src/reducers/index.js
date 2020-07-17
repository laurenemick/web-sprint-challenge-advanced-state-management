import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_FRIEND
  } from "../actions";
  
const initialState = {
    isLoading: false,
    smurfs: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 0
        }
    ],
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
            };
        case ADD_FRIEND:
            // console.log('add_friend', action);
            const newFriend = {
                name: action.payload,
            };
            return {
                ...state,
                smurfs: [...state.smurfs, newFriend]
            };
        default:
            return state;
    }
};