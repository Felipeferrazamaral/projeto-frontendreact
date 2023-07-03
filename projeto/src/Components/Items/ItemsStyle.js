import styled from 'styled-components';

export const ContainerItems = styled.div`
    padding: 2vh;
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    width: 300px;
    color: lightblue;
    background-color: black;
    gap: 5px;
    border: solid 1px lightblue;
    
    h2 {
    text-align: center;
    background: lightblue;
    color: black;
    }
`;    

export const InfoItems = styled.div`
    background-color: lightblue;
    color: black;
    padding: 2vh;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ContainerValueAndButton = styled.div`
    display: flex;
    justify-content: space-between;
    color: black;
    /* height: 20px; */
    
`;

export const ImgButton = styled.img`
    height: 3vh;

`;

export const ButtonClearAll = styled.button`
    background-color: transparent;
    border: none;
    
`;

export const TweaksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1vh;
    overflow: hidden;
    padding: 1vh;
    
`;
export const InputQuantity = styled.input`
    background-color: transparent;
    border: none;
    text-align: center;
    height: 3vh;
    width: 5%;
    font-size: 2.5vh;
    color: black;
`;

export const DecreaseAndIncreaseButton = styled.button`
    background-color: transparent;
    border: none;
    
`;

export const ImgControll = styled.img`
    height: 3vh;
`;
export const WarningParagraph = styled.p`
    /* height: 3vh; */
    text-align: center;
    color: black;
       
`;

export const ButtonDeleteItem = styled.button`
    background-color: black;
    color: lightblue;   
    border: 2px solid;
    padding: 10px 20px;
    /* border-radius: 5px; */
    cursor: pointer;
    border: solid 1px black;
`;

export const SummaryContainer = styled.div`
    background: lightblue;
    color: black;
    display: grid;
    justify-content: center;
    height: 20%;
    width: 100%;
    
    h3 {
    display: grid;
    color: color;
    }
`;