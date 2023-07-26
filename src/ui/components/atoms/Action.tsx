import ActionHeader from "./ActionHeader";

interface IAction {
  onClick?: () => void;
  ref?: any;
  icon: JSX.Element;
  actionName: string
  children?: JSX.Element
}

export default function Action({ icon, actionName, children }: IAction) {
  return (
    <div className="w-60 p-4 shadow rounded-md border-solid border-[1px] flex justify-center flex-col gap-4">
      <ActionHeader icon={icon} actionName={actionName} />

      {children}
    </div>
  );
}
