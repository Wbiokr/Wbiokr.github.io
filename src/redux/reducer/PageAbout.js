
const initState={
  index:0,
  navList:[
    {
      name:'姓名',
      cnt:'陈博先',
    },
    {
      name:'电话',
      cnt:'13304858253',
    },
    {
      name:'籍贯',
      cnt:'河南省-信阳市-浉河区-吴家店镇-太阳坡村',
    },
    {
      name:'QQ',
      cnt:'1144097217',
    },
    {
      name:'微信',
      cnt:'cbx19910306',
    }
  ]
};

export default (state=initState,action)=>{
  switch (action.type){
    case 'ABOUT_INDEX':
      return Object.assign([],state,{index:action.index});
    default :
      return state;
  }
}