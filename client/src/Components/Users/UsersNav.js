import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../Actions/users';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from 'reactstrap';
import UsersModal from './UsersModal';

class UsersNav extends Component {
  state = {
    modal: false,
    isOpen: false,
    name: ''
  };
  changeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  toggleModal = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <>
        <Navbar color='light' light expand='md'>
          <NavbarBrand>Users Tab</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <InputGroup className='m-2'>
                <Input
                  placeholder='Search by name'
                  name='name'
                  onChange={e => this.changeHandler(e)}
                />
                <InputGroupAddon addonType='append'>
                  <Button onClick={() => this.props.getUsers(this.state.name)}>
                    <i class='fas fa-search'></i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
              <Button
                className='m-2'
                onClick={() => this.setState({ modal: true })}
              >
                <i class='fas fa-plus'></i>
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.modal ? (
          <UsersModal
            toggle={this.toggleModal}
            isEdit={false}
            isOpen={this.state.modal}
          />
        ) : null}
      </>
    );
  }
}

export default connect(null, { getUsers })(UsersNav);
