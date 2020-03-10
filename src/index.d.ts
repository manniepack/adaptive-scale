declare module 'adaptive-scale';

declare class Size {
  width: number;
  height: number;

  constructor(width: number, height: number);
}

declare class Rect {
  x: number;
  y: number;

  constructor(width: number, height: number, x: number, y: number)
}

declare enum POLICY {
  ExactFit=1,
  NoBorder,
  FullHeight,
  FullWidth,
  ShowAll,
}

declare interface Options {
  container: Size,
  target: Size,
  policy: POLICY,
}

declare function getScaledRect({ container, target, policy }: Options): Rect;
