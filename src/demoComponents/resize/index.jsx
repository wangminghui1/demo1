import React from 'react';
import './index.css'
import html2canvas from 'html2canvas';
/**
 * 检测屏幕宽高变化
 */
class Index extends React.Component{
    constructor(props){
        super(props);
        this.resize.bind(this);
    }

    componentDidMount(){
        // console.log(this); //this 代表当前页面对象 Index
        this.screenChange();
    }
    componentWillUnmount() {       
        window.removeEventListener('resize',this.resize);
    }
    screenChange() {
        window.addEventListener('resize', this.resize);
    }

    resize = (e)=>{
        console.log(e);
    }
    render(){
        return (
            <div>
                <div id="ss" className="evd">end</div>
            <div onClick={this.canvs} style={{cursor: "pointer"}}>生成图片</div>
            </div>
        )
    }
}

export default Index;