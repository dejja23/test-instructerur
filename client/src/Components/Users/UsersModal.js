import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  ModalFooter,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { addUser, updateUser } from '../../Actions/users';

class UsersModal extends Component {
  state = {
    name: this.props.isEdit ? this.props.user.name : '',
    surName: this.props.isEdit ? this.props.user.surName : '',
    birthPlace: this.props.isEdit ? this.props.user.birthPlace : '',
    birthYear: this.props.isEdit ? this.props.user.birthYear : ''
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    this.props.isEdit
      ? this.props.updateUser(
          this.props.user._id,
          this.state.name,
          this.state.surName,
          this.state.birthPlace,
          this.state.birthYear
        )
      : this.props.addUser(
          this.state.name,
          this.state.surName,
          this.state.birthPlace,
          this.state.birthYear
        );
  };
  render() {
    return (
      <Modal
        className='modal-lg'
        isOpen={this.props.isOpen}
        toggle={() => this.props.toggle()}
      >
        <ModalHeader>
          {this.props.isEdit ? 'UPDATE USER' : 'ADD USER'}
        </ModalHeader>
        <ModalBody>
          <InputGroup className='m-2'>
            <InputGroupAddon addonType='prepend' style={{ width: '125px' }}>
              <InputGroupText className='w-100'>name</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder=' enter your name'
              name='name'
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </InputGroup>{' '}
          <InputGroup className='m-2'>
            <InputGroupAddon addonType='prepend' style={{ width: '125px' }}>
              <InputGroupText className='w-100'>surName</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder=' enter your surname'
              name='surName'
              value={this.state.surName}
              onChange={this.changeHandler}
            />
          </InputGroup>{' '}
          <InputGroup className='m-2'>
            <InputGroupAddon addonType='prepend' style={{ width: '125px' }}>
              <InputGroupText className='w-100'>birthPlace</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder=' enter your birthPlace'
              name='birthPlace'
              value={this.state.birthPlace}
              onChange={this.changeHandler}
            />
          </InputGroup>
          <InputGroup className='m-2'>
            <InputGroupAddon addonType='prepend' style={{ width: '125px' }}>
              <InputGroupText className='w-100'>birthYear</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder=' enter your birthYear'
              name='birthYear'
              type='number'
              value={this.state.birthYear}
              onChange={this.changeHandler}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              this.handleClick();
              this.props.toggle();
            }}
          >
            {this.props.isEdit ? 'Save Changes' : 'Add'}
          </Button>{' '}
          <Button color='secondary' onClick={() => this.props.toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default connect(null, { addUser, updateUser })(UsersModal);
