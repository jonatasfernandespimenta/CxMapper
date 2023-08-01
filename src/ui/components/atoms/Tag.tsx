interface ITag {
  text: string;
  className?: string;
}

export default function Tag({ text, className }: ITag) {
  return (
    <div
      className={`p-2 rounded-md text-sm text-center justify-center bg-green-200 items-center ${className} w-20 flex`}
    >
      <p>{text}</p>
    </div>
  );
}
