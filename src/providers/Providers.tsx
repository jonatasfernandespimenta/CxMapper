import MapContextProvider from "@/contexts/MapContext";

interface IProviders {
  children: JSX.Element | JSX.Element[];
}

export default function Providers({ children }: IProviders) {
  return <MapContextProvider>{children}</MapContextProvider>;
}
