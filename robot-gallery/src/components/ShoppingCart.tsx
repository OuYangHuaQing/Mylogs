import React, {Component} from 'react';
import styles from './ShoppingCart.module.css'
import {FiShoppingCart} from 'react-icons/fi'

// 给props和state定义类型，有两种方式，一是定义接口，二是使用type
interface Props{

}
interface State{
    isOpen:boolean;
}

class ShoppingCart extends Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state={
            isOpen:false,
        }
    }
    render() {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button} onClick={()=>this.setState({
                    isOpen:!this.state.isOpen
                })}>
                    <ShoppingCart/>
                    <span>购物车</span>
                </button>
                <div className={styles.cartDropDown}
                style={{
                    // 一行代码，使用display属性的block和none实现元素的显示和隐藏
                    display:this.state.isOpen?"block":"none"
                }}
                >
                    <ul>
                        <li>robot1</li>
                        <li>robot2</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;