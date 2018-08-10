import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGIN_USER,
    PHONE_CHANGED,
    CODE_SENT_ERROR,
    CODE_CHANGED,
    CODE_DISPATCHED,
    LOGIN_USER_PHONE,
    CODE_SENT,
    CODE_NOT_CONFIRMED,
    LOGOUT,
    SET_USER_OBJECT,
    CLEAR_AUTH
} from '../actions/actionTypes';

const INITIAL_STATE = {
    phone: '+30',
    user: null,
    message: '',
    loading: false,
    codeInput: '',
    confirmResult: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {

    console.log(action);

    switch (action.type) {
        case PHONE_CHANGED:
            return {
                ...state,
                phone: action.payload
            }
        case CODE_CHANGED:
            return {
                ...state,
                codeInput: action.payload
            }
        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                message: ''
            }
        case LOGIN_USER_PHONE:
            return {
                ...state,
                loading: true,
                message: 'Sending code...',
                phone: action.payload
            }
        case CODE_DISPATCHED:
            return {
                ...state,
                loading: true,
                message: ''
            }
        case CODE_SENT:
            return {
                ...state,
                loading: true,
                message: 'Code has been sent!',
                confirmResult: action.payload
            }
        case CODE_SENT_ERROR:
            return {
                ...state,
                loading: false,
                message: `Sign in with Phone number error: ${action.payload}`,
                confirmResult: null
            }
        case SET_USER_OBJECT:
            return {
                ...state,
                user: action.payload
            }
        case CODE_NOT_CONFIRMED:
            return {
                ...state,
                message: `Code confirmation error: ${action.payload}`
            }
        case LOGIN_SUCCESS:
            return {
                ...INITIAL_STATE,
                user: action.payload,
                message: 'login Success'
            }
        case LOGIN_FAIL:
            return {
                ...state,
                message: 'Authentication Failed.',
                loading: false,
                password: '',
                phone: '+30'
            }
        case LOGOUT:
            return {
                ...state,
                message: '',
                user: null
            }
        case CLEAR_AUTH:
            return {
                ...state,
                ...INITIAL_STATE
            }
        default:
            return state;
    }
};


export default AuthReducer;