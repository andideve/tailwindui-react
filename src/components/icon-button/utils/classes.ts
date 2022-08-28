import { classes } from '../../button/utils/classes';
import defaults from '../defaults';
import { IconButtonSizes, BaseIconButtonProps } from '../types';

const { base, variants, radii } = classes;

const sizes: Record<IconButtonSizes, string> = {
  xs: 'icon-btn-xs',
  sm: 'icon-btn-sm',
  md: 'icon-btn-md',
  lg: 'icon-btn-lg',
  xl: 'icon-btn-xl',
};

const icon = 'icon-btn__icon';

export function getClassName({
  className = '',
  variant = defaults.variant,
  size = defaults.size,
  rounded = defaults.rounded,
}: BaseIconButtonProps) {
  return [base, variants[variant], sizes[size], radii[rounded], className].join(' ');
}

export function getIconClassName() {
  return icon;
}
