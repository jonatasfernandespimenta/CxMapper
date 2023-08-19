import Dropdown from '../molecules/Dropdown'

export default function NavBar() {
  return (
    <nav className="bg-green-500 gap-6 flex flex-row items-center w-screen font-semibold fixed top-0 p-3 text-white z-20">
      <a href="/maps">
        <img src="/logo.png" width={150} alt="cxmapper logo" />
      </a>

      <Dropdown />

      <p className="cursor-pointer hover:bg-green-600 p-2 rounded">
        <a href="/governance/0">Insights</a>
      </p>
    </nav>
  )
}
