import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../../Actions/users';
import UsersModal from './UsersModal';

export class UsersTab extends Component {
  state = {
    user: null,
    modal: false
  };
  toggleModal = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <>
        <Table hover className='text-center'>
          <thead>
            <tr>
              <th>name</th>
              <th>surName</th>
              <th>birthPlace</th>
              <th>birthYear</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.surName}</td>
                <td>{user.birthPlace}</td>
                <td>{user.birthYear}</td>
                <td>
                  <Link to={`/photos/${user._id}`} className='mr-2'>
                    <i className='fas fa-images fa-lg  text-primary'></i>
                  </Link>
                  <i
                    className='fas fa-user-edit fa-lg mr-2 text-warning'
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.setState({ user, modal: true })}
                  ></i>
                  <i
                    className='fas fa-trash fa-lg mr-2 text-danger'
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.props.deleteUser(user._id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {this.state.modal ? (
          <UsersModal
            toggle={this.toggleModal}
            isEdit={true}
            isOpen={this.state.modal}
            user={this.state.user}
          />
        ) : null}
      </>
    );
  }
}

export default connect(null, { deleteUser })(UsersTab);
