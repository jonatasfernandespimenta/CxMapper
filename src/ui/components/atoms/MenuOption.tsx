interface IMenuOption {
  icon: JSX.Element;
  text: string;
  onClick?: () => void;
}

export default function MenuOption({ icon, text, onClick }: IMenuOption) {
  return (
    <div
      onClick={onClick}
      className="flex p-2 text-sm flex-row items-center gap-2 cursor-pointer text-gray-500 hover:bg-gray-200 text-md"
    >
      {icon}
      <p>{text}</p>
    </div>
  );
}
