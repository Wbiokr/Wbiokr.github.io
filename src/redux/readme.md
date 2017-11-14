### Action ###
- action是吧数据从应用传到store的有效载荷，他是store数据的唯一来源，一般来说通过store.dispatch()将action传到store；
- 其本质是js对象，必须有一个type属性；
- 当项目规模很大时，使用单独模块进行action存放；
- action创建函数，只是简单的返回一个action对象；
- action创建可以是异步非纯函数；
### reducer ###
- action只是描述了有事情发生，而reducer则是执行者，做这些事情；
- 处理reducer关系时，把应用的state想象成数据库；
- reducer是一个纯函数，接收旧的state和action返回新的state；
- 不要修改state，使用object.assign新建副本，default情况下返回旧的state；
- combineReducers函数将拆分后的reducer构建为一个根reducer；
### store ###
- getState(): 获取事实state；
- dispatch(action): 通过action告知state进行更新；
- subscribe(listener): 注册监听器，并且返回的函数可以进去注销；
- subscribe(listener)(): 注销监听器；
- 一个redux应用只有一个单一的store；
- createStore：创建store实例，参数为reducer、state初始状态，其中reducer不可省略；