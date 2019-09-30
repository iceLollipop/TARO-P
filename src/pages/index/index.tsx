import Taro, {Component,Config,ComponentClass} from '@tarojs/taro'
import { View } from '@tarojs/components'
import api from '../../utils/api'
import { AtTabBar } from 'taro-ui'
// import { connect } from '@tarojs/redux'
// import { add } from '../../actions/counter'
import './index.scss'
/**
 * 下面的三个type定义的分别是本页面组件的
 * 数据和行为逻辑对象
 */
type PageStateProps = {

}

type PageState = {
  current: number,
}

type PageDispatchProps = {
  add: () => void
}
type IProps = PageStateProps & PageDispatchProps & PageState

interface Index {
  props: IProps;
}

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   }
// }))
class Index extends Component<IProps, PageState> {
  config: Config = {
    navigationBarTitleText: 'Taro-音乐'
  }
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  componentWillMount() {
    this.getBanner()
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getBanner() {
    api.get('/banner', {
      type: 2
    }).then(({data}) => {
      console.log('banner', data)
      if (data.banners) {
        this.setState({
          bannerList: data.banners
        })
      }
    })
  }

  switchTab (value) {
    if (value !== 1) return
    Taro.reLaunch({
      url: '/pages/me/index'
    })
  }

  render() {
    return ( 
      <View className = 'index' >
        <AtTabBar
          fixed
          selectedColor='#d43c33'
          tabList={[
            { title: '发现', iconPrefixClass:'fa', iconType: 'feed'},
            { title: '我的', iconPrefixClass:'fa', iconType: 'music' }
          ]}
          onClick={this.switchTab.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index as ComponentClass<IProps, PageState>
