interface ISelect {
  value?: any
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  children: JSX.Element | JSX.Element[]
}

export default function Select({ onChange, value, children }: ISelect) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-1 rounded border-solid border-[1px] border-green-200 bg-green-100 w-full font-sans"
    >
      {children}
    </select>
  );
}
