import React from 'react';
import style from './Todo.css';


const Todo = props => {
	return (<li><div className={style.Card}><p>{props.todo.task}</p><button onClick={()=>{props.removeTodo(props.todo.id)}}>Usuń</button></div></li>)
	}

export default Todo;


