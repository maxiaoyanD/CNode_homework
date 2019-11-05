import React, { Component } from 'react'
import Header from './Component/Header/Header'
import {HashRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from './container/home/Home';
import Api from './container/Api'
import About from './container/About'
import Start from './container/Start'
import Show from './container/home/Show';
import Login from './container/Login';

export default class APP extends Component {
    render() {
        return (
            <Router basename="build">
                <div>
                    <Header/>
                </div>
                <div className="content">
                    <div className="left">
                        <Route exact path='/' render={() => <Redirect from='/' to='/home/all/1'/>}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/show/:id' component={Show}/>
                    </div>
                    <div className="right">
                        <h2>关于CNode</h2>
                        <span>快来了解吧</span>
                    </div>
                </div>
            </Router>
        )
    }
}
