import React, { useState } from 'react';

const EditTodo = ({ todo }) => {
    const [description, setDescription ] = useState(todo.description);

    // Edit descritpion onClick function
    const updateDescription = async (e) => {
        e.preventDefault(); // No refresh page 
        
        try {
            const body = { description };
            const response = await fetch(`http://localhost:4000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            {/* Button to Open the Modal */}
            <button 
                type="button" 
                className="btn btn-warning" 
                data-toggle="modal" 
                data-target={`#id${todo.todo_id}`}
            >
                Edit
            </button>

            {/* The Modal */}
            <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)} >
            <div className="modal-dialog">
                <div className="modal-content">

                {/* Modal Header */}
                <div className="modal-header">
                    <h4 className="modal-title">Edit ToDo</h4>
                    <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)} >&times;</button>
                </div>

                {/* Modal Body */}
                <div className="modal-body">
                    <input 
                        type="text" 
                        className='form-control' 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>

                {/* Modal Footer */}
                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)} >Edit</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)} >Close</button>
                </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default EditTodo;