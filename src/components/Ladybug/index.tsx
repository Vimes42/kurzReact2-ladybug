import './style.css';


export interface LadybugProps {
  ladybugProp: {
    posX: number,
    posY: number,
    orientation: 'up' | 'right' | 'down' | 'left',
  }
}

export const Ladybug = ({ ladybugProp }: LadybugProps) => {
  return (
    <div
      className={`ladybug ladybug--${ladybugProp.orientation}`}
      style={{
        top: `${ladybugProp.posX}px`,
        left: `${ladybugProp.posY}px`,
      }}
    />
  );
};

export default Ladybug;