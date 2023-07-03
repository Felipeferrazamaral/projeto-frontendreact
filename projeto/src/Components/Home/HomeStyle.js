import * as styled from 'styled-components'

export const ContainerHome = styled.styled.div`

  border: solid 2px;
  display: block;
  flex-direction: row;
  background:lightblue ;
  margin-top: 1%;
  margin-bottom: 1%;
  height:96%;
  margin-top: 1%;
  
  `
export const ContainerHomeUpper = styled.styled.div`

  display: flex;
  flex-direction: row;
  border: solid 1px;
  justify-content: space-between;

  .Product-Quantity{
    margin-left: 5%;
  }

  .Label-Order{
    margin-right: 3%;
    margin-top: 3%;
  }

  h1{ 
  text-align: left;
  justify-content: center;

  }

  h2{
  text-align: right;
  justify-content: center;
      
  }
  `
export const ContainerHomeLower = styled.styled.div`
    border: solid 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const P = styled.styled.p`
    margin:2vw; 
    width:50%;
    display: block;
`;

export const Select = styled.styled.select`

    display: flex;
    width: 10vw;
    height: 5px;
    justify-content: center;
    
`;
  