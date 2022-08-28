import create from './utils/create';
import { ButtonProps } from './types';

type Element = HTMLButtonElement;
type Props = ButtonProps;

const Button = create<Element, Props>('button', { displayName: 'Button' });

Button.defaultProps = { type: 'button' };

export { Button };
export default Button;
