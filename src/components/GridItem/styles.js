import styled from "styled-components";

//quais são as props que vai receber

export const Container = styled.div`
// a cor vai depender da props que está recebendo

backgrond-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
height: 100px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

//opacity será opcional porque usa esse número de opacidade na imagem com opacidade em:
// {item.permanentShown === false && item.shown === false && (
//  <C.Icon src={b7Svg} alt="" opacity={.1}/>
//   )}
//e sem opacidade em:
// {(item.permanentShown || item.shown)  &&  item.item != null &&
// <C.Icon src={items[item.item].icon} alt="" />
// }



//recebe a opacidade
export const Icon = styled.img `
width: 40px;
heght: 40px;
//outra forma  de usar se tiver opacity poe ele mesmo, caso contrário poe 1
//opacity: ${props => props.opacity ?? 1};
//ou segunda forma:
//quando tiver usa o proprio opacity, caso contráio usa 1,  "1" é opacidade 100 por cento
opacity: ${props => props.opacity ? props.opacity : 1};

`;