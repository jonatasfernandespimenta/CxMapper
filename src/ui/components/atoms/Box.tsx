interface IBox {
  children: JSX.Element | JSX.Element[];
  shadow?: boolean;
  borderStyle?: "solid" | "dashed";
  className?: string;
}

export default function Box({
  children,
  shadow = true,
  borderStyle = "solid",
  className,
}: IBox) {
  return (
    <div
      className={`
        p-4
        ${shadow && "shadow"} 
        rounded-md 
        border-${borderStyle === "solid" ? "[1px]" : "2"} 
        border-${borderStyle} 
        w-52 
        h-20 
        cursor-pointer 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
