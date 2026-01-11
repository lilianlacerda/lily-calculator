import styled from "styled-components";

export const ButtonContainer = styled.button`
    flex: 1;
    aspect-ratio: 1/1; 
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;

    background-color: ${props => {
        if(props.label === 'C') return '#FF4B4B';
        if(props.label === '=') return '#2ECC71';
        if(['/', 'X', '-', '+', '%'].includes(props.label)) return '#FF9500';
        return '#00aef8ff';
    }}; 

    border: 2px solid #29407ea8;
    color: #ffffffff;
    font-size: 24px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        opacity:0.8;
    }

`

