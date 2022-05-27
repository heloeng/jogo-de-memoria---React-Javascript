//importa todo os arquivos de style e chamo de "C"
import { useEffect , useState} from "react";
import * as C from "./App.styles";

import logoImage from "./assets/devmemory_logo.png";
import RestartIcon from "./svgs/restart.svg";

import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import { GridItem } from "./components/GridItem";

import {items} from './data/items';

//criar as informações do jogo
const App = () => {
  //antes de criar o grid precisa resetar chamar a função resete
  //e para isso precisa ter as informações para conseguir zerar
//informações que precisa para o jogo funcionar
//tipagem é um boolean
//está tendo jogo?
const [playing, setPlaying] = useState(false)

//tempo que passou
const [timeElapsed, setTimeElapsed] = useState(0);

//quantidade de movimento que foram feitos
const [moveCount, setMoveCount] = useState(0);

//quantidade de ítens que mostra na jogada
//primeiro não mostra nenhuma carta
//jogo da memória mostra uma carta, depois outra
//quando mostrar a segunda carta, precisa verificar se a mesma carta da primeira
//senão tem que desvirar elas
//quantas cartas abriu nessa jogada específica e no máximo é duas cartas

const [shownCount, setShownCount] = useState(0);

//array com o grid  com os ítens que estão na tabela
//no react tudo tem que estar na memória e o resultado é exibido na tela
//exemplo o tempo conta na mémoria e exibe na tela o tempo é contado
//na memória e exibe o resultado na tela
// grid itens é um array de alguma coisa, essa alguma coisa
//precisa ter algumas informações
//necessário criar um type para cada ítem do grid, porque é um
//array de várias coisas
//"GridItemType"
//foi criado um type de GridItem em types/GridItemType
const [gridItems, setGridItems] = useState([]);




  // /para alterar o processo do ciclo de vida, pode usar o useEffect
//useEffect tem que passar dois parâmetro :
//uma função anônima e um array
//o array sao os "obsevers" os ítens a serem observados
//sempre que o useEffect é executado uma vez e a primeira vez ele vem pra "[]"
//e vai monitorar. Dentro dos "[]" você coloca que quer que monitore,
//para que quando alguém que você estiver monitorando, modificar o valor.
//o useEffect sera executado novamente. 
//Nesse exemplo, vai monitorar o name??, foi colocado um array para monitorar
//mais de um item
//quando executar o aplicativo vai iniciar com essa função
//e vai criar a estrutura do jogo

useEffect(() => resetAndCreateGrid(), []);
  //função que vai iniciar o jogo
  //assim que a tela começar
  //vai resetar e criar o grid
  const resetAndCreateGrid = () => {
    //PRIMEIRO PASSO: resetar o jogo
    //limpar as informarções
    //tempo
    setTimeElapsed(0);
    // setPlaying(false);
    //quantidade de movimentos
    setMoveCount(0);
    //quantidade de itens sendo exibidos
    setShownCount(0);
    // setGridItems([]);
   



  //SEGUNDO PASSO: 2.1: criar o grid vazio: criar os dozes slots do item , doze itens específicos do grid
  //depois preenche de forma aleatória, prenche duas vezes, preenche 6 e depos 6
  //criar um grid vazio
  //no grid precisa criar um array, vai preencher o array
  //depois joga no grid items
// "tmGrid" grid temporário vai ser um array vazio que vai ser do tipo  , tipei "tmGrid"
let tmpGrid = [];
  //verifica quantos itens tem e multiplica por dois.
for(let i = 0; i < (items.length * 2); i++)
//iniciar a criação do array
//cria o grid vazio
tmpGrid.push({
  //precisa desses três aqui dentro
item: null,
shown: false,
permanentShown: false
});

 //SEGUNDO PASSO: 2.2 PREENCHER O GRID
//exibir itens aleatórios no grid. Tem 6  e precisa preencher 12 itens
//fazer um loopig dentro de um looping
//for que execute duas vezes
//na primeira execução irá preencher 6 itens
//na segunda execução mais seis serão preenchidos
for(let w = 0; w < 2; w++){

//preencher os seis itens em campos aleatórios do grid 
//depois vai repetir o for e preencher mais seis.
//rodas seis vezes pra preencher os 6 itens
for(let i = 0; i<items.length; i++){
  //começa a posição com -1 porque zero ja é uma posição do grid.
  let pos = -1;

  //enquando a posição form menor que zero ou pós é diferente de nulo, a posição tiver algum item dentro do array de tmpGrid, 
  //então gera a posição aleatoria vezes dois no grid para ele.
  //o array de items tem posição de zero a 5
  //verifica se a posição está preenchida antes de preencher
  //while vai permitir preencher as 12 posições , porque enquanto encontrar uma posição que ja existe ele vai rodar denovo.
 while(pos < 0 || tmpGrid[pos].item !== null) {
 //enquanto o item for diferente de nullo e     tiver item criado no array  "export const items = []" do arquivo items que não tem um posição
  //cria uma posição específica para ele
  //cria um número aleatório de 01 a 12, que serão as posições então sera no lugar do "12" o
  //item.lenght * 2, gerei uma posição ate o item 12
  //enquanto não percorrido os 6 itens, cria a posição vezes dois.
   pos = Math.floor(Math.random() * (items.length * 2));
  
 }//senão
 //quando tiver todas as posições criadas e ter passado por todos os items e separado uma posição para ele
 //vai prencher as posições  reservada com os items dos array
//preenche a posição com o ítem que quer exibir
//vai passando pelo while  ja criou as posiçõe então entra aqui e vai preenchendo essas posições com os items do array.
tmpGrid[pos].item = i;
}
}



 //SEGUNDO PASSO: 2.3 JOGAR NO STATE
 //"tmpGrid" vira todo preechido
 setGridItems(tmpGrid);





// passo três: começar o jogo
setPlaying(true);

  };

  //recebe um index que é um number
const handleItemClick = (index) => {

}

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>
        {/* "resetAndCreateGrid" resetar o jogo e criar/inicializar o grid */}

        {/* <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreateGrid}/> */}
        <Button
          label="Reiniciar"
          icon={RestartIcon}
          onClick={resetAndCreateGrid}
        />
      </C.Info>

      <C.GridArea>
        {/* //itens do grid */}
<C.Grid>
{/* //criar um componente para  cada item do grid */}
{/* //exibir */}
{/* //grid item é o state, ponto map para exibir no array de itens */}
{gridItems.map((item, index) => (
//colocar o component que vai usar
<GridItem 
// insere as props
//key, pois é um map
key={index}
//enviar duas coisas para esse componente GridItem
//primeira coisa as informações que tem dentro de item, ou seja, o proprio item, se está sendo exibido ou não, se é permanente ou não
//falta criar o prop para receber o item
item={item}
//função de click, pra quando clicar no ítem,  a função não sera dentro do próprio componente, será fora que é onde controla o jogo.
//não é um onClick de verdade é uma props que está passando, chamo de onclick pq fica fácil de entender
//quando clicar nele vai executar a função "handleItemClick" e vai dizer qual item que clicou e vai passar o index para saber
onClick={() => handleItemClick(index)}
/>
))}
</C.Grid>
      </C.GridArea>
    </C.Container>
  );
};

export default App;
