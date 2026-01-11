import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #121212;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #1E1E1E;
    width: 20%;
    max-whidth: 350px;
    max-heigh: 350px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 10px 25px rgba(0,0,0,0.15);

    display: flex;
    flex-direction: column;
    gap: 13px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`

