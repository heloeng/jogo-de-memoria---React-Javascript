import styled from 'styled-components';

export const Container = styled.div
  `
whidth: 100%;
max-width: 750px;
margin: auto;
display: flex;
padding: 50px 0;
// background-color: blue;

@media (max-width: 750px){
 
    flex-direction: column;
}
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
width: auto;
// background-color: red;

@media (max-width: 750px){
   
    margin-bottom: 50px;
    align-items: center;
}
`;
export const LogoLink = styled.a`

display: block;

`;
export const InfoArea = styled.div`

//  background-color: green;

@media (max-width: 750px){
  
  display: flex;
  justify-content: space-around;
  text-align: center;

}



`;

export const GridArea = styled.div`


/* flex 1 pega toda a área disponível */
flex: 1;

display: flex;
justify-content: flex-end;
// background-color: yellow;

@media (max-width: 750px){
  

  justify-content: center;
  margin: 0 20px;

}


`;