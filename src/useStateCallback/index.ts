import { useState, useRef, useEffect } from "react";

type Handler<T> = (value?: T) => void | never;

type Dispatch<T> = (value?: T, handler?: Handler<T>) => void;

export default function useStateCallback<T>(initialState?: (() => T) | T ): [T | undefined, Dispatch<T>] {
  const [state, setState] = useState(initialState);
  const callback = useRef<Handler<T>>();

  useEffect(() => {
    callback.current && callback.current(state);
  }, [state]);

  function setStateCallback(value?: T, handler?: Handler<T>): void {
    setState(value);
    callback.current = handler;
  }

  return [state, setStateCallback];
}
 
