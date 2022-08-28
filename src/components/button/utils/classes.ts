import defaults from '../defaults';
import { ButtonVariants, ButtonSizes, ButtonRadii, BaseButtonProps } from '../types';

const base = 'btn';

const variants: Record<ButtonVariants, string> = {
  filled: 'btn-filled',
  outlined: 'btn-outlined',
  link: 'btn-link',
};

const sizes: Record<ButtonSizes, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
};

const radii: Record<ButtonRadii, string> = {
  sm: 'rounded-sm',
  base: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

const icons = {
  left: 'btn__icon--left',
  right: 'btn__icon--right',
};

export const classes = { base, variants, sizes, radii, icons };

export function getClassName({
  className = '',
  variant = defaults.variant,
  size = defaults.size,
  rounded = defaults.rounded,
}: BaseButtonProps) {
  return [base, variants[variant], sizes[size], radii[rounded], className].join(' ');
}

export function getIconClassName(mod: keyof typeof icons) {
  return icons[mod];
}
