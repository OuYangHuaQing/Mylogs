import React, {Component} from 'react';
import {Button, Modal, Input, message} from 'antd';
import {Link, withRouter} from 'react-router-dom'
import eventBus from './event'
import '../../style.css'
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            modal: false,
            user: 'admin',
            password: 'admin'
        }
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
            // 保持登录状态
            withCredentials: true
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    login: res.data.data.login
                })
            })
    }

    showModal = () => {
        this.setState({
            modal: true
        })
    }
    hideModal = () => {
        this.setState({
            modal: false
        })
    }

    changeUser = (e) => {
        // e是事件对象，可以用它来拿到输入框的值
        // console.log(e.target.value)
        this.setState({
            user: e.target.value
        })
    }

    changePassword = (e) => {
        // e是事件对象，可以用它来拿到输入框的值
        // console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    send = () => {
        const login = this.state.login
        // 发送事件eventBus.emit('事件名', 参数1, 参数2)
        console.log("fasong",login)
        eventBus.emit('isLogin', login)
    }

    checkLogin = () => {
        const {user, password} = this.state
        // console.log(user)
        // console.log(password)
        // 使用模板字符串对相应变量做拼接
        const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`
        axios.get(url)
            .then((res) => {
                // console.log(res)
                const login = res.data.data.login;
                if (login) {
                    message.success('登陆成功')
                    this.setState({
                        login: true,
                        modal: false
                    });
                    // 发送
                    this.send();
                } else {
                    message.error('登陆失败')
                }
            })
    }

    logout = () => {
        axios.get('http://www.dell-lee.com/react/api/logout.json', {
            // 保持登录状态
            withCredentials: true
        })
            .then((res) => {
                const data = res.data.data
                // console.log(res)
                if (data.logout) {
                    this.setState({
                        login: false,
                    })
                    message.success('退出成功');
                    // 当用户退出时，直接跳转到根路径
                    this.props.history.push('./')
                }
            })
    }

    render() {
        const {login} = this.state
        return (
            <div className='login'>
                {
                    login ?
                        <Button type="danger" onClick={this.logout}>退出</Button> :
                        <Button type="primary" onClick={this.showModal}>登录</Button>
                }
                <Link to='/vip'>
                    <Button type="primary" style={{marginLeft: 10}}>Vip</Button>
                </Link>
                <Modal
                    title="登录"
                    visible={this.state.modal}
                    onOk={this.checkLogin}
                    onCancel={this.hideModal}
                >
                    <Input
                        placeholder="请输入用户名"
                        style={{marginBottom: 10}}
                        value={this.state.user}
                        onChange={this.changeUser}
                    />
                    <Input
                        placeholder="请输入密码"
                        value={this.state.password}
                        onChange={this.changePassword}
                    />
                </Modal>
            </div>
        );
    }
}

export default withRouter(Login);