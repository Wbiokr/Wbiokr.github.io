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
  folders:[
    {
      name:'经典',
    },
    {
      name:'经典2',
    },
    {
      name:'经典3',
    },
    {
      name:'经典4',
    },
    {
      name:'经典5',
    },
  ],
  songs:[
    {
      name:'天空之城',
      link:'www.baidu.com'
    },
    {
      name:'天空之城',
      link:'www.baidu.com'
    },
    {
      name:'天空之城',
      link:'www.baidu.com'
    },
  ],
  playing:{
    link:'http://m10.music.126.net/20180307203033/b749ee7e09f7c732de48ec326398935b/ymusic/0a5d/cf99/0cc7/23056955d46034da41e2d205bc896a95.mp3',
    name:'白兰鸽'
  },
}

export default (state=initState,action)=>{
  switch(action.type){
    case '':
      return {};
    default:
      return state;
  }
}