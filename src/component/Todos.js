import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'

class Todos extends Component {
    constructor () {
        super()
        this.state = { todo: '' }
    }
    handleChange = (e) => {
        this.setState({ todo: e.target.value })
    }
    handleAdd = (e) => {
        this.props.add(this.state.todo)
        this.setState({ todo: ''})
    }
    render () {
        return (
            <div>
                <div>
                    <input type="text" onChange={this.handleChange} value={this.state.todo} />
                </div>
                <button onClick={this.handleAdd}>Add</button>
                <br />
                <br />
                <hr />
                <ul>
                    {this.props.todos.map((todo, i) => <li key={i}>{todo}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  add: (todo) => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)


