import { ElementType } from "../../../../requests/types";

export const ElementImage = (props: { name: ElementType }) => {
  const { name } = props;

  return <img src={`/types/${name}.png`} alt={`${name} type`} height={24} />;
};
