import React from 'react';
import { Github } from '../../assets';
import { Container, BoxPhoto, BoxText, Text } from './styles';

const Card = ({ photo, login, onClick, hoverCss }) => {
    return (
        <Container onClick={onClick} hoverCss={hoverCss}>
            <BoxPhoto src={photo} alt={login} />
            <BoxText>
                <img src={Github} alt="login" title="Login" />
                <Text> {login} </Text>
            </BoxText>
        </Container>
    );
}

export default Card;