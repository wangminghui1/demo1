import React from 'react';
import './index.css'
import html2canvas from 'html2canvas';
class Index extends React.Component{
    constructor(){
        super();
        this.state ={
            flag :1
        }
    }

    componentDidMount(){
        console.log(this); //this 代表当前页面对象 Index
    }

    render(){
        return (
            <div>
                <div id="ss" className="evd">end</div>
            <div onClick={this.canvs} style={{cursor: "pointer"}}>生成图片</div>
            </div>
        )
    }
   
    canvs = ()=>{
        html2canvas(document.getElementById("ss")).then(canvas => {
            console.log(canvas)
            let oImg = new Image();
            oImg.src = canvas.toDataURL();  // 导出图片
            // document.body.appendChild(oImg);  // 将生成的图片添加到body
            const alink = document.createElement("a");
            alink.href = oImg.src;
            alink.download = "testImg.jpg";
            alink.click()
        });
        console.log("test");
    }
}

export default Index;