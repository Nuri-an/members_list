import React, { useEffect, useState } from 'react';

import { View, Container, ButtonClose, BoxPhoto, BoxText, Text, BoxInformations } from './styles';
import { Close, Github, Repositories, Followers, CheckIn } from '../../assets';

const PopUp = ({ photo, name, repositories, followers, checkIn, togglePopup }) => {
    const [close, setClose] = useState(togglePopup);

    useEffect(() => {
        setClose(togglePopup);
    }, [togglePopup])
    
    useEffect(() => {
        console.log(close)
    }, [close])

    if(!close){
        return <React.Fragment />;
    }

    return  (
        <View>
            <Container>
                <ButtonClose src={Close} alt="fechar" title="Fechar" onClick={() => setClose(false)} />
                <BoxPhoto src={photo} alt="Acquati" />
                <BoxText>
                    <Text> {name} </Text>
                </BoxText>
                <BoxInformations>
                    <BoxText>
                        <img src={Repositories} alt="quantidade de repositórios" title="Quantidade de repositórios" />
                        <Text> Número de repositórios públicos: </Text>
                        <Text> {repositories} </Text>
                    </BoxText>
                    <BoxText>
                        <img src={Followers} alt="seguidores" title="Seguidores" />
                        <Text> Número de seguidores: </Text>
                        <Text> {followers} </Text>
                    </BoxText>
                    <BoxText>
                        <img src={CheckIn} alt="data inicio" title="Data Início" />
                        <Text> Data que entrou no Github: </Text>
                        <Text> {checkIn} </Text>
                    </BoxText>
                </BoxInformations>
            </Container>
        </View>
    );
}

export default PopUp;