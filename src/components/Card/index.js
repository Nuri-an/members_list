import React from 'react';
import { Github } from '../../assets';
import { Container, BoxPhoto, BoxText, Text } from './styles';

const Card = ({ photo, login, onClick }) => {
    return (
        <Container onClick={onClick}>
            <BoxPhoto src={photo} alt="Acquati" />
            <BoxText>
                <img src={Github} alt="login" title="Login" />
                <Text> {login} </Text>
            </BoxText>
        </Container>
    );
}

export default Card;