import TodoItem from "./todoItem";

interface TodoListProps {
  todos: { text: string }[];
  deleteTodo: (index: number) => void;
}

const TodoList = ({
  todos,
  deleteTodo,
}: TodoListProps) => {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
