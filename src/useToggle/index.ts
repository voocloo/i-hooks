import { useState } from "react";

export default function useToggle(
  initialState: boolean | (() => boolean) = false
): [boolean, (value?: boolean) => void] {
  const [state, setState] = useState(initialState);

  function handleToggle(value?: boolean): void {
    if (typeof value === "boolean") {
      setState(value);
    } else {
      setState((value) => !value);
    }
  }

  return [state, handleToggle];
}
