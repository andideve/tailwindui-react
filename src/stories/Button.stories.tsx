import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SVGCloudDownload from './icons/CloudDownload';

import { scale } from './utils/scale';
import defaults from '../components/button/defaults';
import { Button } from '../components/button';

const componentMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: scale.button.variants,
    },
    size: {
      control: 'select',
      options: scale.button.sizes,
    },
    rounded: {
      control: 'select',
      options: scale.button.radii,
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Example = Template.bind({});

Example.args = {
  variant: defaults.variant,
  size: defaults.size,
  rounded: defaults.rounded,
  iconLeft: SVGCloudDownload,
  disabled: false,
  children: 'Button text',
};

export default componentMeta;
