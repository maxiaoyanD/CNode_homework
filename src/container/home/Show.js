import React, { Component } from 'react'

export default class Show extends Component {
    constructor(){
        super();
        this.state ={
            data:{
                author:{}
            }
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?id='+id)
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.data.length;i++){
                if(res.data[i].id == id){
                    this.setState({
                        data: res.data[i]
                    });
                }
            }
        })
       
    }

    render() {
        return (
            <div className="heade"> 
                <div className="head1">
                    <span className="header_title">
                        <span className="put_top">置顶</span>
                        {this.state.data.title}
                    </span>
                    <div className="changes">
                        <span> 发布于6个月前</span>
                        <span> 作者{this.state.data.author.loginname}</span>
                        <span> {this.state.data.visit_count}次浏览</span>
                        <span>来自 分享</span>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html: this.state.data.content}}></div>
            </div>
        )
    }
}
