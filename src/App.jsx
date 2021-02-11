import React,{Component} from 'react';
import firebase from "./config/firebase";

class App extends Component{
    constructor(){
        super()
        this.state = {
            todos: [{title:'Shahbaz Khan', edit:false}, {title: 'SMIU', edit:false }],
            value:'',
            update_value:''
        }
    }
    addTodo = (e)=>{
        // this.state.todos.push(this.state.value)
        let obj = {title: this.state.value}
        firebase.database().ref('/').child("todos_React").push(obj)
        this.setState({
            todos:[...this.state.todos, obj],
            value:'',  
        })
     }

     allDeleteTodo =(e) =>{
        
         this.setState({
            todos:this.state.todos.splice(this.state.todos.length , 0)
         })
         
        console.log(this.state.todos)
     }

     deleteTodo = (i) =>{
         this.state.todos.splice(i,1)
        this.setState({
            todos:this.state.todos
        })
     }

     EditTodo =(i) =>{
        this.state.todos[i].edit=true;
        this.setState({
            todos: this.state.todos
        })
     }
     updateValue_Get =(e,i)=>{
         this.state.todos[i].title = e.target.value;
         this.setState({
             todos:this.state.todos
         })
     }
     UpdateTodo = (i,v) =>{
        this.state.todos[i].edit=false;
        this.setState({
            todos: this.state.todos
        })
       
     }
    render(){
    
        return(
            <section className="todo">
                <h1>Todo Appliation</h1>

                <input value={this.state.value} type="text" onChange={(e)=>this.setState({value:e.target.value})} placeholder=" Enter a Value"/> 
                <button onClick={this.addTodo}>ADD TODO</button>
                <button onClick={this.allDeleteTodo}>DELETE TODO</button>
                <br/>
                <ul>
                    {this.state.todos.map((v,i)=>{
                        return (
                        <li key={i}>
                        {v.edit ? 
                        <input type="text" onChange={(e)=>this.updateValue_Get(e,i)} placeholder="Enter Update Value" /> 
                        : v.title}

                        {v.edit ? <button onClick={()=>this.UpdateTodo(i)}> Update </button>
                        :
                        <button onClick={()=>this.EditTodo(i)}> Edit </button> 
                        }

                        <button onClick={()=>this.deleteTodo(i)}> Delete </button>
                        </li>
                        )
    
                    })}
                </ul>

                

            </section>
        )
    }
}
export default App;