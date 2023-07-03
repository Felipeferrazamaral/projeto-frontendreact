import * as styled from 'styled-components';

export const CardContainer = styled.styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid;
`;

export const Card = styled.styled.div`
    border: 2px solid;
`;

export const Img = styled.styled.img`
    width:20vw;
    height:60vh;
`;

export const Button = styled.styled.button`
    background: black;
    color: lightblue;
    display: grid;
    align-items: center;
    justify-self: center;
    cursor: pointer;
    margin-bottom: 9%;
    
`;

export const ContainerSuperior = styled.styled.div`

    width: 99%;
    display: flex;
    flex-direction: row;
    border: solid 2px;
    justify-content: flex-end;
    align-items: start;
    
`;

export const P = styled.styled.p`
    margin:2vw; 
    width:50%;
    display: flex;
    justify-content: center;

`;

export const Select = styled.styled.select`
`;

export const ContainerInferior = styled.styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    border: solid 2px;
    justify-content: space-between;
    align-items: center;  
    background: lightblue;
    color: black;

`