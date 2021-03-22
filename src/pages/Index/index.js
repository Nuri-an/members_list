import React from 'react';
import { Container } from './styles';
import Card from '../../components/Card';

const Index = () => {
    return (
        <Container>
            <Card
                photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                name="Acquati"
                onClick={() => console.log("clicou")}
            />
        </Container>  
    ); 
}

export default Index;