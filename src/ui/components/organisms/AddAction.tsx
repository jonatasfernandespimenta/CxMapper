"use client";

import AddActionButton from "../atoms/AddActionButton";
import ActionsMenu from "../molecules/ActionsMenu";
import { useRulerData } from "@/contexts/RulerContext";

export default function AddAction() {
  const { isAddActionMenuOpen, setIsAddActionMenuOpen } = useRulerData();

  function closeDropDown() {
    setIsAddActionMenuOpen(!isAddActionMenuOpen);
  }

  return (
    <div className="flex flex-col rounded-full bg-green-200 p-1.5 mt-8 border-solid border-green-500 border-2 items-center">
      <AddActionButton onClick={closeDropDown} />

      {isAddActionMenuOpen && <ActionsMenu />}
    </div>
  );
}
