import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import {fetchImges} from "./api"
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Layout } from "./Layout";
import { ThreeDots } from 'react-loader-spinner'

export class App extends Component{
  state = {
    query: "",
    images: [],
    error: false,
    loading: false,
    page: 1,
    totalImges: 0
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      if (this.state.query.length === 0) {
      this.setState({
        images: []
      })
        return
    }
      try {
        this.setState({
          loading: true
        })
        const images = await fetchImges(this.state.query,this.state.page)
        this.setState(prevState=>({
          images: [...prevState.images,...images.hits],
          loading: false,
          totalImges: images.totalHits
        }))
      } catch (error) {
        this.setState({
        error: true
      })
      } finally {
        this.setState({
          loading: false
        })
      }
    }
  }

handleLoadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1
  }));
  };

  handleSubmit = (newQuery) => {
this.setState({
      query: newQuery.trim(),
      images: [],
      page: 1,
    })
  };

  render() {
        return (
    <Layout>
            <Searchbar onSubmit={this.handleSubmit} />
            {this.state.loading && <ThreeDots 
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
            {this.state.error && <b>Whoops...Something went wrong.Try reload page!</b>}
            {this.state.images.length > 0 && <ImageGallery items={this.state.images} />}
            {(this.state.images.length > 0 && this.state.totalImges >= this.state.page * 12) && <LoadMoreBtn onLoadMore={this.handleLoadMore} />}
            
    </Layout>
  );
    }
  }