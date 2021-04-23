import React, {Component} from 'react'
import axios from 'axios'
import View from './View';

export default class todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    gettodosData() {
        axios.get("https://jsonplaceholder.typicode.com/todos/").then(res => {
            const data = res.data
            data.length = 10
            const todos = data.map(todo =>
                    <tr key={todo.id}>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td><td><button type="button" onclick={View}>View details</button></td>
                        </td>
                    </tr>
            );
            this.setState({
                todos: todos
            })
        })


    }
    componentDidMount() {
        this.gettodosData()
    }
    render() {

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos}
                    </tbody>
                </table>
            </div>
        )
    }
}



