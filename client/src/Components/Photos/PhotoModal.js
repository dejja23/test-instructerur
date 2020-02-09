import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const PhotoModal = ({ isOpen, toggle, photo }) => {
  return (
    <Modal className='modal-lg' isOpen={isOpen} toggle={toggle}>
      <ModalBody className='p-0'>
        <img
          src={photo.url}
          alt={photo.title}
          width='100%'
          style={{ maxHeight: '500px' }}
        />
      </ModalBody>
    </Modal>
  );
};

export default PhotoModal;
