import React, { Component } from 'react'

import {NavLink,Link} from 'react-router-dom'

import './home.css'
export default class Home extends Component {
    constructor(){
        super();
        this.state ={
            data:[]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?page='+page +'&tab=all')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            });
            console.log(res)
        })    
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id != this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                });
            })
        }
    }
    render() {
        let url = this.props.match.url;
        return (
            <div>
                
                <div>             
                    {
                        this.state.data.map((item)=>(
                            <div key={item.id} className="cell">
                                <img src={item.author.avatar_url}/>
                                <div className="count">{item.reply_count}/{item.visit_count}</div>
                                <div className="top"><span>置顶</span></div>
                                {/* <NavLink to={"/home/"+item.id}>{item.title}</NavLink> */}
                                <Link className='a_title' to={`/show/${item.id}`} >{item.title}</Link>
                                <div className="time">8小时前</div>
                            </div>
                        )
                        )
                    }   
                </div>  
                <div className="button">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item,idx)=>(
                            <div key={idx}>
                                <NavLink to={'/home/good/'+item}>{item}</NavLink></div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
