import React, { useState } from 'react';
import Todoform from './Todoform.js';
import Todotable from './Todotable.js';

export default function Todolist() {
    const [todos, setTodos] = useState([
        'Washing clothes',
        'Cooking food',
        'Cleaning room'
    ]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center align-items-center g-2 l-mv-100">
                    <div className="col-6">
                        <Todoform addTodo={addTodo} />
                        <Todotable todos={todos} setTodos={setTodos} />
                    </div>
                </div>
            </div>
        </main>
    );
}