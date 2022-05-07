import React, {Component} from 'react';
import {List} from 'antd';
import {Link} from 'react-router-dom'
import axios from "axios";
import '../../style.css';

class PageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id)
        const id = nextProps.match.params.id;
        let url = 'http://www.dell-lee.com/react/api/list.json'
        if (id) {
            url = url + '?id=' + id
        }
        // 当不传id参数时，直接请求url，不带任何参数
        axios.get(url)
            .then((res) => {
                this.setState({
                    data: res.data.data
                });
            })
    }

    // 这个生命周期函数只会执行一次，当点击不同内容时不会再去重新请求数据了
    componentDidMount() {
        // 拿到点击时的id参数
        const id = this.props.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
            .then((res) => {
                this.setState({
                    data: res.data.data
                });
            })
    }

    render() {
        return (
            <List
                style={{background: '#fff'}}
                // 边框
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        {/*传递id参数，使用到模板字符串*/}
                        <Link to={`./detail/${item.id}`}>
                            {item.title}
                        </Link>
                    </List.Item>
                )}
            />
        );
    }
}

export default PageList;