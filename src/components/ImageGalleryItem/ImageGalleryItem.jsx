import { Component } from "react";
import { GalleryItemImg } from "./ImageGalleryItem.styled"
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      maxWidth: 'calc(100vw - 48px)',
  maxHeight: 'calc(100vh - 24px)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export class ImageGalleryItem extends Component{
    state = {
        isModalOpen: false,
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        })
    }

closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }

    render() {
        const { item } = this.props
        return <div>
        <GalleryItemImg src={`${item.webformatURL}`} alt={`${item.tags}`} onClick={this.openModal}/>
        <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Galery Modal"
      >
        <div>
    <img src={`${item.largeImageURL}`} alt={`${item.tags}`} />
  </div>
      </Modal>
    </div>
    }
}
