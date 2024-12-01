import React, { useState } from 'react';
import { MdEditSquare, MdDelete, MdCheck } from 'react-icons/md';

export default function Todotable({ todos, setTodos }) {
    const [editableIndex, setEditableIndex] = useState(null);
    const [editedTodo, setEditedTodo] = useState("");

    function onUpdate(index) {
        setEditableIndex(index);
        setEditedTodo(todos[index]);
    }

    function handleEditChange(e) {
        setEditedTodo(e.target.value);
    }

    function handleEditSubmit(index) {
        const updatedTodos = [...todos];
        updatedTodos[index] = editedTodo;
        setTodos(updatedTodos);
        setEditableIndex(null);
    }

    function onDelete(index) {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

    return (
        <div className="bg-transparent">
            {todos.map((todo, index) => {
                return (
                    <div key={index} className="w-100 d-flex align-items-center justify-space-around text-white my-4 border-bottom-white-1 pb-2">
                        <div className="w-80">
                            {editableIndex === index ? (
                                <input
                                    type="text"
                                    value={editedTodo}
                                    onChange={handleEditChange}
                                    onBlur={() => handleEditSubmit(index)}
                                    className="form-control"
                                    autoFocus
                                />
                            ) : (
                                <h6>{todo}</h6>
                            )}
                        </div>
                        <div className="w-20 d-flex flex-end gap-2 align-items-center">
                            {editableIndex === index ? (
                                <MdCheck onClick={() => handleEditSubmit(index)} className="cursor-pointer" size={20} />
                            ) : (
                                <MdEditSquare onClick={() => onUpdate(index)} className="cursor-pointer" size={20} />
                            )}
                            <MdDelete onClick={() => onDelete(index)} className="cursor-pointer" size={20} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}