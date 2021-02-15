import React from "react"

function Form(props){
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                    <input className="todo-input" value={props.value} onChange={props.handleChange} placeholder="Add a new Todo" />
                    <br/>
                    <div className="btn-wrapper">
                    <button>Add</button>
                    </div>
            </form>
        </div>
    )
}

export default Form