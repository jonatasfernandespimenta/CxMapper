import Box from "../atoms/Box";

interface IMap {
  name: string;
}

export default function Map({ name }: IMap) {
  return (
    <Box>
      <h1>{name}</h1>
    </Box>
  );
}
