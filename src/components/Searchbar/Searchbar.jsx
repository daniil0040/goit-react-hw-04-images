// export const Searchbar = ({onGetQuery}) => {
//     return <header>
//   <form>
//             <button type="submit">
//       <span>Search</span>
//     </button>
//     <input
//       type="text"
//                 placeholder="Search images and photos"
//                 onChange={evt => onGetQuery(evt.target.value)}
//     />
//   </form>
// </header>
// }
import { Component } from "react";
import { SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput, SearchbarWraper } from "./Searchbar.styled";
export class Searchbar extends Component{
    state = {
        query: ""
    }
    getQuery = (newQuery) => {
        this.setState({
            query: newQuery
        })
    }
    render() {
        return <SearchbarWraper>
    <SearchForm onSubmit={(evt) => {
                    evt.preventDefault()
                this.props.onSubmit(this.state.query)
                evt.target.reset()
                }}>
                <SearchFormBtn type="submit">
        <SearchFormBtnLabel>🔎</SearchFormBtnLabel>
        </SearchFormBtn>
     <SearchFormInput
       type="text"
                 placeholder="Search images and photos"
                 onChange={evt => this.getQuery(evt.target.value)}
     />
   </SearchForm>
 </SearchbarWraper>
    }
}