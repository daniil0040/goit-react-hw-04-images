import { useState } from "react";
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

export const ImageGalleryItem = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
            setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <div>
        <GalleryItemImg src={`${item.webformatURL}`} alt={`${item.tags}`} onClick={openModal}/>
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Galery Modal"
      >
        <div>
    <img src={`${item.largeImageURL}`} alt={`${item.tags}`} />
  </div>
      </Modal>
    </div>
}
