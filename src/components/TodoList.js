import React, { useContext } from "react";

import TodosContext from "../context";

const TodoList = props => {
	const { state, dispatch } = useContext(TodosContext);
	const title =
		state.todos.length > 0
			? `${state.todos.length} Todos`
			: "Nothing To Do!";
	return (
		<div className="container mx-auto max-w-md text-center font-mono">
			<h1 className="font-bold text-4xl">{title}</h1>
			<ul className="list-reset text-white p-0">
				{state.todos.map(todo => (
					<li
						key={todo.id}
						className=" flex bg-orange-500 border-black border-dashed border-2 my-4 py-4"
					>
						<span
							onDoubleClick={() =>
								dispatch({ type: "TOGGLE_TODO", payload: todo })
							}
							className={`cursor-pointer flex-1 ml-12 items-center ${todo.complete &&
								"line-through text-gray-900"}`}
						>
							{todo.text}
						</span>
						<button>
							<img
								src="https://icon.now.sh/edit/0050c5"
								alt="Edit Icon"
								className="h-6 m-1"
							/>
						</button>
						<button
							onClick={() =>
								dispatch({ type: "REMOVE_TODO", payload: todo })
							}
						>
							<img
								src="https://icon.now.sh/delete/8b0000"
								alt="Delete Icon"
								className="h-6 m-1"
							/>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
