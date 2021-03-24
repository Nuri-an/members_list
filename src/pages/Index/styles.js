import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px;
    justify-content: center;

    @media(max-width: 768px) {
        padding: 10px;
    }
`;

export const BoxHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 250px;
    margin-bottom: 150px;

    @media(max-width: 768px) {
        height: 180px;
    margin-bottom: 50px;
    }
`;

export const ImgHeader = styled.img`
    width: 150px;
    height: 150px;
    
    @media(max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`;

export const Input = styled.input`
    width: 50%;
    align-self: center;
    height: 40px;
    border-radius: 5px;
    border: 0px solid transparent;
    box-shadow: 5px 5px #14213d;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    
    &:focus {
        border: 1px solid  #fca311 ;
    }
    
    &:hover {
        border: 1px solid  #fca311 ;
    }

    @media(max-width: 768px) {
        width: 80%;
    }
`;

export const ContainerGrid = styled.div`
    margin: 50px;
    min-width: 60%;
    padding-bottom: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    justify-items: center;
    
    @media(max-width: 1024px) and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        padding-bottom: 0px;
    }

    @media(max-width: 767px) {
        margin: 10px;
        grid-template-columns: none;
        grid-gap: 10px;
        width: auto;
        padding-bottom: 0px;
    }
`;