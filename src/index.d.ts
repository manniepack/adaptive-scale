export as namespace AS;

export class Size {
  width: number;
  height: number;

  constructor(width: number, height: number);
}

export class Rect {
  x: number;
  y: number;

  constructor(width: number, height: number, x: number, y: number)
}

export enum POLICY {
  ExactFit=1,
  NoBorder,
  FullHeight,
  FullWidth,
  ShowAll,
}

export interface Options {
  container: Size,
  target: Size,
  policy: POLICY,
}

export function getScaledRect({ container, target, policy }: Options): Rect;
