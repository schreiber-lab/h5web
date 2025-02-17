import type { Domain } from '@h5web/lib';
import {
  ColorMapSelector,
  DomainSlider,
  ExportMenu,
  FlipYAxisToggler,
  GridToggler,
  ScaleSelector,
  ScaleType,
  Separator,
  SnapshotBtn,
  ToggleBtn,
  Toolbar,
} from '@h5web/lib';
import type { ArrayShape, Dataset, NumericType } from '@h5web/shared';
import { useEffect } from 'react';
import { MdAspectRatio } from 'react-icons/md';
import shallow from 'zustand/shallow';

import { useDataContext } from '../../../providers/DataProvider';
import type { ExportFormat } from '../../../providers/models';
import { getImageInteractions } from '../utils';
import { useHeatmapConfig } from './config';

const EXPORT_FORMATS: ExportFormat[] = ['tiff', 'npy'];

interface Props {
  dataset: Dataset<ArrayShape, NumericType>;
  dataDomain: Domain;
  selection: string | undefined;
  initialScaleType: ScaleType | undefined;
}

function HeatmapToolbar(props: Props) {
  const { dataset, dataDomain, selection, initialScaleType } = props;

  const { getExportURL } = useDataContext();

  const {
    customDomain,
    setCustomDomain,
    colorMap,
    setColorMap,
    scaleType,
    setScaleType,
    layout,
    setLayout,
    showGrid,
    toggleGrid,
    invertColorMap,
    toggleColorMapInversion,
    flipYAxis,
    toggleYAxisFlip,
  } = useHeatmapConfig((state) => state, shallow);

  useEffect(() => {
    if (initialScaleType) {
      setScaleType(initialScaleType);
    }
  }, [initialScaleType, setScaleType]);

  return (
    <Toolbar interactions={getImageInteractions(layout)}>
      <DomainSlider
        dataDomain={dataDomain}
        customDomain={customDomain}
        scaleType={scaleType}
        onCustomDomainChange={setCustomDomain}
      />
      <Separator />

      <ColorMapSelector
        value={colorMap}
        onValueChange={setColorMap}
        invert={invertColorMap}
        onInversionChange={toggleColorMapInversion}
      />

      <Separator />

      <ScaleSelector
        value={scaleType}
        onScaleChange={setScaleType}
        options={[
          ScaleType.Linear,
          ScaleType.Log,
          ScaleType.SymLog,
          ScaleType.Sqrt,
        ]}
      />

      <Separator />

      <FlipYAxisToggler value={flipYAxis} onToggle={toggleYAxisFlip} />

      <ToggleBtn
        label="Keep ratio"
        icon={MdAspectRatio}
        value={layout === 'cover'}
        onToggle={() => setLayout(layout === 'cover' ? 'fill' : 'cover')}
      />

      <GridToggler value={showGrid} onToggle={toggleGrid} />

      <Separator />

      {getExportURL && (
        <ExportMenu
          formats={EXPORT_FORMATS}
          isSlice={selection !== undefined}
          getFormatURL={(format: ExportFormat) =>
            getExportURL(dataset, selection, format)
          }
        />
      )}

      <SnapshotBtn />
    </Toolbar>
  );
}

export default HeatmapToolbar;
