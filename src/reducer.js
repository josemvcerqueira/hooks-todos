import uuidv4 from "uuid/v4";

function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO": {
			const newTodo = {
				id: uuidv4(),
				text: action.payload,
				complete: false
			};
			const addedTodos = [...state.todos, newTodo];
			return {
				...state,
				todos: addedTodos
			};
		}
		case "TOGGLE_TODO": {
			const toggledTodos = state.todos.map(todo =>
				todo.id === action.payload.id
					? { ...action.payload, complete: !action.payload.complete }
					: todo
			);
			return {
				...state,
				todos: toggledTodos
			};
		}
		case "REMOVE_TODO": {
			const filteredTodos = state.todos.filter(
				todo => todo.id !== action.payload.id
			);
			return {
				...state,
				todos: filteredTodos
			};
		}
		default:
			return state;
	}
}

export default reducer;
