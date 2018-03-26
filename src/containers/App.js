import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';

const data = [
	{
		task: 'zadanie pierwsze',
		id: 1
	},
	{
		task: 'zadanie drugie',
		id: 2
	},
	{
		task: 'zadanie trzecie',
		id: 3
	},
	{
		task: 'zadanie czwarte',
		id: 4
	}
];

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data,
			value: 'Co musisz zrobić?'
		};
	}

	addTodo(val) {
		const todo = {
			task: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data : remainder});
	}

	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title number={this.state.data.length} />
				<TodoList data={this.state.data} removeTodo={this.removeTodo.bind(this)} />
				<TodoForm value={this.state.value} addTodo={this.addTodo.bind(this)} handleChange={this.handleChange.bind(this)} />
			</div>
		);
	}
}

export default App;