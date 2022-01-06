import { SET_LOADING_FALSE,SET_LOADING_TRUE } from "../types/appTypes";

const initialState = {
    loading: false,
    token: '',
    error: [],
    language: 'en',
    userList: [],
    selectedUser: {},
    newsList: [],
    selectedNews: {},
}

const appReducer = (state = initialState, { type, payload }) => { //action={type,payload}
    switch (type) {
        case SET_LOADING_FALSE:
            return {
                ...state,
                loading: false,
            }
        case SET_LOADING_TRUE:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}


export default appReducer;