import React, { useRef, useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, ContainerGrid } from './styles';
import Card from '../../components/Card';
import PopUp from '../../components/PopUp';

const Index = () => {
    const refContainer = useRef(null);
    const [documentHeight, setDocumentHeight] = useState(refContainer.current?.clientHeight);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(refContainer)
        setDocumentHeight(refContainer.current.clientHeight);
    }, [refContainer.current?.clientHeight]);

    useEffect(() => {
        api.get('orgs/grupotesseract/public_members')
            .then((response) => setData(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

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
                    { 
                        data.map((member, index) => (
                            <Card
                                photo={member.avatar_url}
                                login={member.login}
                                onClick={() => console.log("clicou")}
                                key={index}
                            />
                        ))
                    }
                </ContainerGrid>
            </Container>
        </React.Fragment>
    );
}

export default Index;