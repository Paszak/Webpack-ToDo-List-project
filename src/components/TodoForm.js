import React from 'react';
// import style from './TodoForm.css';
const TodoForm = props => {
	return(
		<form onSubmit = {(event)=>{event.preventDefault(); props.addTodo(props.value)}}>
		<input type ='text' value={props.value} onChange={props.handleChange} />
		<input type="submit" value="Submit" />
		</form>
		);
	}

export default TodoForm;