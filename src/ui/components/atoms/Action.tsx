"use client";

import { useState } from "react";
import ActionHeader from "./ActionHeader";

interface IAction {
  onClick?: () => void;
  ref?: any;
  icon: JSX.Element;
  actionName: string;
  children?: JSX.Element;
}

export default function Action({ icon, actionName, children }: IAction) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="w-56 text-sm p-4 shadow rounded-md border-solid border-[1px] flex justify-center flex-col gap-4">
      <ActionHeader
        onClick={() => setIsVisible(!isVisible)}
        icon={icon}
        isActive={isVisible}
        actionName={actionName}
      />

      {isVisible && children}
    </div>
  );
}
