### store提供的方法: ###
- store.getState():返回相应的state树
- store.dispatch():分发action，触发state变化的唯一途径。会使用当前 getState() 的结果和传入的 action 以同步方式的调用 store 的 reducer 函数。返回值会被作为下一个 state。从现在开始，这就成为了 getState() 的返回值，同时变化监听器(change listener)会被触发
- store.subscribe():state一旦有变化，store就会调用监听函数
### react-redux ###
- connect:链接ui 组件与容器组件
- 