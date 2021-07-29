import styled from 'styled-components';
import Screen from './Screen';

export default function Home (){
    return(
        <Screen>
            <Title>SEJA BEM-VINDO AO REPOPROVAS!</Title>
            <Options>
            <button>Professores</button>
            <button>Disciplinas</button>
            </Options> 
        </Screen>
    );
}


const Title = styled.div`
font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 32px;
text-align: center;
line-height: 30px;
color: #000000;
`;

const Options = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    button{
        width: 200px;
        height: 60px;
        background: #000000;
        border-radius: 5px;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        margin-bottom: 15px;
        border-radius: 5px;
    }
`;