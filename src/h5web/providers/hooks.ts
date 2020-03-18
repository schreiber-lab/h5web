import { useState, useEffect, useContext } from 'react';
import { HDF5Link, HDF5Entity, HDF5Id, HDF5Value } from './models';
import { TreeNode } from '../explorer/models';
import { ProviderContext } from './context';
import { buildTree, isReachable } from './utils';

export function useDomain(): string {
  const { getDomain } = useContext(ProviderContext);
  return getDomain();
}

export function useMetadataTree(): TreeNode<HDF5Link> | undefined {
  const { getMetadata } = useContext(ProviderContext);
  const [tree, setTree] = useState<TreeNode<HDF5Link>>();

  useEffect(() => {
    getMetadata()
      .then(buildTree)
      .then(setTree);
  }, [getMetadata]);

  return tree;
}

export function useEntity(link?: HDF5Link): HDF5Entity | undefined {
  const { getMetadata } = useContext(ProviderContext);
  const [entity, setEntity] = useState<HDF5Entity | undefined>();

  useEffect(() => {
    if (!link || !isReachable(link)) {
      setEntity(undefined);
      return;
    }

    getMetadata().then(metadata => {
      const { collection, id } = link;
      const dict = metadata[collection];
      setEntity(dict && dict[id]);
    });
  }, [link, getMetadata]);

  return entity;
}

export function useValue(id: HDF5Id): HDF5Value {
  const { getValue } = useContext(ProviderContext);
  const [value, setValue] = useState<HDF5Value>();

  useEffect(() => {
    getValue(id).then(setValue);
  }, [id, getValue]);

  return value;
}
