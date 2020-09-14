/// <reference types="react-scripts" />

declare module 'ndarray-unpack' {
  import ndarray from 'ndarray';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function unpack<LT = T>(a: ndarray<T>): LT[];

  export = unpack;
}

declare module 'ndarray-ops' {
  function assign(a: ndarray<T>, b: ndarray<T>);

  export = { assign };
}
