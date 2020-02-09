import React, { Component } from 'react';
import PhotosNav from './PhotosNav';
import Gallery from './Gallery';
import { connect } from 'react-redux';
import { getPhotos } from '../../Actions/photos';
import { Spinner } from 'reactstrap';

class Photos extends Component {
  componentDidMount() {
    this.props.getPhotos(this.props.match.params.id);
  }
  render() {
    return this.props.loading ? (
      <Spinner color='dark' />
    ) : (
      <div>
        <PhotosNav user_id={this.props.match.params.id} />
        <Gallery photos={this.props.photos} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  photos: state.photosReducer.photos,
  loading: state.photosReducer.loading
});

export default connect(mapStateToProps, { getPhotos })(Photos);
