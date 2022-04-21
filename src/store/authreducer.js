const initialState = {
    username: "",
    password:"",
    isLoggedIn: false
  };
  
  const reducer = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
      case "AUTH_LOGIN":
        return {
          ...state,
          username: action.data.username,
          password: action.data.password,
          isLoggedIn: true
        };
      case "LOGIN_FAILED":
        return {
          ...state,
          username: action.data.username,
          password: action.data.password,
        }
      default:
        return state;
    }
  };

  export default reducer;