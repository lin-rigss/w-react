/** Reducer
 * Reducer 是一个函数,用于生产新的state.
 *
 * Reducer接受 Action 和当前 State 作为参数，返回一个新的
 * State。
 * 
 * Store 收到 Action 以后，必须给出一个新的 State，这样 View才会发生变化。这种 State 的计算过程就叫做 Reducer。
 */

/** initialState
 * 初始化的状态
 */

/** applyMiddleware
 * applyMiddlewares是Redux 的原生方法，
 * 作用是将所有中间件组成一个数组，依次执行。
 * 
 * 中间件的作用
 * 从A到B之间的一个管道
 */

/**
 * 用户触发表单提交按钮(submit)  === 触发action
 * action会携带类型和表单数据给reducer
 * reducer会更新数据并返回最新状态
 * 页面重新渲染
 */