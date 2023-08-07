import { useEffect, useState } from "react";
import Select, { Props } from "react-select";

interface IMySelect extends Props {

}

const MySelect = ({
  ...props
}: IMySelect) => {
  const id = Date.now().toString();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <Select
      id={id}
      {...props}
      classNamePrefix="my-select"
    />
  ) : null;
};

export default MySelect;
