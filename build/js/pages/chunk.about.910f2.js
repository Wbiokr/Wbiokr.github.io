webpackJsonp([1],{185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(198),r=n(30),o=n(201),i=function(e){return e.PageAbout},u=function(e){return{changeIndex:function(t){return e(Object(o.a)(t))}}};t.default=Object(r.connect)(i,u)(a.a)},198:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=n.n(l),s=n(199),p=(n.n(s),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),f=function(e){var t=e.name,n=e.label,a=e.handleIdx;return u.a.createElement("li",{key:t,className:n,onClick:a},t)},b=function(e){var t=e.cnt;return u.a.createElement("div",null,t)},d=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.index,a=t.navList;return u.a.createElement("div",{className:"page_about"},u.a.createElement("div",{className:"about_nav"},u.a.createElement("ul",null,a.map(function(t,a){return u.a.createElement(f,{handleIdx:e.select.bind(e,a),name:t.name,key:a,label:a===n?"current":""})}))),u.a.createElement("div",{className:"about_cnt"},u.a.createElement(b,{cnt:a[n].cnt})))}},{key:"select",value:function(e){this.props.changeIndex(e)}}]),t}(u.a.Component);d.propTypes={navList:c.a.array.isRequired,index:c.a.number.isRequired},t.a=d},199:function(e,t,n){var a=n(200);"string"===typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(183)(a,r);a.locals&&(e.exports=a.locals)},200:function(e,t,n){t=e.exports=n(182)(!1),t.push([e.i,".page_about{height:100%;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.page_about>div{height:400px}.page_about .about_nav{width:200px}.page_about .about_nav ul{padding:50px 20px;background:#3d3d3d}.page_about .about_nav ul li{line-height:50px;text-align:center;border-bottom:1px solid #4d4d4d;letter-spacing:16px;-webkit-transition:all .4s ease;-o-transition:all ease .4s;transition:all .4s ease;cursor:pointer}.page_about .about_nav ul li:first-child{border-top:1px solid #4d4d4d}.page_about .about_nav ul li.current,.page_about .about_nav ul li:hover{color:#fff;padding-left:20px}.page_about .about_cnt{-ms-flex:1 1;flex:1 1}.page_about .about_cnt>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:30px;height:80%}",""])},201:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return{type:"ABOUT_INDEX",index:e}}}});