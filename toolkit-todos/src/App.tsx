import { useState } from "react";
import { addTodo, deleteTodo, Todo } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

function App() {

  const [title, setTitle] = useState<string>("")
  const dispatch = useAppDispatch();
  const todoSlice = useAppSelector((state) => state.todos);

  const onSave = () => {
    dispatch(addTodo(title));
    setTitle("");
  }

  const onDelete = (todo: Todo) => {
    dispatch(deleteTodo(todo.id));
  }

  return (
    <div className="App">
      <input name="todo" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <button onClick={onSave}>Add Todo</button>
      <ul>
        {
          todoSlice.map((todo) => (
            <><li key={todo.id}>{todo.id} & {todo.title}</li><button onClick={() => onDelete(todo)}>Delete</button></>
          ))
        }
      </ul>
    </div>
  );
}

export default App;

