
import * as C from "./styles";
import b7Svg from "../../svgs/b7.svg";
import {items} from "../../data/items"


  //um item apenas é só p  que está trabalhando  e não array dele é do tipo: GridItemType[]
 
  //onclick vai ser uma função que não retorna nada
  //on clique vai jogar essa função dentro do container
  


//criar o componente
//"item" e "onClick são as props que o component GridItem vai receber do componente gridItem do app.tsx
export const GridItem = ({ item, onClick }) => {
  return (
    //onClick é a função
    //quando executar vai executar o onclick da props que acabei de passar
    <C.Container 
    //mostra uma cor ou outra
    //se permanetShow ou show for true exibe uma cor
    //"showBackground" vai ser recebido dentro do "export const Container = styled.div`" do styles do GridItem
    showBackground={item.permanentShown || item.shown}
    onClick={onClick}
    >
      {/* se está para exibir exibe o item que tem 
    se não tiver para exibir vai exibi a logo padrão "b7.svg"*/}

      {/* se permanentShown for falso e item.shown for falso então o item não será exibido  e mostra o ícone padrão da b7 */}
      {/* //exibe o ícone b7.svg */}
      {/* //quando não tiver item para ser exibido mostra esse ícone b7Svg */}
      {item.permanentShown === false && item.shown === false && (
        //cria uma props opacity e recebe ele no "export const Icon = styled.img `" do styles GridItem
        <C.Icon src={b7Svg} alt="" opacity={.1}/>
      )}

{/* // se permanentShown ou shown forem true eu exibo */}
{/* //para exibir tem que verificar se  o item tem algum item */}
{/* //se permanentShown ou shown forem verdadeiros e tiver um item  para exibir, vai exibir o ícone */}
      {(item.permanentShown || item.shown)  &&  item.item != null &&
    //   src vai vir de itens
    //importa itens
    //"items" é a lista de array de data/items que contém "{name: 'android', icon: androidSvg },"
    //segundo "item" é o ítem que será exibido , number é a referencia da posição do array de items: "item: number | null;"
    //primeiro "item"  é o nome da variavel que recebe foi tipado dentro de  "GridItemType" , "GridItemType" é o tipo de item"
      <C.Icon src={items[item.item].icon} alt="" />
      }
    </C.Container>
  );
};
