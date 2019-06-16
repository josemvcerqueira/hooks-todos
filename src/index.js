import React, { useContext, useReducer, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import * as serviceWorker from "./serviceWorker";
import TodosContext from "./context";
import todosReducer from "./reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const useAPI = endpoint => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const res = await axios.get(endpoint);
		setData(res.data);
	};

	return data;
};

const App = () => {
	const initialState = useContext(TodosContext);
	const [state, dispatch] = useReducer(todosReducer, initialState);
	const savedTodos = useAPI("https://hooks-api.josemvcerqueira.now.sh/todos");

	useEffect(() => {
		dispatch({ type: "GET_TODOS", payload: savedTodos });
	}, [savedTodos]);

	return (
		<TodosContext.Provider value={{ state, dispatch }}>
			<TodoForm />
			<TodoList />
		</TodosContext.Provider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
