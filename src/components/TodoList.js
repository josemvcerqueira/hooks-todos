import React, { useContext } from "react";

import TodosContext from "../context";

const TodoList = props => {
	const { state } = useContext(TodosContext);
	return (
		<div>
			<ul>
				{state.todos.map(todo => (
					<li key={todo.id}>
						<span>{todo.text}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
