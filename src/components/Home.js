import styled from 'styled-components';
import Screen from './Screen';
import { Link, useHistory } from "react-router-dom";

export default function Home (){
    return(
        <Screen>
            <Title>SEJA BEM-VINDO AO REPOPROVAS!</Title>
            <Options>
            <Link to="/enviar" style={{ textDecoration: 'none' }}><button>Enviar uma prova</button></Link>
            <Link to="/visualizar" style={{ textDecoration: 'none' }}><button>Visualizar provas</button></Link>
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
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button{
        width: 350px;
        height: 60px;
        background: #000000;
        border-radius: 5px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        border-radius: 5px;
    }
`;