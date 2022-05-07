import React, {Component} from 'react';
import axios from "axios";


class LifeCycle extends Component {
    // handleClick(){
    //         console.log('window click')
    // }

    // //在页面加载之前添加一个点击事件
    // componentWillMount() {
    //     window.addEventListener('click',this.handleClick)
    // }

    render() {
        return (
            <div>
                <h1>hello world</h1>
            </div>
        );
    }

    // componentDidMount配合axios实现远程数据请求
    componentDidMount() {
        const promise = axios.get('http://www.dell-lee.com/react/api/demo.json')
        promise.then((res)=>{
            console.log(res.data)
        })
    }

    // // 组件生命周期结束后销毁这个事件
    // componentWillUnmount() {
    //     window.removeEventListener('click',this.handleClick)
    // }
}

export default LifeCycle;