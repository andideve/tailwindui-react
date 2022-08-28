import React from 'react';
import { ButtonVariants, ButtonSizes, ButtonRadii } from '../button/types';

export type IconButtonVariants = ButtonVariants;
export type IconButtonSizes = ButtonSizes;
export type IconButtonRadii = ButtonRadii;

export interface IconButtonOptions {
  variant?: IconButtonVariants;
  size?: IconButtonSizes;
  rounded?: IconButtonRadii;
}

export interface BaseIconButtonProps<T = HTMLElement> extends IconButtonOptions {
  ref?: React.Ref<T>;
  children?: React.ReactElement | null;
  className?: string;
  style?: React.CSSProperties;
}

export type IconButtonProps = BaseIconButtonProps<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type IconAnchorProps = BaseIconButtonProps<HTMLAnchorElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
