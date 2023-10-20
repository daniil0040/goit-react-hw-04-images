import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList, ImgGalleryItem } from "./ImageGallery.styled"

export const ImageGallery = ({items}) => {
    return <ImageGalleryList>
        {items.map(item => <ImgGalleryItem key={item.id}>
            <ImageGalleryItem item={item} />
        </ImgGalleryItem>)}
    </ImageGalleryList>
}