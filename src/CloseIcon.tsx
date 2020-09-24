import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { colors } from './globals';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
}

export const CloseIcon: React.FC<Props> = ({
  width = 32,
  height = 32,
  fill = colors.darkMaroon,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32">
      <Path d="M0,0H32V32H0Z" />
      <Path
        fill={fill}
        d="M8.485,6.6l6.6-6.6,1.885,1.885-6.6,6.6,6.6,6.6-1.885,1.885-6.6-6.6-6.6,6.6L0,15.085l6.6-6.6L0,1.885,1.885,0Z"
        transform="translate(7.515 7.515)"
      />
    </Svg>
  );
};
