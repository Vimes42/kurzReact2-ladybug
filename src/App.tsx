import { useState } from 'react';
import Ladybug from './components/Ladybug';

const STEP_SIZE = 25;



export const App = () => {
  interface LadybugProps {
    posX: number,
    posY: number,
    orientation: 'up' | 'right' | 'down' | 'left',
}

  const [ladybugState, setLadybugState] = useState<LadybugProps>({
      posX: 100,
      posY: 100,
      orientation: 'right',
});

  const handleKeyUp = ({ code }:React.KeyboardEvent<HTMLDivElement>) => {
    if (code === 'ArrowUp') {
      setLadybugState({...ladybugState, orientation: 'up', posX: ladybugState.posX - STEP_SIZE});
    } else if (code === 'ArrowLeft') {
      setLadybugState({...ladybugState, orientation: 'left', posY: ladybugState.posY - STEP_SIZE});
    } else if (code === 'ArrowRight') {
      setLadybugState({...ladybugState, orientation: 'right', posY: ladybugState.posY + STEP_SIZE});
    } else if (code === 'ArrowDown') {
      setLadybugState({...ladybugState, orientation: 'down', posX: ladybugState.posX + STEP_SIZE});
    }
  };

  return (
    <div
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
      autoFocus
    >
      <header>Kliknutím kamkoliv začneš hru</header>
      <Ladybug ladybugProp={ladybugState} />
    </div>
  );
};

export default App;
