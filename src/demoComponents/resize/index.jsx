import React from 'react';
import './index.css'
import html2canvas from 'html2canvas';
/**
 * 检测屏幕宽高变化
 */
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.resize.bind(this);
    }

    componentDidMount() {
        // console.log(this); //this 代表当前页面对象 Index
        this.screenChange();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }
    screenChange() {
        window.addEventListener('resize', this.resize);
    }

    resize = (e) => {
        console.log(e);
        $(".normal-download-button,.download-button").click(function () {
             if (document.referrer.indexOf("collect") >= 0) {
                  $.get("/index.php?m=searchCount&a=collectDownload&ajax=1", { collectinfo: document.referrer, pic_id: '517018', plate_id: '18' }, function (res) { }, "json") 
                } }); 
                $().ready(function () {
                     $.post("/index.php?m=searchCount&a=searchtransfer&ajax=1", 
                     { page: "download", pic_id: '517018' }, function (res) { }, "json") 
                    }); 
                function canCoupon() { }

                /*统计进入下载页*/$(function () {$.get("/index.php?m=searchCount&a=intoDownloadPage&ajax=1",{pic_id:"517018"},function (res) {},"json")});
    }
    render() {
        return (
            <div>
                <div id="ss" className="evd">end</div>
                <div onClick={this.canvs} style={{ cursor: "pointer" }}>生成图片</div>
            </div>
        )
    }
}

export default Index;