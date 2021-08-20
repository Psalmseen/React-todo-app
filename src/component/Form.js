import React from "react"

function Form({value, handleChange, handleSubmit}){
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <input className="todo-input" value={value} onChange={handleChange} placeholder="Add a new Todo" />
                    <br/>
                    <div className="btn-wrapper">
                    <button>Add</button>
                    </div>
            </form>
        </div>
    )
}

export default Form