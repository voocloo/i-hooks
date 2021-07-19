import {  EffectCallback, useEffect } from "react";
 
export default function useOnceEffect(callback:EffectCallback): void {
   return useEffect(callback,[]);
}
