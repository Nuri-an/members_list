import React, { useRef, useState, useEffect } from 'react';
import api from '../../services/api';

import { Users } from '../../assets';
import {
    Container,
    BoxHeader,
    ImgHeader,
    Input,
    ContainerGrid
} from './styles';
import Card from '../../components/Card';
import PopUp from '../../components/PopUp';

const Index = () => {
    const refContainer = useRef(null); //irá guardar a referência da div externa
    const [data, setData] = useState([]); //irá guardar a lista com os dados de todos os membros
    const [dataSpecific, setDataSpecific] = useState([]); //irá guardar os dados de um membro específico, que foi selecionado
    const [showPopup, setShowPopup] = useState(false); //controla a visualização do popup na tela
    const documentHeight = refContainer.current?.clientHeight; //armazena a altura da div externa

    useEffect(() => {
        getDataApi(); //inicializa o array com a listagem completa
    }, []);

    const getDataApi = () => { //função que popula o array com os dados de todos os membros
        api.get('orgs/grupotesseract/public_members') //conecta na rota dos membros do grupo
            .then((response) => setData(response.data)) //se a conexão for bem sucedida, armazena essa listagem de dados no array "data"
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err); //se a conexão não for bem sucedida, mostra o erro no console
            });
    }

    const searchData = (stringValue) => { //função que faz a busca por membros atraves do login
        //essa variável vai receber o array filtrado
        var dataFilter = data.filter((val) => val //faz um filtro no array, analisando cada objeto
            .login //pega o valor da chave "login"
            .toUpperCase() //transforma as letras desse valor para maiúsculo (case insensitive)
            .indexOf( //procura qual posição do array possui essa string, retornando o indice onde stringValue está ou -1 se não encontrar
                stringValue.toUpperCase() //transforma as letras da string que está sendo pesquisada para maiúsculo (case insensitive)
            ) > -1 //verifica se a sting foi encontrada. Ao passar nessa condição a posição do array é adicionada em "dataFilter"
        )
        if (stringValue !== '') { //verifica se o valor do input não está vazio
            setData(dataFilter) //se não estiver vazio, a variável que contem o array filtrado é adicionada na constante que guarda guardar a lista com os dados (lista filtrada)
        } else {
            getDataApi(); //se estiver vazio, a constante que guarda a lista com os dados recebe os dados de todos os membros (lista completa)
        }
    }

    const showDataSpecific = (login) => { //função que busca na rota /users os dados de um membro específico
        setDataSpecific([]); //reseta o array de dados específicos
        api.get(`users/${login}`) //conecta na rota de usuários enviando o usuário selecionado como parâmetro
            .then((response) => { //se a conexão for bem sucedida, as linhas de baixo são executadas
                window.scrollTo({ top: 120, behavior: 'smooth' }); //faz o scroll da tela para o início, onde estará o popup
                setDataSpecific(response.data); //popula os array de dados específicos com os dados retornados
                setShowPopup(true) //mostra o popup
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err); //se a conexão não for bem sucedida, mostra o erro no console
            });
    }

    const convertDate = (date) => { //função que converte a data que o usuário ento no github do padrão americano TimesTemp para o para brasileiro dd/mm/yyyy
        const convertedDate = date?.split('T')[0] //separa o valor da data recebida por parâmetro, cortando a string em data e tempo, que são separada pelo "T" (padrão) e pega o primeiro valor (a data)
            .split('-') //parte a string novamente pelo traço, retornando [ano, mes, dia] (separado)
            .reverse() //inverte a posição do primeiro e último item (ano e dia), trocando a posição dos dois
            .join('/'); //junta o array, transformando em string, separadas por barra

        return convertedDate; //retorna a data convertida
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
                    togglePopup={showPopup} //recebe true ou false, indicando se o popup deve estar visível ou não
                    currentHeight={documentHeight} //recebe a altura da div externa, para atribuir essa mesma altura à div externa do popup no estilo
                    onClick={() => setShowPopup(!showPopup)} //Envia para o onClick do botão que fecha o popup essa função, que muda o valor de showPopup
                />
                <BoxHeader style={{textAlign: 'center'}}>
                    <ImgHeader src={Users} alt="Membros" />
                    <Input
                        type="text"
                        onKeyUp={(e) => searchData(e.target.value)} //a cada letra digitada/apagada a função que faz um filtro na listagem é chamada
                        placeholder="Busque um membro pelo login"
                    />
                </BoxHeader>
                <ContainerGrid>
                    {
                        data.map((member, index) => ( //percorre o array "data", para cada item é renderizado o componente "Card"
                            <Card
                                photo={member.avatar_url}
                                login={member.login}
                                onClick={() => showDataSpecific(member.login)} //Envia para o onClick da div externa do card essa função, que mostra os dados do membro selecionado
                                hoverCss={!showPopup} //Recebe o valor contrário do estado do popup (se está visivel, recebe false; se está invisível, recebe true) para tirar o efeito :hover e transition no estilo
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