import { PropsWithChildren, useMemo } from "react";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";

export interface ControlsProps {}

export enum ControlsEnum {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right',
  jump = 'jump',
}

function Controls({ children }: PropsWithChildren<ControlsProps>) {
  const map = useMemo<KeyboardControlsEntry<ControlsEnum>[]>(()=>[
    { name: ControlsEnum.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: ControlsEnum.back, keys: ['ArrowDown', 'KeyS'] },
    { name: ControlsEnum.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: ControlsEnum.right, keys: ['ArrowRight', 'KeyD'] },
    { name: ControlsEnum.jump, keys: ['Space'] },
  ], [])

  return (
    <KeyboardControls map={map}>
      {children}
    </KeyboardControls>
  );
}

export default Controls;
