import { OverlapCallback } from "./overlap-callback.protocol";

export function overlapCallbackAdapter(...callbacks: OverlapCallback[]) {
  return (obj1Name: string, obj2Name: string) => {
    callbacks.forEach((callback) => callback(obj1Name, obj2Name));
  };
}
