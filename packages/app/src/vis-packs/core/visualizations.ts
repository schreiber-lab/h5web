import type { Dataset } from '@h5web/shared';
import { hasPrintableFields } from '@h5web/shared';
import { hasCompoundType } from '@h5web/shared';
import { hasNumDims } from '@h5web/shared';
import {
  hasScalarShape,
  hasArrayShape,
  hasNonNullShape,
  hasMinDims,
  hasPrintableType,
  hasNumericType,
  hasComplexType,
} from '@h5web/shared';
import {
  FiCode,
  FiGrid,
  FiActivity,
  FiMap,
  FiCpu,
  FiImage,
} from 'react-icons/fi';

import type { AttrValuesStore } from '../../providers/models';
import type { VisDef } from '../models';
import CompoundMatrixVisContainer from './compound/CompoundMatrixVisContainer';
import {
  LineConfigProvider,
  HeatmapConfigProvider,
  ComplexConfigProvider,
  ComplexLineConfigProvider,
  RgbConfigProvider,
  MatrixConfigProvider,
} from './configs';
import {
  RawVisContainer,
  ScalarVisContainer,
  MatrixVisContainer,
  LineVisContainer,
  HeatmapVisContainer,
  ComplexVisContainer,
  ComplexLineVisContainer,
  RgbVisContainer,
} from './containers';

export enum Vis {
  Raw = 'Raw',
  Scalar = 'Scalar',
  Matrix = 'Matrix',
  Line = 'Line',
  Heatmap = 'Heatmap',
  Complex = 'Complex',
  ComplexLine = 'ComplexLine',
  RGB = 'RGB',
  CompoundMatrix = 'CompoundMatrix',
}

export interface CoreVisDef extends VisDef {
  supportsDataset: (
    dataset: Dataset,
    attrValuesStore: AttrValuesStore
  ) => boolean;
}

export const CORE_VIS: Record<Vis, CoreVisDef> = {
  [Vis.Raw]: {
    name: Vis.Raw,
    Icon: FiCpu,
    Container: RawVisContainer,
    supportsDataset: hasNonNullShape,
  },

  [Vis.Scalar]: {
    name: Vis.Scalar,
    Icon: FiCode,
    Container: ScalarVisContainer,
    supportsDataset: (dataset) => {
      return hasPrintableType(dataset) && hasScalarShape(dataset);
    },
  },

  [Vis.Matrix]: {
    name: Vis.Matrix,
    Icon: FiGrid,
    Container: MatrixVisContainer,
    ConfigProvider: MatrixConfigProvider,
    supportsDataset: (dataset) => {
      return hasPrintableType(dataset) && hasArrayShape(dataset);
    },
  },

  [Vis.Line]: {
    name: Vis.Line,
    Icon: FiActivity,
    Container: LineVisContainer,
    ConfigProvider: LineConfigProvider,
    supportsDataset: (dataset) => {
      return hasNumericType(dataset) && hasArrayShape(dataset);
    },
  },

  [Vis.Heatmap]: {
    name: Vis.Heatmap,
    Icon: FiMap,
    Container: HeatmapVisContainer,
    ConfigProvider: HeatmapConfigProvider,
    supportsDataset: (dataset) => {
      return (
        hasNumericType(dataset) &&
        hasArrayShape(dataset) &&
        hasMinDims(dataset, 2)
      );
    },
  },

  [Vis.ComplexLine]: {
    name: Vis.Line,
    Icon: FiActivity,
    Container: ComplexLineVisContainer,
    ConfigProvider: ComplexLineConfigProvider,
    supportsDataset: (dataset) => {
      return hasComplexType(dataset) && hasArrayShape(dataset);
    },
  },

  [Vis.Complex]: {
    name: Vis.Heatmap,
    Icon: FiMap,
    Container: ComplexVisContainer,
    ConfigProvider: ComplexConfigProvider,
    supportsDataset: (dataset) => {
      return (
        hasComplexType(dataset) &&
        hasArrayShape(dataset) &&
        hasMinDims(dataset, 2)
      );
    },
  },

  [Vis.RGB]: {
    name: Vis.RGB,
    Icon: FiImage,
    Container: RgbVisContainer,
    ConfigProvider: RgbConfigProvider,
    supportsDataset: (dataset, attrValuesStore) => {
      return (
        attrValuesStore.getSingle(dataset, 'CLASS') === 'IMAGE' &&
        hasArrayShape(dataset) &&
        dataset.shape.length === 3 &&
        hasNumericType(dataset)
      );
    },
  },

  [Vis.CompoundMatrix]: {
    name: Vis.Matrix,
    Icon: FiGrid,
    Container: CompoundMatrixVisContainer,
    ConfigProvider: MatrixConfigProvider,
    supportsDataset: (dataset) => {
      return (
        hasCompoundType(dataset) &&
        hasPrintableFields(dataset) &&
        hasArrayShape(dataset) &&
        hasNumDims(dataset, 1)
      );
    },
  },
};
