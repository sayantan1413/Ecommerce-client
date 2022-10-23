import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';

export const SearchContainer = styled.div`
    position: relative;
    width: ${(props) => (props.isSearching ? 300 : 40)}px;
    height: 40px;
    background: white;
    border: 1px solid black;
    border-radius: ${(props) => (props.isSearching ? 10 : 50)}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    transition: all 0.3s ease;

    @media screen and (max-width: 520px) {
        width: ${(props) => (props.isSearching ? 200 : 40)}px;
    }

    @media screen and (max-width: 390px) {
        width: ${(props) => (props.isSearching ? 180 : 40)}px;
    }
`;

export const SearchInput = styled.input`
    padding-left: 48px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;

    &.focus{
        border-color: rgba(0,0,0,0.3);
    }
`;

export const IconButton = styled.button`
    position: relative;
    height: 36px;
    width: 36px;
    border: none;
    z-index: 1;
    cursor: pointer;
    background: none;

    &.hover{
        color: white;
        &::after {
            opacity: 1;
            transform: scale(1);
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 50%;
        z-index: -1;
        background: #000;
        transition: 0.2s ease;
        transform: scale(0.6);
        opacity: 0;
    }
`;

export const SearchIcon = styled(AiOutlineSearch)`
    font-size: 18px;
    position: relative;
    top: 2px; 
    right: 2px;
`;