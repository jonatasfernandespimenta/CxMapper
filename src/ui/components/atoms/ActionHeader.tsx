import Divider from "./Divider"

interface IActionHeader {
  icon: JSX.Element
  actionName: string
}

export default function ActionHeader({ icon, actionName }: IActionHeader) {
  return(
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-row items-center gap-2">
        <div className="bg-green-200 p-1 rounded">
          {icon}
        </div>

        <p className="text-black font-semibold">{actionName}</p>
      </div>

      <Divider />
    </div>
  )
}
