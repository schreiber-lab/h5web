import type { NumArray } from '@h5web/shared';
import { useMemo } from 'react';

import { useAxisSystemContext } from '../shared/AxisSystemProvider';

const CAMERA_FAR = 1000; // R3F's default

export function useBufferAttributes(
  abscissas: number[],
  ordinates: number[],
  data: NumArray,
  dataToColorScale: (val: number) => [number, number, number]
) {
  const { abscissaScale, ordinateScale } = useAxisSystemContext();

  return useMemo(() => {
    const position = new Float32Array(3 * data.length);
    const color = new Uint8Array(3 * data.length);

    data.forEach((val, index) => {
      color.set(dataToColorScale(val), 3 * index);

      const x = abscissaScale(abscissas[index]);
      const y = ordinateScale(ordinates[index]);

      const hasFiniteCoords = Number.isFinite(x) && Number.isFinite(y);

      /* Render points with NaN/Infinity coordinates (i.e. values <= 0 in log)
       * at origin to avoid Three warning, and outside of camera's field of view
       * to hide them and any segments connecting them. */
      position.set([x, y, hasFiniteCoords ? 0 : CAMERA_FAR], 3 * index);
    });

    return { position, color };
  }, [
    abscissaScale,
    abscissas,
    dataToColorScale,
    data,
    ordinateScale,
    ordinates,
  ]);
}
