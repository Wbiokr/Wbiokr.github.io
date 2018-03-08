import React from 'react';
import './blog.styl';

const Ul=({list})=>{
  return <ul>
            {
              list.map((item,index)=>(
                <li key={index}>{item}</li>
              ))
            }
        </ul>
}

const Main=({left,right})=>{
  return (
    <ul className='clearfix'>
      <li>
        <Ul list={left} />
      </li>
      <li>
        <Ul list={right}/>
      </li>
    </ul>
  )
}

export default class Blog extends React.Component{
  render(){
    const left=['HTML','CSS','Stylus','Sass','Less'];
    const right=['JS','ES6','Node','Vue','React'];
    return(
      <article className='metro_blog'>
        <header>My&nbsp;&nbsp;&nbsp;Blogs</header>
        <main>
          <Main {...{left,right}} />
        </main>
        <footer>more...</footer>
      </article>
    )
  }
}