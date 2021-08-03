import styled from 'styled-components';
import Screen from './Screen';
import { Link, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from 'axios';

export default function Subjects (){
    const [list, setList] = useState([]);
    useEffect(() => {
        const request = axios.get("https://repoprova.herokuapp.com/disciplinas");

        request.then(resposta => {
            setList(resposta.data);
            console.log(resposta.data);
        });
        request.catch(err => {
            console.log(err);
        });
    }, []);

    return(
        <Screen>
           <Title>Disciplinas</Title>
           

           {list.map(item => 
           <Link to={"/disciplinas/"+item.id} style={{ textDecoration: 'none' }}>
           <Option>
           <Name>{item.name}</Name>
           <Qtd><h3>Número de Provas: </h3>{item.qtd}</Qtd>
           </Option>
           </Link>
        )}

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
margin-bottom: 30px;
margin-top: 30px;
`;

const Option = styled.div`
    width: 300px;
    background: whitesmoke;
    border-radius: 5px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    margin-bottom: 30px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
`;

const Name = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: black;

`;

const Qtd = styled.div`
margin-top: 15px;
    font-size: 28px;
    font-weight: bold;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    h3{
        font-size: 20px;
    }
`;
