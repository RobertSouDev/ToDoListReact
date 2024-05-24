import { useState } from 'react';
import './App.css';
import Todo from './componets/Todo';
import TodoForm from './componets/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade X Sistema",
      category:"Trabalha",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir para academia",
      category:"Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category:"Estudos",
      isCompleted: false,
    },
  ]);

  const addtodo = (text, category) => {

    const newTodos = [...todos, {
      id:Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
  ]

  setTodos(newTodos)


  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className="todas-lista">
        {todos.map((todo)=> (
          <Todo  key={todo.id} todo={todo}/>
        ))}
      </div>
      <TodoForm addtodo={addtodo} />
    </div>
  );
}

export default App;
