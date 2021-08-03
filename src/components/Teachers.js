import styled from 'styled-components';
import Screen from './Screen';
import { Link, useHistory } from "react-router-dom";
import Card from './Card';
import { useContext, useState, useEffect } from "react";
import axios from 'axios';

export default function Teachers (){
    const [list, setList] = useState([]);
    useEffect(() => {
        const request = axios.get("https://repoprova.herokuapp.com/professores");

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
           <Title>Professores</Title>

           {list.map(item => 
           <Link to={"/professores/"+item.id} style={{ textDecoration: 'none' }}>
           <Option>
           <Name>{item.name}</Name>
           <Qtd>{item.qtd}</Qtd>
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
    width: 250px;
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
    font-size: 28px;
    font-weight: bold;
    color: black;
`;
