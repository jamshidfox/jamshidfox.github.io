import * as actions from "./actionTypes"
// import store from "./Store";

const reducer = (state = [], action) => {
 if(action.type === actions.SEARCH){
  return action.payload 
}
else if (action.type === actions.INTIAL_DATA){
  
}

 return state
}

export default reducer