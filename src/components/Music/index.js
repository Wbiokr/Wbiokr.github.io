import React from 'react';

import './index.styl'

export default class Music extends React.Component {
  render() {
    return (
      <div className="page-music" >
        <div className="wrapper2">
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