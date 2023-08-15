interface IButton {
  handlePress: () => void;
  text: string
}

export default function Button({ handlePress, text }: IButton) {
  return (
    <button onClick={handlePress} type="button" className="p-2 bg-green-200 rounded">
      {text}
    </button>
  );
}
