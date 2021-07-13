import { useState } from "react";

type Toggle = (value?: boolean) => void;

export default function useToggle(
  initialState: boolean | (() => boolean) = false
): [boolean, Toggle] {
  const [state, setState] = useState(initialState);

  const toggle: Toggle = (value) => {
    if (typeof value === "boolean") {
      setState(value);
    } else {
      setState((value) => !value);
    }
  };

  return [state, toggle];
}
