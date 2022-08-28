import create from './utils/create';
import { IconAnchorProps } from './types';

type Element = HTMLAnchorElement;
type Props = IconAnchorProps;

const IconAnchor = create<Element, Props>('a', { displayName: 'IconAnchor' });

export { IconAnchor };
export default IconAnchor;
