import React, { useRef, useState, useEffect } from 'react';
import { Container, ContainerGrid } from './styles';
import Card from '../../components/Card';
import PopUp from '../../components/PopUp';

const Index = () => {
    const refContainer = useRef(null);
    const [documentHeight, setDocumentHeight] = useState(refContainer.current?.clientHeight);
    
    useEffect(() => {
        console.log(refContainer)
        setDocumentHeight(refContainer.current.clientHeight);
    }, [refContainer.current?.clientHeight]);

    return (
        <React.Fragment>
            <Container ref={refContainer}>
            <PopUp
                photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                name="Leandro Acquati"
                repositories={31}
                followers={6}
                checkIn="08/10/2015"
                togglePopup={true}
                currentHeight={documentHeight}
            />
                <ContainerGrid>
                    <Card
                        photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                        login="Nurian"
                        onClick={() => console.log("clicou")}
                    />
                    <Card
                        photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                        login="Acquati"
                        onClick={() => console.log("clicou")}
                    />
                    <Card
                        photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                        login="Nurian"
                        onClick={() => console.log("clicou")}
                    />
                    <Card
                        photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                        login="Acquati"
                        onClick={() => console.log("clicou")}
                    />
                    <Card
                        photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                        login="Nurian"
                        onClick={() => console.log("clicou")}
                    />
                    <Card
                        photo="https://avatars.githubusercontent.com/u/15040050?v=4"
                        login="Acquati"
                        onClick={() => console.log("clicou")}
                    />
                </ContainerGrid>
            </Container>
        </React.Fragment>
    );
}

export default Index;