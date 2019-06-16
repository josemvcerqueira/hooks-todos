import { createContext } from "react";

const TodosContext = createContext({
	todos: [],
	currentTodo: {}
});

export default TodosContext;
