import TodoRow from './components/TodoRow';
import  { useState } from 'react';


const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, label: 'Reading' },
    { id: 2, label: 'Jogging' },
    { id: 3, label: 'Code review' },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() === '') {
      return;
    }

    const newTodoId = todos.length + 1;

    const newTodo = {
      id: newTodoId,
      label: newTodoText,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const handleNewTodoChange = (event) => {
    setNewTodoText(event.target.value);
  };

  return (
    <div className='flex items-center justify-center bg-yellow-50 h-screen'>
      <div className='bg-white p-2 m-2 fixed w-96'>
      <h1 className='text-2xl'>Todo List</h1>
      {todos.map((todo) => (
        <TodoRow key={todo.id} label={todo.label} onDelete={() => handleDeleteTodo(todo.id)} />
      ))}
       <div className='border-t-2 border-gray-200'>
        <input type="text" placeholder='Add new task...' className='border-2 rounded-md p-1.5  my-4 px-6' value={newTodoText} onChange={handleNewTodoChange} />
        <button onClick={handleAddTodo} className='bg-green-700 text-white mx-2 p-2 px-3.5 rounded-xl' >Add</button>
       </div>
      </div>
    </div>
  );
};

export default App;