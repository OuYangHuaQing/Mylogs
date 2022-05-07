import React, {Component} from 'react';
import '../../style.css'
// import axios from "axios";
import {message} from 'antd';
import eventBus from '../Login/event'
import {Redirect} from "react-router-dom";
import login from "../Login";

class Vip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            // fetchFinish: false
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.login ?
                        <div>Vip</div> :
                        // <Redirect to='/'></Redirect>
                        <div>ssss</div>
                }
            </React.Fragment>
        )
    }

    componentDidMount() {
        // axios.get('http://www.dell-lee.com/react/api/isLogin.json')
        //     .then((res) => {
        //         console.log(res.data.data.login)
        //         this.setState({
        //             login: res.data.data.login,
        //             // fetchFinish: true
        //         })
        //     })
        // 添加事件监听,监听从header组件发送过来的sayHello事件
        eventBus.addListener('isLogin', this.isLogin)
        console.log(this.state.login)
    }

    // 处理监听事件
    isLogin = (login) => {
        console.log('dsasd', login)
        this.setState({
            login
        })
    }

    // 移除事件监听
    // componentWillUnmount() {
    //     eventBus.removeListener('isLogin', this.isLogin)
    // }
}

export default Vip;