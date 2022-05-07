import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        // 有几项数据就定义几种状态
        this.state = {
            inputValue: '',
            list: []
        }
    }

    changeValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    // enter添加待办
    handleKeyUp = (e) => {
        if (e.keyCode === 13 && e.target.value!=='') {
            // 拷贝list的内容到newList中去,并在最后添加一项
            const newList = [...this.state.list, this.state.inputValue];
            this.setState({
                list: newList,
                // 回车添加事件后使输入框内容为空
                inputValue: ''
            })
        }
    }

    //点击待办事项删除
    handleClick(index) {
        const list2 = [...this.state.list]
        // 执行删除
        alert('确定要删除这一项吗')
        list2.splice(index, 1);
        this.setState({
            list: list2
        })
    }

    render() {
        return (
            <React.Fragment>
                 {/*点击请输入内容实现聚焦功能*/}
                <label htmlFor='myInput'>请输入内容:</label>
                <input
                    id='myInput'
                    value={this.state.inputValue}
                    onChange={this.changeValue}
                    onKeyUp={this.handleKeyUp}
                />
                <ul>
                    {
                        this.state.list.map((value, index) => {
                            return (
                                 // bind this里还可以传递额外的参数
                                <li key={index} onClick={this.handleClick.bind(this, index)}>{value}</li>
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

export default TodoList;