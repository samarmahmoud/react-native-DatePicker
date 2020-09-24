import React from 'react';
import styled from 'styled-components/native';

import { colors } from './globals';

interface Props {
  children?: any;
  color?: string;
  style?: any;
  size?: number;
  align?: 'left' | 'right' | 'center';
  weight?: number | string;
  numberOfLines?: number;
  underline?: boolean;
  onPress?: () => void;
}

export const Typography = ({
  children,
  color = colors.darkMaroon,
  align = 'left',
  numberOfLines,
  size,
  style,
  underline,
  onPress,
}: Props) => {
  return (
    <Container
      color={color}
      align={align}
      style={style}
      size={size}
      numberOfLines={numberOfLines}
      underline={underline}
      onPress={onPress}>
      {children}
    </Container>
  );
};

const Container = styled.Text<Props>`
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  flex-wrap: wrap;
  ${({ size }) => (size ? `font-size: ${size}px;` : '')}
  ${({ underline }) => (underline ? 'text-decoration-line: underline;' : '')}
`;

