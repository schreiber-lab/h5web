import type {
  GroupWithChildren,
  NumArrayDataset,
  ScaleType,
} from '@h5web/shared';
import { isDefined } from '@h5web/shared';

import { useDataContext } from '../../providers/DataProvider';
import { useDatasetValues } from '../core/hooks';
import type { AxisMapping } from '../core/models';
import type { Auxiliary, AxisDatasetMapping, NxData } from './models';
import {
  assertNxDataGroup,
  findAssociatedDatasets,
  findAxesDatasets,
  findErrorsDataset,
  findSignalDataset,
  findTitleDataset,
  getDatasetLabel,
  getSilxStyle,
} from './utils';

export function useNxData(group: GroupWithChildren): NxData {
  const { attrValuesStore } = useDataContext();

  assertNxDataGroup(group, attrValuesStore);
  const signalDataset = findSignalDataset(group, attrValuesStore);
  const errorsDataset =
    findErrorsDataset(group, signalDataset.name) || findErrorsDataset(group);
  const auxDatasets = findAssociatedDatasets(
    group,
    'auxiliary_signals',
    attrValuesStore
  ).filter(isDefined);
  const auxErrorsDatasets = auxDatasets
    .map((auxDataset) => findErrorsDataset(group, auxDataset.name))
    .filter(isDefined);

  return {
    signalDataset,
    errorsDataset,
    axisDatasets: findAxesDatasets(group, signalDataset, attrValuesStore),
    titleDataset: findTitleDataset(group),
    silxStyle: getSilxStyle(group, attrValuesStore),
    auxDatasets,
    auxErrorsDatasets,
  };
}

export function useAxisMapping(
  mapping: AxisDatasetMapping,
  axisScaleTypes: ScaleType[] | undefined
): AxisMapping {
  const { attrValuesStore } = useDataContext();

  const axisValues = useDatasetValues(mapping.filter(isDefined));

  return mapping.map((dataset, i) => {
    return (
      dataset && {
        label: getDatasetLabel(dataset, attrValuesStore),
        value: axisValues[dataset.name],
        scaleType: axisScaleTypes?.[i],
      }
    );
  });
}

export function useAuxiliaries(
  auxDatasets: NumArrayDataset[],
  selection: string | undefined,
  auxErrorsDatasets: NumArrayDataset[] = []
): Auxiliary[] {
  const { attrValuesStore } = useDataContext();

  const auxValues = useDatasetValues(
    [...auxDatasets, ...auxErrorsDatasets],
    selection
  );

  return auxDatasets.map((dataset) => ({
    label: getDatasetLabel(dataset, attrValuesStore),
    value: auxValues[dataset.name],
    error: auxValues[`${dataset.name}_errors`],
  }));
}
