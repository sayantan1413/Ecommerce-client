import React,{useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {
    SearchContainer,
    SearchInput,
    SearchIcon,
    IconButton
} from './SearchStyle.js';

const Search = () => {
    const [isActive, setIsActive] = useState(false);

    const _toggleSearch = () => {
        setIsActive(!isActive);
    }

  return (
    <SearchContainer isSearching={isActive}>
        <IconButton onClick={_toggleSearch}>
            {isActive ? (
                <AiOutlineClose size={18} />
            ) : (
                <SearchIcon />
            )}
        </IconButton>
        <SearchInput placeholder='search here'/>
    </SearchContainer>
  )
}

export default Search