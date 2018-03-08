export const changeRoute=(dispatch,name)=>{
  return (dispatch)=>{
    console.log(name)
    dispatch({
      type:'CHANGE_ROUTE',
      name,
    })
    // window.location.href=''+name
    // setTimeout(()=>{window.location.href=name},300)
    // setTimeout(()=>{console.log(dispatch);dispatch('CHANGE_ROUTE',{name:'fsdfsdfds'})},2000)
  }
}