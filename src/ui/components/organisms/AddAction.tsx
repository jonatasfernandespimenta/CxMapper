"use client";

import AddActionButton from "../atoms/AddActionButton";
import ActionsMenu from "../molecules/ActionsMenu";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useRulerData } from "@/contexts/RulerContext";

export default function AddAction() {
  const { isAddActionMenuOpen, setIsAddActionMenuOpen } = useRulerData();

  function closeDropDown() {
    setIsAddActionMenuOpen(!isAddActionMenuOpen);
  }

  const ref = useDetectClickOutside({ onTriggered: closeDropDown });

  return (
    <div className="flex flex-col">
      <AddActionButton ref={ref} onClick={closeDropDown} />

      {isAddActionMenuOpen && <ActionsMenu />}
    </div>
  );
}
