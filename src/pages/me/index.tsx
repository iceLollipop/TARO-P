import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

// import { add } from '../../actions/counter'

import './index.scss'
/**
 * 下面的三个type定义的分别是本页面组件的
 * 数据和行为逻辑对象
 */
// type PageStateProps = {
//   counter: {
//     num: number
//   }
// }
// type PageDispatchProps = {
//   add: () => void
// }
// type IProps = PageStateProps & PageDispatchProps

interface Index {
  // props: IProps;
}

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   }
// }))
class Index extends Component {
    config: Config = {
    navigationBarTitleText: '我的'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        
      </View>
    )
  }
}

export default Index
