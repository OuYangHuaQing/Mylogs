import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import Counter from "./counter";
import 'antd/dist/antd.css';
import {BrowserRouter, Route} from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/todoList' component={TodoList}/>
                    <Route path='/counter' component={Counter}/>
                </div>
                {/*Link的作用相当于a标签，可以实现各页面之间的跳转*/}
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))

