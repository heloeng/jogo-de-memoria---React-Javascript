
import { useEffect, useState } from "react";
import * as C from "./App.styles";

import logoImage from "./assets/devmemory_logo.png";
import RestartIcon from "./svgs/restart.svg";

import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import { GridItem } from "./components/GridItem";
import { items } from './data/items';
import { formatTimeElapsed } from "./helpers/formatTimeElapse";

const App = () => {
  const [playing, setPlaying] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [gridItems, setGridItems] = useState([]);
  useEffect(() => resetAndCreateGrid(), []);
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1)
      }

    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);
  const resetAndCreateGrid = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
    let tmpGrid = [];
    for (let i = 0; i < (items.length * 2); i++)
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });

    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));

        }
        tmpGrid[pos].item = i;
      }
    }
    setGridItems(tmpGrid);
    setPlaying(true);

  };

  const handleItemClick = (index) => {
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>

          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>
        <Button
          label="Reiniciar"
          icon={RestartIcon}
          onClick={resetAndCreateGrid}
        />
      </C.Info>

      <C.GridArea>

        <C.Grid>

          {gridItems.map((item, index) => (

            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
};
export default App;
