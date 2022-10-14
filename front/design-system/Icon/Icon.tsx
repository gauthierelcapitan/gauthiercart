import dynamic from 'next/dynamic';
import { ComponentType, ReactElement } from 'react';

type IconVariant = 'iceAxe' | 'karabiner' | 'piranha' | 'quickdraw';

export interface IconsProps {
  color?: string;
  height?: number;
  variant: IconVariant;
  width?: number;
}

const icons: { [variant in IconVariant]: ComponentType<IconsProps> } = {
  iceAxe: dynamic(() => import('./icons/IceAxe')),
  karabiner: dynamic(() => import('./icons/Karabiner')),
  piranha: dynamic(() => import('./icons/Piranha')),
  quickdraw: dynamic(() => import('./icons/Quickdraw')),
};

export const Icon = (props: IconsProps): ReactElement => {
  const { variant, color = 'currentColor', height = 30, width = 40 } = props;
  if (typeof icons[variant] !== 'undefined') {
    const Icon = icons[variant];
    return (
      <Icon variant={variant} color={color} height={height} width={width} />
    );
  }
  return <></>;
};
