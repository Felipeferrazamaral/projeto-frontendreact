import * as styled from 'styled-components';

export const ContainerFilter = styled.styled.div`
    
    border: solid 1px lightblue;
    display: block;
    width: 15%;
    float: left;
    text-align: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    background: black;
    
    `;


export const Form = styled.styled.form`
    display: grid;
    justify-content: space-around;
    gap: 1vh;
    h1{
    color: lightblue;
    }
`;

export const InputFilter = styled.styled.input`

    margin-top: 20px;
    background: lightblue;
    
`;

export const BtnClear = styled.styled.button`
    display: grid;
    justify-self: center;
    justify-content: center;
    border: 1px solid;
    background: lightblue;
    cursor: pointer;

`;


export const QuantityItems = styled.styled.p`
    height: 3vh;
    font-weight: 600;

`;