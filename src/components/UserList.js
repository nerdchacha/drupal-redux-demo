import React , { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../action'

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    render () {
        return (
            <div>
                List of all the users
                {
                    this.props.users.map((user) => (
                        <div key={user.username}>
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <hr />
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  users: state.list
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)