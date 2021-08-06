import styled from 'styled-components';
import Screen from './Screen';
import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner';
import axios from 'axios';

export default function Submit() {
    const [name, setName] = useState('');
    const [exam, setExam] = useState('');
    const [loading, setLoading] = useState(false);
    const [relations, setRelations] = useState([]);
    const [subject, setSubject] = useState("Cálculo");
    const history = useHistory();

    useEffect(() => {
        const request = axios.get("https://repoprova.herokuapp.com/enviar");

        request.then(resposta => {
            setRelations(resposta.data);
        });
        request.catch(err => {
            console.log(err);
        });
    }, []);

    function sendExam(e) {
        e.preventDefault();
        if (loading) {
            return;
        }
        setLoading(true);

        var selectcat = document.getElementById('cat');
        var category = selectcat.options[selectcat.selectedIndex].text;
        var selectsub = document.getElementById('subs');
        var subject = selectsub.options[selectsub.selectedIndex].text;
        var selectteacher = document.getElementById('tchrs');
        var teacher = selectteacher.options[selectteacher.selectedIndex].text;
        const body = {
            name: name,
            category: category,
            subject: subject,
            teacher: teacher,
            url:exam   
        }
        const request = axios.post("https://repoprova.herokuapp.com/enviar", body);
        request.then(response => {
            setName('');
            setExam("");
            setLoading(false);
            history.push("/");
        });
        request.catch(err => {
            setName('');
            setExam("");
            setLoading(false);
            alert("Não conseguimos cadastrar a prova, tente novamente!");
        })
    }

    function filterOptions(){
        let tempTeachers = [];
        console.log(subject);
        console.log(relations);
        for(let i =0; i<relations.length; i++){
            console.log("ENTROU");
            if(relations[i].subject === subject){
                tempTeachers.push(relations[i].teacher);
            }
        }
        console.log(tempTeachers);
        return(
            tempTeachers.map(item =>
                <option value={item}>{item}</option>
                )
        );


    }

    return (
        <Screen>
            <Title>Insira as informações da sua prova:</Title>
            <InputArea>
                <form onSubmit={event => sendExam(event)}>
                    <input placeholder="Nome" required type="text" value={name} onChange={e => setName(e.target.value)} />
                    <select name="categories" id="cat">
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                        <option value="P3">P3</option>
                        <option value="2chance">2° Chance</option>
                        <option value="outras">Outras</option>
                    </select>
                    <select name="subjects" id="subs" onChange={e => setSubject(e.target.value)} >
                        <option value="Cálculo">Cálculo</option>
                        <option value="Álgebra Linear">Álgebra Linear</option>
                        <option value="Fisica">Física</option>
                        <option value="Química">Química</option>
                        <option value="Computação">Computação</option>
                        <option value="Humanidades">Humanidades</option>
                    </select>
                    
                    <select name="teachers" id="tchrs">
                    {filterOptions()}
                        
                    </select>
                    <input placeholder="Url da prova" required type="url" value={exam} onChange={e => setExam(e.target.value)} />
                    <button type="submit" disabled={loading}>
                        {loading ?
                            <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />
                            : "Enviar"}
                    </button>
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
        height: 420px;
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

    button{
        width: 100%;
        height: 60px;
        border: none;
        color:#ffffff;
        padding: 18px 0 18px 15px;
        font-family: 'Raleway', sans-serif;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        background: #000000;
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