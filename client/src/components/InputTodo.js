import React, { useState } from 'react';

const InputTodo = () => {
    const [ description, setDescription ] = useState("");

    const onSubimitForm = async(e) => {
        e.preventDefault(); // No refresh page 
        
        try {
            const body = { description };
            const response = await fetch("http://localhost:4000/todos", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <h1 className='text-center mt-5'>PERN Todo List</h1>
            <form className='d-flex mt-5' onSubmit={onSubimitForm}>
                <input 
                    type="text" 
                    className='form-control' 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                />
                <button 
                    className='btn btn-success'
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default InputTodo;