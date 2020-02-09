import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../Actions/photos';
import { Link } from 'react-router-dom';
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
import PhotosModal from './PhotosModal';

class PhotosNav extends Component {
  state = {
    modal: false,
    isOpen: false,
    title: ''
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
          <NavbarBrand>User's Gallery</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <InputGroup className='m-2'>
                <Input
                  placeholder='Search by title'
                  name='title'
                  onChange={e => this.changeHandler(e)}
                />
                <InputGroupAddon addonType='append'>
                  <Button
                    onClick={() =>
                      this.props.getPhotos(this.props.user_id, this.state.title)
                    }
                  >
                    <i className='fas fa-search'></i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
              <Button
                className='m-2'
                onClick={() => this.setState({ modal: true })}
              >
                <i className='fas fa-plus'></i>
              </Button>
              <Button className='m-2' tag={Link} to={'/'}>
                <i className='fas fa-home'></i>
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.modal ? (
          <PhotosModal
            toggle={this.toggleModal}
            isOpen={this.state.modal}
            user_id={this.props.user_id}
          />
        ) : null}
      </>
    );
  }
}

export default connect(null, { getPhotos })(PhotosNav);
