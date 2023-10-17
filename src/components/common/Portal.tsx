import { ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  selector?: string;
}
const Portal: FC<Props> = ({ children, selector }) => {
  const rootElement = selector && document.querySelector(selector);

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
