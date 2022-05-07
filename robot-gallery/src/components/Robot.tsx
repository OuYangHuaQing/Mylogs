import React from "react";
import styles from './Robot.module.css'

interface RobotProps {
    id: number;
    name: string;
    email: string;
}

// props为组件间传递参数的数据，此处使用到es6新语法的解构赋值
const Robot: React.FC<RobotProps> = ({id, name, email}) => {
    return (
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Robot;