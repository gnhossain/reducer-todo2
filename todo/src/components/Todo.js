import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/reducer';

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
}

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Next Todo'
                    type='text'
                    name='item'
                    onChange={handleChanges}
                />
                <button 
                    onClick={() => 
                    dispatch({ type: 'ADD_TODO', payload: newTodo })}>Add Todo</button>
                <button
                    onClick={() => 
                    dispatch({ type: 'CLEAR_COMPLETED', payload: newTodo})}>Clear Todo </button>
            </form>
            {state.todos.map(todo => 
                <div key={todo.id}>
                    <p className={`todo ${todo.completed ? ' completed' : ''}`}
                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id }) }>{todo.item}</p>
               </div>
            )}
    </div>
  );
};

export default Todo;
