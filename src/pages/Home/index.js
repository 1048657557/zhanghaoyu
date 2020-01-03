import React,{Component} from 'react';
import {Link ,NavLink ,Route,Switch,Redirect} from 'react-router-dom'
import Populars from '../TodoList/Popular';
import './index.css';

export default class App extends Component{
  constructor(props){
    super(props)
  }

    render() {
      return(
          <div>
              <div className='Navigation'>
                    <div  className="one">
                        <h1>网易云音乐</h1>
                        <ul>
                          <li><Link to='/'>发现音乐</Link></li>
                          <li><Link to='/my'>我的音乐</Link></li>
                          <li><Link to='/peng'>朋友</Link></li>
                          <li><Link to='/shop'>商城</Link></li>
                          <li><Link to='/music'>音乐人</Link></li>
                          <li><Link to='/xia'>下载客户端</Link></li>
                        </ul>
                    </div>
              </div>
              <Switch>
                <Route exact path='/'>
                    <div className="tow">
                      <ul>
                          <li><Link to='/'>推荐</Link></li>
                          <li><Link to='/w'>排行榜</Link></li>
                          <li><Link to='/w'>歌单</Link></li>
                          <li><Link to='/w'>主播电台</Link></li>
                          <li><Link to='/w'>歌手</Link></li>
                          <li><Link to='/w'>新碟上架</Link></li>
                        </ul>
                    </div>
                    <div className="music">
                        <div>
                            <div className="Popular">
                              <div className="title">
                                <Link to='/w'>热门推荐</Link>
                                <div>
                                    <Link to='/w'>华语</Link><span>|</span>
                                    <Link to='/w'>流行</Link><span>|</span>
                                    <Link to='/w'>摇滚</Link><span>|</span>
                                    <Link to='/w'>民谣</Link><span>|</span>
                                    <Link to='/w'>电子</Link>
                                </div>
                                <span><Link to='/w'>更多</Link></span>
                              </div>
                              <Populars />
                            </div>
                            <div className="Popular">
                              <div className="title">
                                  <Link to='/w'>新碟上架</Link>
                                  <span><Link to='/w'>更多</Link></span>
                                </div>
                            </div>
                            <div className="Popular">
                              <div className="title">
                                  <Link to='/w'>歌单</Link>
                                  <span><Link to='/w'>更多</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route children={()=>{return   <div className="tow">
                      <ul>
                          <li><Link to='/'>推荐</Link></li>
                          <li><Link to='/w'>排行榜</Link></li>
                          <li><Link to='/w'>歌单</Link></li>
                          <li><Link to='/w'>主播电台</Link></li>
                          <li><Link to='/w'>歌手</Link></li>
                          <li><Link to='/w'>新碟上架</Link></li>
                        </ul>
                        <h3>404</h3>
                    </div>}}/>
                </Switch>
          </div>
      )
  }
}