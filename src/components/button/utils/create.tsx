import React, { useMemo } from 'react';

import defaults from '../defaults';
import { getClassName, getIconClassName } from './classes';
import { BaseButtonProps } from '../types';

export default function create<T = HTMLElement, P = {}>(
  component: 'button' | 'a',
  { displayName }: { displayName?: string } = {},
) {
  const fc = React.forwardRef<T, P & BaseButtonProps>(
    (
      {
        children,
        className,
        variant = defaults.variant,
        size = defaults.size,
        rounded = defaults.rounded,
        iconLeft: IconLeft = defaults.iconLeft,
        iconRight: IconRight = defaults.iconRight,
        ...otherProps
      },
      ref,
    ) => {
      const C = component as unknown as React.FC<BaseButtonProps<T>>;
      const props: BaseButtonProps<T> = {
        ref,
        className: useMemo(
          () => getClassName({ className, variant, size, rounded }),
          [className, variant, size, rounded],
        ),
      };

      return (
        <C {...props} {...otherProps}>
          {IconLeft && <IconLeft className={getIconClassName('left')} />}
          {children}
          {IconRight && <IconRight className={getIconClassName('right')} />}
        </C>
      );
    },
  );

  fc.displayName = displayName;

  return fc;
}
