const initState={
  route:window.location.pathname,
}

export default (state=initState,action)=>{
  switch(action.type){
    case 'CHANGE_ROUTE':
      alert(232323)
      return Object.assign({},state,{
        route:action.name
      });
    default:
      return state;
  }
}