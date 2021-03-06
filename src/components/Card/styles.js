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
    transition-duration: ${props => props.hoverCss ? '0.5s' : ''}; //se o popup não estiver visível o efeito é aplicado

    &:hover {
        box-shadow: ${props => props.hoverCss ? '0 0 2em  #fca311' : ''}; //se o popup não estiver visível o efeito é aplicado
        transform: ${props => props.hoverCss ? 'scale(0.95)' : ''}; //se o popup não estiver visível o efeito é aplicado
    }
    
    @media(max-width: 768px) {
        height: 300px;
        width: 250px;
    }
`;

export const BoxPhoto = styled.img`
    height: 230px;
    width: 230px;
    border-radius: 200px;
    
    @media(max-width: 768px) {
        height: 150px;
        width: 150px;
    }
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
    
    @media(max-width: 768px) {
        font-size: 20px;
    }
`;