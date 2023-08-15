interface ITextArea {
  value: any
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
}

export default function TextArea({ onChange, value, placeholder }: ITextArea) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="w-full rounded-md p-1 border-solid border-[#DADCE0] border-[1px] focus:outline-none focus:ring focus:ring-green-300"
      placeholder={placeholder}
    />
  );
}
