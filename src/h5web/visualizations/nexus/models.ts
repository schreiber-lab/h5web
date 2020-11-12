import { AxisMapping, ScaleType } from '../shared/models';

export type NxAttribute =
  | 'signal'
  | 'interpretation'
  | 'axes'
  | 'default'
  | 'long_name'
  | 'units'
  | 'SILX_style';

export enum NxInterpretation {
  Spectrum = 'spectrum',
  Image = 'image',
}

export const NX_INTERPRETATIONS = Object.values<string>(NxInterpretation);

export interface NxData {
  signal: { label?: string; value?: number[]; dims: number[] };
  errors?: number[];
  title?: string;
  axisMapping?: AxisMapping[];
}

export interface RawSilxStyle {
  signal_scale_type?: unknown;
  axes_scale_type?: unknown;
}

export interface SilxStyle {
  signal_scale_type?: ScaleType;
  axes_scale_type?: ScaleType[];
}
