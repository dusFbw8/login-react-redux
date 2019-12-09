
export default (state={},action)=>{
  switch (action.type){
    case "input":
      state = {...state, [action.name]:action.value };
      break;
    case "doLogin":
      state = {...state, loginInProgress:true}
      break;
    default:
  }
  return state;
}
