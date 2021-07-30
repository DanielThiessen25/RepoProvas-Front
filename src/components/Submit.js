import styled from 'styled-components';
import Screen from './Screen';
import { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";

export default function Submit() {
    const [name, setName] = useState('');
    const [exam, setExam] = useState('');

    return (
        <Screen>
            <Title>Insira as informações da sua prova:</Title>
            <InputArea>
                <form>
                    <input placeholder="Nome" required type="text" value={name} onChange={e => setName(e.target.value)} />
                    <select name="categories">
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                        <option value="P3">P3</option>
                        <option value="2chance">2° Chance</option>
                        <option value="others">Outras</option>
                    </select>
                    <select name="subjects">
                        <option value="cal">Cálculo</option>
                        <option value="alg">Álgebra Linear</option>
                        <option value="fis">Física</option>
                        <option value="qui">Química</option>
                        <option value="comp">Computação</option>
                        <option value="hum">Humanidades</option>
                    </select>
                    <select name="teachers">
                        <option value="joao">João</option>
                        <option value="pedro">Pedro</option>
                        <option value="carla">Carla</option>
                        <option value="maria">Maria</option>
                        <option value="jose">José</option>
                    </select>
                    <input placeholder="Url da prova" required type="url" value={exam} onChange={e => setExam(e.target.value)} />
                </form>
            </InputArea>


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
margin-bottom: 40px;
`;

const InputArea = styled.div`
        
        width: 50%;
        

        form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 360px;
        }

       input{
        width: 100%;
        height: 60px;
        border: none;
        padding: 18px 0 18px 15px;
        font-family: 'Raleway', sans-serif;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        border-radius: 5px;
    }

    select{
        width: 100%;
        height: 60px;
        background: white;
        border: none;
        padding: 18px 0 18px 15px;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        border-radius: 5px;
    }
`;