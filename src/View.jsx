import React from 'react'

const View = (props) => {
    const { todos } = props;

    return (
        <div>
        <div>
            <h1>Todos</h1>
        </div>
            {(todos.userId) ? <div>
                <h3>User Id: {todos.userId}</h3>
                <h3>Id: {todos.id}</h3>
                <h3>Title: {todos.title}</h3>
                </div> : <div>No details Available</div>}
        </div>
    )
}

export default View
