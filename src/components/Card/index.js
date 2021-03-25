import React from 'react';
import { Github } from '../../assets';
import { Container, BoxPhoto, BoxText, Text } from './styles';

const Card = ({
    photo,
    login,
    onClick,
    hoverCss
}) => {
    return (
        <Container
            onClick={onClick} //ao clicar no card, aciona a função que mostra o popup
            hoverCss={hoverCss} //desabilita ou habilita os efeitos hover e transition de acordo com o estado do popup
        >
            <BoxPhoto src={photo} alt={login} />
            <BoxText>
                <img src={Github} alt="login" title="Login" />
                <Text> {login} </Text>
            </BoxText>
        </Container>
    );
}

export default Card;