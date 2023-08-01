"use client";

import { useState } from "react";
import ActionHeader from "../atoms/ActionHeader";
import ActionStatus from "../atoms/ActionStatus";

interface IAction {
  onClick?: () => void;
  ref?: any;
  icon: JSX.Element;
  actionName: string;
  children?: JSX.Element;
  done?: number;
  failed?: number;
  hasStatus?: boolean;
}

export default function Action({
  icon,
  actionName,
  children,
  done,
  failed,
  hasStatus,
}: IAction) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <div
        className={`w-56 ${
          !hasStatus && "mt-4"
        } text-sm p-4 shadow rounded-md border-solid border-[1px] flex justify-center flex-col gap-4`}
      >
        <ActionHeader
          onClick={() => setIsVisible(!isVisible)}
          icon={icon}
          isActive={isVisible}
          actionName={actionName}
          done={done}
          failed={failed}
          hasStatus={hasStatus}
        />

        <div className={isVisible ? "" : "hidden"}>{children}</div>
      </div>
    </>
  );
}
