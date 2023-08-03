"use client";

import { useState } from "react";
import ActionHeader from "../atoms/ActionHeader";
import { useRulerData } from "@/contexts/RulerContext";

interface IAction {
  onClick?: () => void;
  ref?: any;
  icon: JSX.Element;
  actionName: string;
  children?: JSX.Element;
  done?: number;
  failed?: number;
  hasStatus?: boolean;
  itemId: string
  description?: string
}

export default function Action({
  icon,
  actionName,
  children,
  done,
  failed,
  hasStatus,
  itemId,
  description
}: IAction) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { items, setItems } = useRulerData();

  function handleDelete() {
    const filteredItems = items.filter(item => item.id !== itemId)
    setItems(filteredItems)
  }

  return (
    <>
      <div
        className={`w-56 ${!hasStatus && "mt-4"
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
          onDelete={handleDelete}
        />
        {description && <p className="flex self-center text-center">{description}</p>}
        <div className={isVisible ? "" : "hidden"}>{children}</div>
      </div>
    </>
  );
}
