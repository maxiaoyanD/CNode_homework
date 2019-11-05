import React, { Component } from 'react'
import {Link,Route,Switch,Redirect} from 'react-router-dom'
import All from'./All'
import Good from './Good'
import Share from './Share'
import Ask from './Ask'
import Dev from './Dev'
import Job from './Job'
import './home.css'

export default class Home extends Component {
    render() {
        let url = this.props.match.url;
        return (
            <div className="main">
                <div className="topic">
                    <Link to={`${url}/all`} className="title">全部</Link>
                    <Link to={`${url}/good/:id`} className="title">精华</Link>
                    <Link to={`${url}/share/:id`} className="title">分享</Link>
                    <Link to={`${url}/ask/:id`} className="title">问答</Link>
                    <Link to={`${url}/job/:id`} className="title">招聘</Link>
                    <Link to={`${url}/dev/:id`} className="title">客户端测试</Link>
                </div>
                <div>
                    <Switch>
                        
                        <Route exact path='/home' render={() => <Redirect from='/home' to='/home/all/1'/>}/>
                        <Route exact path='/home/all' render={() => <Redirect from='/home/all' to='/home/all/1'/>}/>
                        
                        <Route path={url +'/all/:id'} component={All}/>                        
                        <Route path={url +'/good/:id'} component={Good}/>
                        <Route path={url+'/share/:id'} component={Share}/>
                        <Route path={url+'/ask/:id'} component={Ask}/>
                        <Route path={url+'/job/:id'} component={Job}/>
                        <Route path={url+'/dev/:id'} component={Dev}/>
                        
                    </Switch>
                </div> 
                
            </div>
        )
    }
}
