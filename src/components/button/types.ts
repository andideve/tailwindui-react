import React from 'react';
import { Theme } from '../../types/theme';

export type ButtonVariants = 'filled' | 'outlined' | 'link';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonRadii = Theme['radii'];

export type ButtonIcon = React.FC<React.SVGProps<SVGSVGElement>>;

export interface ButtonOptions {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  rounded?: ButtonRadii;
  iconLeft?: ButtonIcon | null;
  iconRight?: ButtonIcon | null;
}

export interface BaseButtonProps<T = HTMLElement> extends ButtonOptions {
  ref?: React.Ref<T>;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export type ButtonProps = BaseButtonProps<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonAnchorProps = BaseButtonProps<HTMLAnchorElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
