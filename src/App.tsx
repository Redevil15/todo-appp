import { useState } from "react"
import TodoList from "./components/todoList"

interface Todo{
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h1>My To-Do List</h1>
        <TodoList 
          todos={todos}
          deleteTodo={deleteTodo}  
        />
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            const form = (e.target as HTMLFormElement);
            const newTodo = form.elements.namedItem('todo') as HTMLInputElement;
            if (newTodo.value) {
              addTodo({ text: newTodo.value})
              form.reset();
            }
          }}
          className='flex mt-4'
        >
          <input 
            type="text"
            name="todo"
            placeholder="Add a new to-do"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
