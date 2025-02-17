import { useCanvasEvents, useInteraction, useZoomOnWheel } from './hooks';
import type { CommonInteractionProps } from './models';
import { getModifierKeyArray } from './utils';

type Props = CommonInteractionProps;

function XAxisZoom(props: Props) {
  const { modifierKey, disabled } = props;
  const shouldInteract = useInteraction('XAxisZoom', {
    modifierKeys: getModifierKeyArray(modifierKey),
    disabled,
    button: 'Wheel',
  });

  const isZoomAllowed = (sourceEvent: WheelEvent) => ({
    x: shouldInteract(sourceEvent),
    y: false,
  });

  useCanvasEvents({ onWheel: useZoomOnWheel(isZoomAllowed) });

  return null;
}

export type { Props as XAxisZoomProps };
export default XAxisZoom;
