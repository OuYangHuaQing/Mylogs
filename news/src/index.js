import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'antd/dist/antd.css';
import './style.css';
import AppHeader from "./components/Header";
import {Layout} from 'antd';
import Detail from "./containers/Detail";
import List from "./containers/List";
import Login from "./containers/Login";
import Vip from "./containers/Vip";

const {Header, Footer, Content} = Layout;

class App extends Component {
    render() {
        return (
            // 把所有标签放在BrowserRouter里面以便使用Link标签
            <BrowserRouter>
                <Layout style={{minWidth: 1260, height: '100%'}}>
                    <Header className="header">
                        <AppHeader/>
                    </Header>
                    <Content className="content">
                        <Login/>
                        <Switch>
                            {/*匹配到相应路径之后就不再往下匹配了*/}
                            <Route path='/vip' component={Vip}/>
                            <Route path='/detail/:id' component={Detail}/>
                            {/*通过设置路由参数跳转到不同页面*/}
                            <Route path='/:id?' component={List}/>
                        </Switch>
                    </Content>
                    <Footer className="footer">@copyright OuYangHuaQing 2022</Footer>
                </Layout>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))

