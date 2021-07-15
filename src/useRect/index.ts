import { useState, useEffect } from "react";

type Rect = DOMRect | null;

function isElement(element: unknown): element is Element {
  return element instanceof Element;
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNull(value: unknown): value is null {
  return value === null;
}

function useRect(selector: Element | string | null = null): Rect {
  const [rect, setRect] = useState<Rect>(null);
  useEffect(() => {
    let element: Element | null = null;
    if (isElement(selector)) {
      element = selector;
    }
    if (isString(selector)) {
      element = window.document.querySelector(selector);
    }
    if (isNull(selector)) {
      element = window.document.documentElement;
    }
    element && setRect(element.getBoundingClientRect());
  }, []);

  return rect;
}

export default useRect;
