import React,{Component} from 'react';
import store from '../../static/store'
import {connect} from "react-redux"
import {Link ,NavLink ,Route,Switch,Redirect} from 'react-router-dom'
import { onpularAction} from '../../actions/countActions'
import './Popular.css';

const mapStateToProps = (state)=>{
  return{
      data:state.CountReducers.data,
  }
};
const mapDispatchToProps = (Dispatch)=>{
  return{
  }
};

class Populars extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount() {
      // store.dispatch(onpularAction());
      fetch('http://119.3.153.161:3000/personalized?offset=0&limit=10').then(res=>{
         return res.json()
      }).then(res=>{
          this.setState({
            data:res.result
          })
      })
  }
    render() {
      return(
          <ul className="conter">
            {
              this.state.data.map(item=>
                <li>
                  <div>
                    <img  src={item.picUrl}/>
                  </div>
                  <p> <span>{item.name}</span></p>
                </li>
              )
            }
          </ul>
      )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Populars) 