import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'
const store = configStore()

class App extends Component {
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/me/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#d43c33',      
      // navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
      }, 
      {
        pagePath: "pages/me/index",
        text: "我的"
      }]
    },
    requiredBackgroundModes: ["audio"]
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
Taro.render(<App />, document.getElementById('app'))
