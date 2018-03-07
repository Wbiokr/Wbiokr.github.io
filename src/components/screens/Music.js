import React from 'react';

import cxs from 'cxs'

import colors from '../../utils/color'

import imgSrc from '../../img/player_cover.png'

export default class Music extends React.Component {
  render() {
    return (
      <div className={`page-music ${rule }`}>
        <div>
          <article>
            <section className="menu">
              <article>
                <aside>
                  <ul>
                    {
                      this.props.music&&this.props.music.folders.map((item,index)=>{
                        return <li key={index} data-value={item.id}>
                                  <i className={`iconfont icon-wenjianjia`}></i>
                                  <span>{item.name}</span>
                               </li>
                      })
                    }
                  </ul>
                </aside>

                <main>
                  <ul>
                    {
                      this.props.music&&this.props.music.songs.map((item,index)=>{
                  return <li key={index}>
                            <span><i>{index+1}</i></span>
                            <span>{item.name}</span>
                            <span>{item.singer||'群星'}</span>      
                            <span>{item.album||'专辑'}</span>
                            <span><i className='iconfont icon-bofang2'></i></span>      
                        </li>
                      })
                    }
                  </ul>
                </main>
              </article>
            </section>
            <section className="detail">
              <article>
                <main>
                  <div className="header"></div>
                  <section>
                    <ul>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li className='current'>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话7</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话</li>
                      <li>歌词第一句话6</li>
                    </ul>
                  </section>
                  <div className="footer"></div>
                </main>
                <footer>
                     <section className="album">
                        <img src={imgSrc} alt=""/>
                     </section>
                     <section className="control">
                        <div className="range">
                          <div></div>
                        </div>
                        <div className="play">
                          <p className='select clearfix'>
                            <i className="iconfont icon-prev"></i>  
                            <i className="iconfont icon-zanting1"></i>  
                            <i className="iconfont icon-next"></i>  
                          </p>
                          <p className='mode'>
                            <span>
                              <i className="iconfont icon-prev"></i>
                            </span>  
                            <span>
                              <i className="iconfont icon-yinle"></i>
                              <i><em></em></i>
                            </span>  
                          </p>
                        </div>
                     </section>
                </footer>
              </article>
              

            </section>
          </article>
        </div>
      </div>
    )
  }
}

const rule=cxs({
  height: '100%',
  // background: 'linear-gradient(90deg, #7E898F 0%, #636C75 100%), radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.55) 100%), radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.08) 63%)',
  // 'bakcground-blend-mode': 'multiply,screen',
  background:'rgb(40,40,50)',
  ' >div':{
    height: '100%',
    // paddingTop: '30px',
    // paddingBottom: '50px',
    display: 'flex',
    alignItems: 'center',
    overflow:'auto',
    ' >article':{
      margin: '0 auto',
      width: '1200px',
      color: 'rgba(255,255,255,0.9)',
      display: 'flex',
      'justify-content': 'space-between',
      border: '1px solid rgba(1,155,240,.2)',
      // borderColor: colors.blue,
      height: '520px',
      // maxHeight: '800px',
      // minHeight:'450px',
      padding:'10px',
      ' .menu':{
        flex: 1,
        // border: '1px solid #f00',
        ' >article':{
          height:'100%',
          width:'100%',
          display:'flex',
          color:'#999'
        },
        ' aside':{
          flex:'1',
          'border-right':'1px solid rgba(1,155,240,.2)',
          padding:'0 10px',
          ' li':{
            lineHeight:'36px',
            'border-bottom':'1px solid rgba(1,155,240,.1)',
            paddingLeft:'6px',
            fontSize:'16px',
            ' span':{
              marginLeft:'5px'
            }
          }
        },
        ' main':{
          flex:7,
          padding:'10px 20px',
          borderRight:'1px solid rgba(1,155,240,.2)',
          ' ul':{
            ' li':{
              lineHeight:'24px',
              fontSize:'14px',
              'border-bottom':'1px solid rgba(1,155,240,.1)',
              paddingTop:'10px',
              display:'flex',
              ' i':{
                fontStyle:'normal',
                fontSize:'inherit'
              },
              ' span:nth-child(1)':{
                width:'30px',
                textAlign:'center',
              },
              ' span:nth-child(2)':{
                flex:1
              },
              ' span:nth-child(3)':{
                width:'80px',
              },
              ' span:nth-child(4)':{
                width:'100px',
              },
              ' span:nth-child(5)':{
                width:'60px',
              }
            }
          }
        }
      },
      ' .detail':{
        width: '400px',
        // border: '1px solid  #ff0',
        ' article':{
          height:'100%',
          width:'100%',
          color:'#999',
          padding:'10px',
          display:'flex',
          flexDirection:'column',
          ' main':{
            flex:1,
            display:'flex',
            flexDirection:'column',
            justify:'center',
            // height:'300px',
            overflow:'hidden',
            ' section':{
              // flex:1,
              height:'340px',
              ' ul':{
                ' li':{
                  lineHeight:'2em',
                  fontSize:'14px',
                  textAlign:'center',
                  letterSpacing:'3px',
                  '.current':{
                    fontSize:'16px',
                    color:'#fff',
                  }
                },
              },
            },
            ' div':{
              flex:'1',
              // background:'#ff0',
              background:'linear-gradient(rgb(40, 40, 50) 18%,transparent)',
              '.footer':{
                transform:'rotate(180deg)',
              },
            },
          },
          ' footer':{
            height:'80px',
            display:'flex',

            ' >.album':{
              height:'80px',
              width:'80px',
              marginRight:'10px',
              ' img':{
                height:'100%'
              }
            },
            ' >.control':{
              flex:1,
              display:'flex',
              flexDirection:'column',
              ' .range':{
                height:'4px',
                background:'#999',
                margin:'15px 0',
                borderRadius:'2px',
                overflow:'hidden',
                ' >div':{
                  width:'10%',
                  height:'100%',
                  background:'rgb(0,141,86)',
                  borderRadius:'inherit',
                }
              },
              ' .play':{
                flex:1,
                display:'flex',
                paddingTop:'20px',
                ' i':{
                  cursor:'pointer',
                  ':hover,.current':{
                    color:'rgb(0,141,86)',
                  }
                },
                ' .select':{
                  width:'200px',
                  // ' '
                  // display:'flex',
                  ' i':{
                    marginRight:'15px',
                    fontSize:'22px',
                  },
                },
                ' .mode':{
                  flex:1,
                },
              },
            },
          }
        }
      }
    }
  }
})