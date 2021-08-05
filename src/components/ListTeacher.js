import styled from 'styled-components';
import Screen from './Screen';
import { Link, useHistory } from "react-router-dom";
import Card from './Card';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import axios from 'axios';

export default function ListTeacher() {
    const idTeacher = useParams().idProf;
    const [list, setList] = useState([]);
    
    useEffect(() => {
        const request = axios.get("https://repoprova.herokuapp.com/professores/" + idTeacher);

        request.then(resposta => {
            setList(resposta.data);
            console.log(resposta.data);
        });
        request.catch(err => {
            console.log(err);
        });
    }, []);

    function printBySection(section){
        let arrayFinal = [];
        for(let i = 0; i< list.length; i++){
            if(list[i].category === section){
                arrayFinal.push(list[i]);
            }
        }
        return(
            arrayFinal.map(item => 
                <Card exam={item}></Card>
            )

        );
    }


    return (
        <Screen>
            <Title>Provas: {list === [] ? "" : list.teacher}</Title>
            <Section>P1</Section>
            {printBySection('P1')}
            <Section>P2</Section>
            {printBySection('P2')}
            <Section>P3</Section>
            {printBySection('P3')}
            <Section>2° Chance</Section>
            {printBySection('2chance')}
            <Section>Outras</Section>
            {printBySection('outras')}
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

const Section = styled.div`
font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 26px;
text-align: center;
color: #000000;
margin-top: 20px;
margin-bottom: 20px;
`;
