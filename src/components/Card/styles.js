import styled from 'styled-components';

export const Container = styled.div`
    height: 400px;
    width: 300px;
    background-color: #e5e5e5;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    transition-duration:0.5s;

    &:hover {
        box-shadow: 0 0 2em  #fca311;
        transform:scale(0.95);
    }
`;

export const BoxPhoto = styled.img`
    height: 230px;
    width: 230px;
    border-radius: 200px;
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: pre-wrap;
`;

export const Text = styled.p`
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
`;