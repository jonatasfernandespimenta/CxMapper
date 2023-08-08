import Box from "../atoms/Box";
import Tag from "../atoms/Tag";

interface ITemplateBox {
  name: string
  description: string | undefined
  tag: string
}

export default function TemplateBox({ description, name, tag }: ITemplateBox) {
  return (
    <Box>
      <h1 className="font-bold mb-2">{name}</h1>
      <p className="text-sm">{description}</p>

      <div className="mt-2">
        <Tag text={tag} />
      </div>
    </Box>
  )
}
