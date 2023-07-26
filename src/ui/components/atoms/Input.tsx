interface IInput {
  value: any
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
}

export default function Input({ onChange, value, placeholder, type }: IInput) {
  return(
    <input
      value={value}
      onChange={onChange}
      className="w-full rounded-md p-1 border-solid border-[#DADCE0] border-[1px] focus:outline-none focus:ring focus:ring-green-300"
      placeholder={placeholder}
      type={type}
    />
  )
}
