import { useState } from 'react';
import Ladybug from './components/Ladybug';
import type { Direction } from './components/Ladybug';

const STEP_SIZE = 25;

export const App = () => {
  const [posX, setPosX] = useState<number>(100);
  const [posY, setPosY] = useState<number>(100);
  const [orientation, setOrientation] = useState<Direction>('right');

  const handleKeyUp = ({ code }:React.KeyboardEvent<HTMLDivElement>) => {
    if (code === 'ArrowUp') {
      setOrientation('up');
      setPosX(posX - STEP_SIZE);
    } else if (code === 'ArrowLeft') {
      setOrientation('left');
      setPosY(posY - STEP_SIZE);
    } else if (code === 'ArrowRight') {
      setOrientation('right');
      setPosY(posY + STEP_SIZE);
    } else if (code === 'ArrowDown') {
      setOrientation('down');
      setPosX(posX + STEP_SIZE);
    }
  };

  return (
    <div
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Kliknutím kamkoliv začneš hru</header>
      <Ladybug posX={posX} posY={posY} orientation={orientation} />
    </div>
  );
};

export default App;
