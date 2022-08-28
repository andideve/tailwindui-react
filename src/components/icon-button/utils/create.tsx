import React, { useMemo } from 'react';

import defaults from '../defaults';
import { getClassName, getIconClassName } from './classes';
import { BaseIconButtonProps } from '../types';

export default function create<T = HTMLElement, P = {}>(
  component: 'button' | 'a',
  { displayName }: { displayName?: string } = {},
) {
  const fc = React.forwardRef<T, P & BaseIconButtonProps>(
    (
      {
        children,
        className,
        variant = defaults.variant,
        size = defaults.size,
        rounded = defaults.rounded,
        ...otherProps
      },
      ref,
    ) => {
      const C = component as unknown as React.FC<BaseIconButtonProps<T>>;
      const props: BaseIconButtonProps<T> = {
        ref,
        className: useMemo(
          () => getClassName({ className, variant, size, rounded }),
          [className, variant, size, rounded],
        ),
        children: useMemo(() => {
          if (!children) return null;
          return React.cloneElement(children, { className: getIconClassName() });
        }, [children]),
      };

      return <C {...props} {...otherProps} />;
    },
  );

  fc.displayName = displayName;

  return fc;
}
