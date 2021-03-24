import React, { useRef, useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, ContainerGrid } from './styles';
import Card from '../../components/Card';
import PopUp from '../../components/PopUp';

const Index = () => {
    const refContainer = useRef(null);
    const [data, setData] = useState([]);
    const [dataSpecific, setDataSpecific] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [documentHeight, setDocumentHeight] = useState(refContainer.current?.clientHeight);

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
    }, []);

    const showDataSpecific = (login) => {
        setDataSpecific([]);
        api.get(`users/${login}`)
            .then((response) => {
                setDataSpecific(response.data);
                setShowPopup(true)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    const close = () => {
        setShowPopup(!showPopup)
    }

    const convertDate = (date) => {
        const convertedDate = date?.split('T')[0]
            .split('-')
            .reverse()
            .join('/');

        return convertedDate;;
    }

    return (
        <React.Fragment>
            <Container ref={refContainer}>
                <PopUp
                    photo={dataSpecific.avatar_url}
                    name={dataSpecific.name}
                    repositories={dataSpecific.public_repos}
                    followers={dataSpecific.followers}
                    checkIn={convertDate(dataSpecific.created_at)}
                    togglePopup={showPopup}
                    currentHeight={documentHeight}
                    onClick={close}
                />
                <ContainerGrid>
                    {
                        data.map((member, index) => (
                            <Card
                                photo={member.avatar_url}
                                login={member.login}
                                onClick={() => showDataSpecific(member.login)}
                                hoverCss={!showPopup}
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