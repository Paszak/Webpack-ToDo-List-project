import React from 'react';
import Todo from './Todo.js'
import style from './TodoList.css';


const TodoList = props => {
	return (<ul>
		{
			props.data.map(todo=><Todo key={todo.id} todo={todo} removeTodo={props.removeTodo} />)}</ul>)
	}

export default TodoList;