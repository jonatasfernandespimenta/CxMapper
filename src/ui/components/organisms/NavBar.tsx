import Dropdown from "../molecules/Dropdown";

export default function NavBar() {
  return (
    <nav className="bg-gray-700 gap-6 flex flex-row items-center w-screen font-semibold fixed top-0 p-3 text-white z-20">
      <img src="/logo.png" width={150} />

      <Dropdown />

      <p className="cursor-pointer hover:bg-gray-600 p-2 rounded">Dashboards</p>
    </nav>
  );
}
