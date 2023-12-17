import { CardPropType } from '../types';

export function Card({ item, id, handleClick }: CardPropType) {
  const itemClass = item.stat ? ' active ' + item.stat : '';

  return (
    <div className={'card' + itemClass} onClick={() => handleClick(id)}>
      <img src={item.img} alt='' />
    </div>
  );
}
