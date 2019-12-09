
export default (state={},action)=>{
  switch (action.type){
    case "input":
      state = {...state, [action.name]:action.value };
      break;
    case "loginStatus":
      state = {...state, loginStatus:action.status};
      break;
    default:
  }
  return state;
}
