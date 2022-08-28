import create from './utils/create';
import { IconButtonProps } from './types';

type Element = HTMLButtonElement;
type Props = IconButtonProps;

const IconButton = create<Element, Props>('button', { displayName: 'IconButton' });

IconButton.defaultProps = { type: 'button' };

export { IconButton };
export default IconButton;
