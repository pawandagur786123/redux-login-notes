const username = "admin"
const password = "admin@123"

export const login = data => {
  if(data.username === username && data.password === password){
    return {
      type: "AUTH_LOGIN",
      data
    };
  }else{
    return {
      type: "LOGIN_FAILED",
      data
    };
  }
  
};

export const addNote = note => {
    return {
      type: "ADD_NOTE",
      note
    };
  };
  
  export const removeNote = id => {
    return {
      type: "REMOVE_NOTE",
      id
    };
  };
  
