import Box from "../atoms/Box";

interface ITemplateBox {
  name: string
  description: string | undefined
}

export default function TemplateBox({ description, name }: ITemplateBox) {
  return (
    <Box>
      <h1 className="font-bold mb-2">{name}</h1>
      <p className="text-sm">{description}</p>
    </Box>
  )
}
