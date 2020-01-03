import React,{Component} from 'react';
import {Link ,NavLink ,Route,Switch,Redirect} from 'react-router-dom'
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props)
  }

    render() {
      return(
          <div>
              <div className='Navigation'>
                    <div>
                        <h1>网易云音乐</h1>
                        <ul>
                          <li><Link to='/'>发现音乐</Link></li>
                          <li><Link to='/my'>我的音乐</Link></li>
                          <li><Link to='/peng'>朋友</Link></li>
                          <li><Link to='/shop'>商城</Link></li>
                          <li><Link to='/music'>音乐人</Link></li>
                          <li><Link to='/xia'>下载客户端</Link></li>
                        </ul>
                        <Switch>
                                  <Route exact path='/'>
                                        <div>首页</div>
                                  </Route>
                                  <Route children={()=>{return <h3>404</h3>}}/>
                        </Switch>
                    </div>
              </div>
          </div>
      )
  }
}