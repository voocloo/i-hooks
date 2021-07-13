import { useState, useRef, useEffect } from "react";

type Handler<T> = (value: T) => void;

type SetStateAction<T> = T | ((prevState: T) => T);

type Dispatch<T> = (value: SetStateAction<T>, handler?: Handler<T>) => void;

export default function useStateCallback<T = undefined>(initialState?:T): [T, Dispatch<T>];

export default function useStateCallback<T>(
  initialState: (() => T) | T
): [T, Dispatch<T>] {
  const [state, setState] = useState(initialState);
  const callback = useRef<Handler<T>>();

  const setStateCallback: Dispatch<T> = (value, handler) => {
    setState(value);
    callback.current = handler;
  };

  useEffect(() => {
    callback.current && callback.current(state);
  }, [state]);

  return [state, setStateCallback];
}
