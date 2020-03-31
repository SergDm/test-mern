import { authAPI } from "../api/api";

const SET_USER = 'SET_USER'
const TOGGLE_IS_LOAD = 'TOGGLE_IS_LOAD'


const initialState = {
  user: null,
  isLoad: true
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER:
      return {
        ...state, user: action.user,
        isLoad: false
      };
    case TOGGLE_IS_LOAD:
      return {
        ...state, isLoad: action.isLoad
      };
    default:
      return state;
  }
}

export const setUserAC = (user) => ({ type: SET_USER, user })

export const login = (email, password) => {
  authAPI.login(email, password)
}

export default userReducer