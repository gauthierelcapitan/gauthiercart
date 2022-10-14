import { cx } from '@gauthiercart/utils/styles';
import { FC, PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cx(
        'container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
