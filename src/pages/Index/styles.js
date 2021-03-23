import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px;
    display: flex;
    justify-content: center;

    @media(max-width: 768px) {
        padding: 10px;
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