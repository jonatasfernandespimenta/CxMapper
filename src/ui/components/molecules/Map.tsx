import Box from "../atoms/Box";
import Tag from "../atoms/Tag";

interface IMap {
  name: string;
  tag: string;
}

export default function Map({ name, tag }: IMap) {
  return (
    <Box>
      <h1>{name}</h1>
      <Tag text={tag} />
    </Box>
  );
}
