import styled from "styled-components";

export const Container = styled.div`

backgrond-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
height: 100px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

export const Icon = styled.img `
width: 40px;
heght: 40px;
//outra forma  de usar se tiver opacity poe ele mesmo, caso contrário poe 1
//opacity: ${props => props.opacity ?? 1};
//ou segunda forma:
//quando tiver usa o proprio opacity, caso contráio usa 1,  "1" é opacidade 100 por cento
opacity: ${props => props.opacity ? props.opacity : 1};

`;