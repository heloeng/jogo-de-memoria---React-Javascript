import styled from 'styled-components';


export const Container = styled.div `

width: 200px;
height: 50 px;
display: flex;
background-color: #1550ff;
border-radius: 10px;
cursor: pointer;
//opacidade 100%
opacity: 1;
transition: all ease .3s;

//quando passar o mouse vai para 80 por cento
//no tempo de transition de 3 segundos.
 &:hover {
     opacity: .8;
 }
`
;

// área do ícone
export const IconArea = styled.div `
//herda a altura do pai
height: inherit;
display: flex;
//centraliza o ícone que está dentro
justify-content: center;
//20% de branco
border-right: 1 px solid rgba(255, 255, 255, .2)
padding: 0 15px;
// background-Color: red;
`;


export const Icon = styled.img `
height: 20px;
`;


export const Label = styled.div `
//altura da área do label herda do pai.
height: inherit;
color: #FFF;
display: flex;
justify-content: center;
align-items: center;
//pega todo o espaço retante
flex: 1;
padding: 0 20px;
// background-Color: yellow;

`;

