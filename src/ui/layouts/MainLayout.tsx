import NavBar from "../components/organisms/NavBar";
import SideMenu from "../components/organisms/SideMenu";

interface IMainLayout {
  children: JSX.Element | JSX.Element[];
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div>
      <NavBar />
      {/* <SideMenu menu="condition" /> */}

      <div className="mt-10 p-4">{children}</div>
    </div>
  );
}
