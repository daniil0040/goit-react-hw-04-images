import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import {fetchImges} from "./api"
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Layout } from "./Layout";
import { ThreeDots } from 'react-loader-spinner'

export const App = () => {
  const [query,setQuery] = useState('');
  const [images,setImages] = useState([]);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [totalImges, setTotalImges] = useState(0);

  useEffect(() => {
        if (query.length === 0) {
          setImages([])
          setQuery('')
        return
    }
  async function getImages() {
    try {
      setLoading(true)
      const images = await fetchImges(query, page)
      setImages(prevState=>[...prevState, ...images.hits]);
      setLoading(false);
      setTotalImges(images.totalHits);
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
      }
  }
    getImages()
  }, [query, page])
  
  const handleLoadMore = () => {
    setPage(prevState=> prevState + 1)
  };

  const handleSubmit = (newQuery) => {
    setQuery(newQuery.trim());
    setImages([]);
    setPage(1);
  };
  
return (
    <Layout>
            <Searchbar onSubmit={handleSubmit} />
            {loading && <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
}}
wrapperClassName=""
visible={true}
 />}
            {error && <b>Whoops...Something went wrong.Try reload page!</b>}
            {images.length > 0 && <ImageGallery items={images} />}
            {(images.length > 0 && totalImges >= page * 12) && <LoadMoreBtn onLoadMore={handleLoadMore} />}
            
    </Layout>
  );
}