import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SVGCloudDownload from './icons/CloudDownload';

import { scale } from './utils/scale';
import defaults from '../components/icon-button/defaults';
import { IconButton } from '../components/icon-button';

const componentMeta: ComponentMeta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: 'select',
      options: scale.iconButton.variants,
    },
    size: {
      control: 'select',
      options: scale.iconButton.sizes,
    },
    rounded: {
      control: 'select',
      options: scale.iconButton.radii,
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Example = Template.bind({});

Example.args = {
  variant: defaults.variant,
  size: defaults.size,
  rounded: defaults.rounded,
  disabled: false,
  children: <SVGCloudDownload />,
};

export default componentMeta;
