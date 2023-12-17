type ItemType = {
  id: number;
  img: string;
  stat: string;
};
export type CardPropType = {
  item: ItemType;
  id: number;
  handleClick: (id: number) => void;
};
