const initState={
  total:200,
  label:['李志','天空之城','许巍','蓝莲花','南方姑娘','致英格兰友人demo'],
  apis:[
    {
      name:'网易',
      id:'wy',
    },
    {
      name:'酷狗',
      id:'kg',
    },
    {
      name:'酷我',
      id:'kw'
    }
  ],
  songs:[
    {
      name:'天空之城',
      link:'www.baidu.com'
    }
  ]
}

export default (state=initState,action)=>{
  switch(action.type){
    case '':
      return {};
    default:
      return state;
  }
}