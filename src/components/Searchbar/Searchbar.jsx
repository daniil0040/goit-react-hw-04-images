import { useState } from "react";
import { SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput, SearchbarWraper } from "./Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
    const [query, setQuery] = useState("")

    const getQuery = (newQuery) => {
        setQuery(newQuery)
    }

    return <SearchbarWraper>
    <SearchForm onSubmit={evt => {
                    evt.preventDefault()
                onSubmit(query)
                evt.target.reset()
                }}>
                <SearchFormBtn type="submit">
        <SearchFormBtnLabel>🔎</SearchFormBtnLabel>
        </SearchFormBtn>
     <SearchFormInput
       type="text"
                 placeholder="Search images and photos"
                 onChange={evt => getQuery(evt.target.value)}
     />
   </SearchForm>
 </SearchbarWraper>
}