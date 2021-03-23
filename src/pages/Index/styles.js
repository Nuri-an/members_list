import styled from 'styled-components';

export const Container = styled.div`
    margin: 100px;
    padding-bottom: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 50px;
    grid-gap: 5px
`;