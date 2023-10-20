import { Btn } from "./LoadMoreBtn.styled"

export const LoadMoreBtn = ({onLoadMore}) => {
    return <Btn type="button" onClick={()=>onLoadMore()}>Load more</Btn>
}