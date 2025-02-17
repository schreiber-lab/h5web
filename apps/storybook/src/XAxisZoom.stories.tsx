import { Pan, ResetZoomButton, VisCanvas, XAxisZoom } from '@h5web/lib';
import type { XAxisZoomProps } from '@h5web/lib';
import type { Meta, Story } from '@storybook/react';

import FillHeight from './decorators/FillHeight';

const Template: Story<XAxisZoomProps> = (args) => {
  return (
    <VisCanvas
      abscissaConfig={{ visDomain: [-10, 0], showGrid: true }}
      ordinateConfig={{ visDomain: [50, 100], showGrid: true }}
    >
      <Pan />
      <XAxisZoom {...args} />
      <ResetZoomButton />
    </VisCanvas>
  );
};

export const Default = Template.bind({});

export const ModifierKey = Template.bind({});
ModifierKey.args = {
  modifierKey: ['Alt'],
};

export const MultipleModifierKeys = Template.bind({});
MultipleModifierKeys.args = {
  modifierKey: ['Control', 'Alt'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export default {
  title: 'Building Blocks/Interactions/XAxisZoom',
  component: XAxisZoom,
  parameters: { layout: 'fullscreen' },
  decorators: [FillHeight],
  args: {
    modifierKey: [],
    disabled: false,
  },
  argTypes: {
    modifierKey: {
      control: { type: 'inline-check' },
      options: ['Alt', 'Control', 'Shift'],
    },
  },
} as Meta<XAxisZoomProps>;
