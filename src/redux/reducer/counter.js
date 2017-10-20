
const counter = (state={num:11},action)=>{

  // const defaultState={
  //   num:10
  // }
  // state=state||defaultState;

  switch(action.type){
    case 'ADD':
      return {
        num:state.num+2
      };
    case 'DEL':
      return {
        num:state.num-5
      }
    default :
      return state;
  }
}

export default counter;