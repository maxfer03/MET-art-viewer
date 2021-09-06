import React from "react";
import { getArt } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export const SearchBar = () => {
    const [input, setInput] = React.useState("")
    const dispatch = useDispatch()
    const categorySelected = useSelector(state => state.categorySelected)
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(getArt(input, categorySelected))
        
    }


    return(
        <div>
            <form onSubmit = {(e) => handleSearch(e)}>
                <input type='text' value={input} onChange ={(e) => setInput(e.target.value)}/>
                <input type='submit'/>
            </form>
        </div>
    )
}