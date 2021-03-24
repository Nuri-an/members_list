import styled from 'styled-components';

export const View = styled.div`
    position: absolute;
    width: 100%;
    height: ${props => props.height}px;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.8);
    transition-duration: 0.5s;
    padding-top: 150px;
`;

export const Container = styled.div`
    height: 500px;
    width: 600px;
    background-color: #e5e5e5;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    
    @media(max-width: 768px) {
        height: 350px;
        width: 315px;
    }
`;

export const ButtonClose = styled.img`
    margin-left: auto;
    margin-right: 20px;
    margin-bottom: -20px;
    position: relative;
    transition-duration:0.5s;

    &:hover {
        transform:scale(1.5);
    }
`;

export const BoxPhoto = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 200px;
    
    @media(max-width: 768px) {
        height: 100px;
        width: 100px;
    }
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: pre-wrap;
`;

export const Text = styled.p`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    
    @media(max-width: 768px) {
        font-size: 14px;
    }
`;

export const BoxInformations = styled.div`
    border-top: 1px solid #14213D;
`;