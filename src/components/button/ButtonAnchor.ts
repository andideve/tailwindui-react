import create from './utils/create';
import { ButtonAnchorProps } from './types';

type Element = HTMLAnchorElement;
type Props = ButtonAnchorProps;

const ButtonAnchor = create<Element, Props>('a', { displayName: 'ButtonAnchor' });

export { ButtonAnchor };
export default ButtonAnchor;
