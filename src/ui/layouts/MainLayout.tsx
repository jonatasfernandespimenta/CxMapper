import NavBar from "../components/organisms/NavBar";

interface IMainLayout {
  children: JSX.Element | JSX.Element[];
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div>
      <NavBar />

      <div className="mt-10 p-4">{children}</div>
    </div>
  );
}
