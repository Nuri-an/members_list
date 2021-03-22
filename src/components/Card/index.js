import React from 'react';
import Github from '../../assets/github.svg';
import { Container, BoxPhoto, BoxText, Text } from './styles';

const Card = ({ photo, name, onClick }) => {
    return (
        <React.Fragment>
            <Container onClick={onClick}>
                <BoxPhoto src={photo} alt="Acquati"/>
                <BoxText>
                    <img src={Github} alt="login" title="Login" /> 
                    <Text> {name} </Text>
                </BoxText>
            </Container>
        </React.Fragment>
    );
}

export default Card;