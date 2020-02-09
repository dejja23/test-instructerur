import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePhoto } from '../../Actions/photos';
import PhotoModal from './PhotoModal';
import { Row, Col, Card, CardBody, CardTitle, CardImg } from 'reactstrap';

class Gallery extends Component {
  state = {
    modal: false,
    photo: null
  };
  toggleModal = () => this.setState({ modal: !this.state.modal });

  render() {
    return (
      <>
        <Row md='4' sm='2' xs='1' className='m-auto'>
          {this.props.photos.map(photo => (
            <Col key={photo._id}>
              <Card className='shadow-sm' className='m-3'>
                <CardImg
                  top
                  width='100%'
                  height='250px'
                  src={photo.url}
                  alt='Card image cap'
                />
                <CardBody>
                  <CardTitle className='d-flex justify-content-between'>
                    <span>{photo.title}</span>
                    <span>
                      <i
                        className='fas fa-eye mr-2'
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.setState({ photo, modal: true })}
                      ></i>{' '}
                      <i
                        className='fas fa-trash mr-2 text-danger'
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.props.deletePhoto(photo._id)}
                      ></i>
                    </span>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        {this.state.modal ? (
          <PhotoModal
            toggle={this.toggleModal}
            isOpen={this.state.modal}
            photo={this.state.photo}
          />
        ) : null}
      </>
    );
  }
}

export default connect(null, { deletePhoto })(Gallery);
