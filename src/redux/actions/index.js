export const changeRoute=(dispatch)=>{
  console.log(232323)
  setTimeout(()=>{console.log(44444);dispatch('CHANGE_ROUTE',{name:'fsdfsdfds'})},2000)
  console.log(333333333)
}