import { IoIosAddCircle } from "react-icons/io";
import React,{useRef} from "react";

export default function Todoform(props) {
    const inputElement = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = inputElement.current.value;
        if (todo.trim().length > 0) {
            props.addTodo(todo);
            inputElement.current.value = "";           
        }
    }
    return (
        <>
        <form action="#" onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    ref={inputElement}
                    required="true"
                    className="form-control"
                    placeholder="Enter a new todo item"
                />
                <button className="btn btn-transparent">
                <IoIosAddCircle color="white" size={32} />
                </button>
            </div>
        </form>
        </>

    )
}