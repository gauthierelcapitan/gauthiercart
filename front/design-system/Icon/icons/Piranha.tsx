import { FC } from 'react';

import { IconsProps } from '../Icon';

const Piranha: FC<IconsProps> = ({ color, height, width }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 400 300"
      fill="none"
    >
      <path
        stroke={color}
        d="M156 39.3c-5.6 1.8-17.1 13.9-21 22.2-6.2 13.3-7.4 19.2-7.4 37 .1 14.1.4 17.2 2.7 26 4.7 17.5 13.9 34.1 26.9 48.4 10.3 11.4 14.2 24.2 13.6 44.8-.3 11.2-.4 11.5-3.1 13.9-5.1 4.3-16 2.9-29.6-4-4.1-2.1-5.6-2.5-6.7-1.5-2 1.6-1.7 3.8.9 8.1 4 6.5 9.8 9.9 25.2 14.7 14.7 4.5 21.9 5.4 37.9 4.9 17.4-.6 23.9-2.6 38.2-11.9 18.8-12.2 23.8-13.3 26.8-5.9 2.2 5.6 2 9.1-.9 16-2.6 6.3-2.5 8.5.6 9.5s6.9-2.2 9.7-8.3c2.4-5.1 2.7-6.8 2.7-17.2 0-12.3-1.6-19.4-5.7-24.5-4.5-5.7-6.8-5.2-20.3 4.6-14 10.1-20.8 12-26.3 7.4-3.9-3.3-5.2-8.8-5.1-22.2 0-14.8.7-16.3 10.9-24.6 26.9-21.7 33.8-33.6 34.8-59.2.7-20.8-3.1-37.5-12.9-56.6-5.9-11.6-10.4-17-16.4-19.9-4.3-2.1-4.7-2.1-7-.6-3.2 2.1-3.1 3.4.4 9.3 1.7 2.6 3.3 6.5 3.7 8.5.6 3.4.3 4.1-2.9 7.3-7.2 7.2-15.1 4.7-40.7-12.7-14.9-10.1-23-14.9-24.7-14.7-.4.1-2.4.6-4.3 1.2zm25 32.4c9.5 3.1 20.2 8.5 33.3 16.8 17.5 10.9 22.8 16.7 24.7 26.6 2.1 11.2-2.1 22.8-11.9 32.4-15.6 15.3-32.2 21.6-43.6 16.6-15.4-6.8-28-23.6-33.6-44.6-3-11.5-3.7-30.5-1.4-37.4 2.1-6.4 6.6-11.8 10.9-13 4.4-1.4 12.8-.4 21.6 2.6zm19.5 151.6c1.8 1.5 2.8 3.6 3.2 6.4.5 3.7.2 4.5-2.5 7.3-5.2 5.2-13.1 3.9-15.8-2.7-1.8-4.2-.5-9.4 2.9-11.8 3.2-2.3 9.1-1.9 12.2.8z"
      />
    </svg>
  );
};

export default Piranha;