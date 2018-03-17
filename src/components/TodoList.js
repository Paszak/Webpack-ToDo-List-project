import React from 'react';
import style from './TodoList.css';


const TodoList = props => {
	return (<ul>
		{props.data.map(todo=><li key={todo.id}><div className={style.Card}><p>{todo.task}</p><button onClick={()=>{props.removeTodo(todo.id)}}>Usuń</button></div></li>)}</ul>)
	}

export default TodoList