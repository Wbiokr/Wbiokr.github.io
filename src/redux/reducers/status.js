const initState={
  route:window.location.pathname,
}

export default (state=initState,action)=>{
  switch(action.type){
    case 'CHANGE_ROUTE':
      return Object.assign({},state,{
        route:action.name
      });
    default:
      return state;
  }
}