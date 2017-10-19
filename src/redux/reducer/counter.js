const initCountState={
  num:0,
  text:'没有动作',
}

const counter = (state=initCountState,action)=>{
  console.log(state);
  alert(JSON.stringify(state))
  let num=state.num;
  // const init=
  switch(action.type){
    case 'ADD':
      return {num:num++,text:action.text};
    case 'DEL':
      return {num:num--,text:action.text+'Ole'}
    default :
      return state;
  }
}

export default counter;