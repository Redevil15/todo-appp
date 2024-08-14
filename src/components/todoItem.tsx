interface TodoItemProps {
  todo: { text: string };
  index: number;
  deleteTodo: (index: number) => void;
}

const TodoItem = ({
  todo,
  index,
  deleteTodo,
}: TodoItemProps) => {
  return (
    <li className="flex justify-between py-2">
      <span>{todo.text}</span>
      <button
        onClick={() => deleteTodo(index)}
        className="text-red-500 hover:text-red-700 transition"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
