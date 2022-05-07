import React, {Component} from 'react';
import '../../style.css'
import {Link} from 'react-router-dom'
import { Menu,Icon } from 'antd';
import axios from 'axios'

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then((res) => {
                this.setState({
                    list: res.data.data
                })
                // console.log(res)
            })
    }

    render() {
        return (
            <React.Fragment>
                {/*点击图片回到根路径*/}
                <Link to='./'>
                <img src={require('./img.png')} alt="图片" className='app-header-logo'/>
                </Link>
                    <Menu
                    mode="horizontal"
                    className='app-header-menu'
                >
                    {this.state.list.map(item => {
                    return (
                        <Menu.Item key={item.id}>
                            <Link to={`/${item.id}`}>
                            <Icon type={item.icon}/>
                            {item.title}
                            </Link>
                        </Menu.Item>
                    )
                })}
                </Menu>
            </React.Fragment>
        );
    }
}

export default AppHeader;