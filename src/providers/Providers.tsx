import RulerContextProvider from "@/contexts/RulerContext";

interface IProviders {
  children: JSX.Element | JSX.Element[];
}

export default function Providers({ children }: IProviders) {
  return <RulerContextProvider>{children}</RulerContextProvider>;
}
