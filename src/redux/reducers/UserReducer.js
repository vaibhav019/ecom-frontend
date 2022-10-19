import { 
    GET_USERS_FAIL,
    GET_USERS_REQUEST, 
    GET_USERS_SUCSESS,
    CLEAR_USER_DATA_REQUEST,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    CLEAR_ERRORS,
} from "../types/usertype";

const initialState={
    
    userList:[],
    userLoadMessage:null,
    loading:true,
    error:null,
    user:null,
    isAuthenticated:false,
    
}
export const UserReducer=(state=initialState,action)=>{

    switch(action.type){


        case LOGIN_REQUEST:
           
              return {
                ...state,
                loading: true,
                isAuthenticated: false,
                userLoadMessage:"loading"
              };
            case LOGIN_SUCCESS:
              return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload.user,
                token:action.payload.authtoken,
                userLoadMessage:"success"
              };
        
            case LOGOUT_SUCCESS:
              return {
                loading: false,
                user: null,
                isAuthenticated: false,
                token:null,
                userLoadMessage:null,
              };
            case LOGIN_FAIL:
              return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
                userLoadMessage:"failed"
              };
            case LOGOUT_FAIL:
              return {
                ...state,
                loading: false,
                error: action.payload,
              };
        
            case CLEAR_ERRORS:
              return {
                ...state,
                error: null,
              };
        
        case GET_USERS_REQUEST:{
            return{
                ...state,
                loading:true,
                userLoadMessage:null,
                error:null
                
            }
        }
        case GET_USERS_SUCSESS:{

            const {data}=action.payload;
            console.log(action.payload,"%%%%%%%%%")
            console.log(data,"%%%%%%%%%%")
            return{
                ...state,
                loading:false,
                userList:data,
                userLoadMessage:(action.payload && action.payload.length>0
                    && data && data.length>0
                    )?'Loaded':'No User Available for above inputs',
            }
        }

        case GET_USERS_FAIL:{
            return{
                ...state,
                loading:false,
                userLoadMessage:null,
                error:action.payload,
            }
        }
        case CLEAR_USER_DATA_REQUEST:{
            return{
                ...initialState,
                
            }
        }
        default: return state;
    }

}


export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case FORGOT_PASSWORD_REQUEST:
      case RESET_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };
  
      case RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload,
        };
  
      case FORGOT_PASSWORD_FAIL:
      case RESET_PASSWORD_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  