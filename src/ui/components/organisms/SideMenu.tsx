import ConditionSettings from "../molecules/ConditionSettings";

interface ISideMenu {
  menu: "condition";
}

export default function SideMenu({ menu }: ISideMenu) {
  return (
    <div className="flex flex-col fixed right-0 h-screen shadow-md w-52 p-4 rounded-md border-solid border-[#DADCE0] border-[1px]">
      {menu === "condition" && <ConditionSettings />}
    </div>
  );
}
