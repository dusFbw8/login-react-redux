
export default (state={},action)=>{
  switch (action.type){
    case "input":
      state = {...state, [action.name]:action.value };
      break;
    case "doLogin":
      state = {...state, loginStatus:'progress'};
      break;
    case "loginSuccess":
      state = {...state, loginStatus:'success'};
      break;
    case "loginFail":
      state = {...state, loginStatus:'fail'};
      break;
    case "loginReset":
      state = {...state, loginStatus:false};
      break;
    default:
  }
  return state;
}
