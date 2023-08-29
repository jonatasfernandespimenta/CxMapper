interface IBox {
  children: JSX.Element | JSX.Element[];
  shadow?: boolean;
  borderStyle?: 'solid' | 'dashed';
  className?: string;
  onClick?: () => void;
}

export default function Box({
  children,
  shadow = true,
  borderStyle = 'solid',
  className,
  onClick,
}: IBox) {
  return (
    <div
      onClick={onClick}
      className={`
        p-4
        ${shadow && 'shadow'} 
        rounded-md 
        border-${borderStyle === 'solid' ? '[1px]' : '2'} 
        border-${borderStyle} 
        w-56 
        cursor-pointer 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
