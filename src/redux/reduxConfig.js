import * as actions from "./actionTypes"
const reducer = (state = 1, action) => {

  if(action.type === actions.INCREMENT){
    state+=1
  }
  else if(action.type === actions.DECREMENT){
    state-=1
  }

 return state
}

export default reducer