import {
  Dataset as H5WasmDataset,
  Group as H5WasmGroup,
  BrokenSoftLink as H5WasmSoftLink,
  ExternalLink as H5WasmExternalLink,
} from 'h5wasm';
import type { Metadata } from 'h5wasm';

import type {
  H5WasmEntity,
  CompoundMetadata,
  NumericMetadata,
  EnumMetadata,
} from './models';

export function isH5WasmGroup(entity: H5WasmEntity): entity is H5WasmGroup {
  return entity instanceof H5WasmGroup;
}

export function isH5WasmDataset(entity: H5WasmEntity): entity is H5WasmDataset {
  return entity instanceof H5WasmDataset;
}

export function isH5WasmSoftLink(
  entity: H5WasmEntity
): entity is H5WasmSoftLink {
  return entity instanceof H5WasmSoftLink;
}

export function isH5WasmExternalLink(
  entity: H5WasmEntity
): entity is H5WasmExternalLink {
  return entity instanceof H5WasmExternalLink;
}

// See H5T_class_t in https://github.com/usnistgov/h5wasm/blob/main/src/hdf5_util_helpers.d.ts
export function isIntegerMetadata(metadata: Metadata) {
  return metadata.type === 0;
}

export function isFloatMetadata(metadata: Metadata) {
  return metadata.type === 1;
}

export function isNumericMetadata(
  metadata: Metadata
): metadata is NumericMetadata {
  return isIntegerMetadata(metadata) || isFloatMetadata(metadata);
}

export function isStringMetadata(metadata: Metadata) {
  return metadata.type === 2;
}

export function isCompoundMetadata(
  metadata: Metadata
): metadata is CompoundMetadata {
  return metadata.type === 6;
}

export function isEnumMetadata(metadata: Metadata): metadata is EnumMetadata {
  return metadata.type === 8;
}

export function assertH5WasmDataset(
  entity: H5WasmEntity
): asserts entity is H5WasmDataset {
  if (!isH5WasmDataset(entity)) {
    throw new Error('Expected H5Wasm entity to be dataset');
  }
}

export function assertH5WasmEntityWithAttrs(
  entity: H5WasmEntity
): asserts entity is H5WasmGroup | H5WasmDataset {
  if (!isH5WasmGroup(entity) && !isH5WasmDataset(entity)) {
    throw new Error('Expected H5Wasm entity with attributes');
  }
}

export function assertCompoundMetadata(
  metadata: Metadata
): asserts metadata is CompoundMetadata {
  if (!isCompoundMetadata(metadata)) {
    throw new Error('Expected H5Wasm compound metadata');
  }
}

export function assertNumericMetadata(
  metadata: Metadata
): asserts metadata is NumericMetadata {
  if (!isNumericMetadata(metadata)) {
    throw new Error('Expected H5Wasm numeric metadata');
  }
}
