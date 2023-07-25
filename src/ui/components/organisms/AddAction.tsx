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
    <div className="flex flex-col">
      <AddActionButton onClick={closeDropDown} />

      {isAddActionMenuOpen && <ActionsMenu />}
    </div>
  );
}
