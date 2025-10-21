import './style.css';

export type Direction = 'up' | 'right' | 'down' | 'left';

interface LadybugProps {
  posX: number;
  posY: number;
  orientation: Direction;
}

export const Ladybug = ({ posX, posY, orientation }: LadybugProps) => {
  return (
    <div
      className={`ladybug ladybug--${orientation}`}
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug;