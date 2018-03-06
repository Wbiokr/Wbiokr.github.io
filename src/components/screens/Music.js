import React from 'react';

import cxs from 'cxs'

import colors from '../../utils/color'

export default class Music extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className={`page-music ${rule }`}>
        <div>
          <article>
            <section className="menu">
              <article>
                <aside>
                  <ul>
                    <li>网易搜索</li>
                    <li>酷狗搜索</li>
                    <li>酷狗搜索</li>
                    <li>酷狗搜索</li>
                  </ul>
                </aside>

                <main>
                  <ul>
                    <li>天空之城</li>
                    <li>天空之城</li>
                    <li>天空之城</li>
                    <li>天空之城</li>
                    <li>天空之城</li>
                    <li>天空之城</li>
                    <li>天空之城</li>
                    <li>天空之城</li>
                    <li>天空之城</li>
                    <li>天空之城</li>
                  </ul>
                </main>
              </article>
            </section>
            <section className="detail">
              <article>
                <header>
                  WBIOKR-音乐台
                </header>
                <main>
                  <img src="" alt=""/>
                  <ul>
                    <li>歌词第一句话</li>
                    <li>歌词第一句话</li>
                    <li>歌词第一句话</li>
                    <li>歌词第一句话</li>
                  </ul>
                </main>
                <footer>
                  <audio src=""></audio>
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
    paddingTop: '30px',
    paddingBottom: '50px',
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
      height: '100%',
      maxHeight: '800px',
      minHeight:'450px',
      padding:'10px 20px',
      ' .menu':{
        flex: 2,
        // border: '1px solid #f00',
      },
      ' .detail':{
        flex: 1,
        // border: '1px solid  #ff0',
      }
    }
  }
})