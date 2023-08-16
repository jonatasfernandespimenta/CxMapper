interface IAmountIndicator {
  label: string
  amount: string | number
  type: 'neutral' | 'red' | 'green'
}

export default function AmountIndicator({ amount, type, label }: IAmountIndicator) {
  const textColor = type === 'green' ? 'text-lime-500' : type === 'red' ? 'text-red-500' : 'text-black';

  return (
    <div className="shadow-md h-fit rounded p-6 w-40 flex flex-col items-center">
      <p>{label}</p>
      <p className={`text-3xl ${textColor} `}>{amount}</p>
    </div>
  );
}
