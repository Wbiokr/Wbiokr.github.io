const initState = {
  total: 200,
  label: ['李志', '天空之城', '许巍', '蓝莲花', '南方姑娘', '致英格兰友人demo'],
  apis: [
    {
      name: '网易',
      id: 'wy',
    },
    {
      name: '酷狗',
      id: 'kg',
    },
    {
      name: '酷我',
      id: 'kw'
    }
  ],
  folders: [
    {
      name: '经典',
    },
    {
      name: '经典2',
    },
    {
      name: '经典3',
    },
    {
      name: '经典4',
    },
    {
      name: '经典5',
    },
  ],
  songs: [
    {
      name: '天空之城',
      link: 'www.baidu.com'
    },
    {
      name: '天空之城',
      link: 'www.baidu.com'
    },
    {
      name: '天空之城',
      link: 'www.baidu.com'
    },
  ],
  playing: {
    link: 'http://m10.music.126.net/20180307213126/0c8daf496bbe3057d25b99599482751d/ymusic/15f0/0a59/e132/c77764adfc970ded7a1ac5f4f8595ef3.mp3',
    name: '白兰鸽',
    isPlaying: true,
    isDefaultMuted:false,	
    volume:0.8,
  },
}

export default (state = initState, action) => {
  switch (action.type) {
    case '':
      return {};
    case 'MUSIC_TOGGLE':
      togglePlay(!state.playing.isPlaying);
      return Object.assign({}, state, {
        playing: Object.assign({}, state.playing, {
          isPlaying: state.playing && !state.playing.isPlaying
        })
      });
    case 'MUTED_TOGGLE':
      defaultMuted(!state.playing.isDefaultMuted)
      return Object.assign({},state,{
        playing:Object.assign({},state.playing,{
          isDefaultMuted:state.playing&&!state.playing.isDefaultMuted
        })
      });
    case 'CHANGE_VOLUME':
      changeVolume(action.v)
      defaultMuted(false)
      return Object.assign({},state,{
        playing:Object.assign({},state.playing,{
          volume:action.v,
          isDefaultMuted:false,
        })
      })
    default:
      return state;
  }
}


function changeVolume(v){
  document.querySelector('audio').volume=v
}

function togglePlay(playStatus){
  if(playStatus){
    document.querySelector('audio').play()
  }else{
    document.querySelector('audio').pause()
  }
}

function defaultMuted(defaultMutedStatus){
    document.querySelector('audio').muted=defaultMutedStatus
}