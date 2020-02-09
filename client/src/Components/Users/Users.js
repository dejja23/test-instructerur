import React, { Component } from 'react';
import UsersNav from './UsersNav';
import UsersTab from './UsersTab';
import { connect } from 'react-redux';
import { getUsers } from '../../Actions/users';
import { Spinner } from 'reactstrap';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return this.props.loading ? (
      <Spinner color='dark' />
    ) : (
      <div>
        <UsersNav />
        <UsersTab users={this.props.users} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.usersReducer.users,
  loading: state.usersReducer.loading
});
export default connect(mapStateToProps, { getUsers })(Users);
