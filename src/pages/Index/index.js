import React from 'react';
import { Container } from './styles';
import Card from '../../components/Card';
import PopUp from '../../components/PopUp';

const Index = () => {
    return (
        <React.Fragment>
            <PopUp
                photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                name="Leandro Acquati"
                repositories={31}
                followers={6}
                checkIn="08/10/2015"
                togglePopup={true}
            />
            <Container>
                <Card
                    photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                    login="Acquati"
                    onClick={() => console.log("clicou")}
                />
            </Container>
        </React.Fragment>
    );
}

export default Index;