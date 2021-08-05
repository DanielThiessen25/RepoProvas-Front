import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default function Card(props){
    return(
        <Box>
            <Horizontal>
                <Info>Nome: {props.exam.name}</Info>
                <Info>Matéria: {props.exam.subject}</Info>   
            </Horizontal>
            <Horizontal>
                <Info>Categoria: {props.exam.category}</Info>
                <Info>Professor: {props.exam.teacher}</Info>   
            </Horizontal>
            <a href={props.exam.link} target="_blank" style={{ textDecoration: 'none' }}><Exam>Visualizar Prova</Exam></a>
        </Box>

    );
}

export const Box = styled.div `
width: 40%;
height: auto;
margin-bottom:30px;
padding:25px;
border-radius: 5px;
background: whitesmoke;
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
display: flex;
flex-direction: column;
align-items: center;
`;

export const Horizontal = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-bottom: 30px;
font-family: 'Times New Roman', Times, serif;
font-style: normal;
font-weight: normal;
color: black;
`;

export const Info = styled.div`
font-size: 20px;
`;

export const Exam = styled.div`
    background: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bolder;

`;

