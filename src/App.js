import React, {Component } from "react"
import Header from "./component/Header"
import Form from "./component/Form"
import TodoView from "./component/TodoView"

class App extends Component{
    constructor(){
        super()
        this.state = {
            currentTodo :"",
            allTodos: []

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }
    componentDidMount(){
            this.setState(JSON.parse(localStorage.getItem('state')));
        // localStorage.setItem('state', JSON.stringify(this.state));
    }
    componentDidUpdate(){
        localStorage.setItem('state', JSON.stringify(this.state));
    }
    handleDelete(id){
        const presentTodo = this.state.allTodos.filter(todo => todo.id !== id)
        this.setState({
            allTodos: presentTodo
        })
        console.log(this.state.allTodos)
    }
    handleEdit(id){
        const editedTodo = this.state.allTodos.filter(todo => todo.id !== id)
        const properEditedTodo = editedTodo.map((todo, i) => {return {...todo, id: i} })
        const [text] = this.state.allTodos.filter(todo => todo.id === id )
        this.setState({
            currentTodo:text.text,
            allTodos: properEditedTodo
        })
        console.log(this.state.allTodos)
    }
    handleCheck(id){
        
        const recentTodo = this.state.allTodos.map(todo => {
            if(id === todo.id){
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })

        this.setState({
            allTodos: recentTodo
        })
    }
    handleChange(event){
        const{value} = event.target
        this.setState({currentTodo : value})
    }
    handleSubmit(event){
        event.preventDefault()
        localStorage.setItem('state', JSON.stringify(this.state));
        if(this.state.currentTodo){

            const todotext = this.state.currentTodo
            const todoId = this.state.allTodos.length
            const newTodo = {
                text: todotext,
                isCompleted: false,
                id: todoId
            }
            const updatedTodo = [...this.state.allTodos, newTodo]
            this.setState({ allTodos : updatedTodo, currentTodo: "" })
        }
        return
        
    }
    render(){
        console.log(this.state.allTodos)
        return (
            <div>
                <Header />
                <Form 
                    value={this.state.currentTodo} 
                    handleChange={this.handleChange}  
                    handleSubmit={this.handleSubmit}
                />
                <TodoView 
                    state={this.state} 
                    handleCheck={this.handleCheck}
                    handleDelete ={this.handleDelete}
                    handleEdit ={this.handleEdit}
                />
            </div>
        )
    }
}
export default App