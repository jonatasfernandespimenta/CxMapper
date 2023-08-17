interface IButton {
  handlePress: () => void;
  text: string
  className?: string
}

export default function Button({ handlePress, text, className }: IButton) {
  return (
    <button onClick={handlePress} type="button" className={`p-2 bg-green-200 rounded ${className}`}>
      {text}
    </button>
  );
}
