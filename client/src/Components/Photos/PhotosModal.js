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
import { addPhoto } from '../../Actions/photos';

class PhotosModal extends Component {
  state = {
    title: '',
    url: ''
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    this.props.addPhoto(this.props.user_id, this.state.title, this.state.url);
  };
  render() {
    return (
      <Modal
        className='modal-lg'
        isOpen={this.props.isOpen}
        toggle={() => this.props.toggle()}
      >
        <ModalHeader>ADD Piccture</ModalHeader>
        <ModalBody>
          <InputGroup className='m-2'>
            <InputGroupAddon addonType='prepend' style={{ width: '125px' }}>
              <InputGroupText className='w-100'>title</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder=' enter picture title'
              name='title'
              value={this.state.title}
              onChange={this.changeHandler}
            />
          </InputGroup>
          <InputGroup className='m-2'>
            <InputGroupAddon addonType='prepend' style={{ width: '125px' }}>
              <InputGroupText className='w-100'>url</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder=' enter picture url'
              name='url'
              value={this.state.url}
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
            Add
          </Button>
          <Button color='secondary' onClick={() => this.props.toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default connect(null, { addPhoto })(PhotosModal);
