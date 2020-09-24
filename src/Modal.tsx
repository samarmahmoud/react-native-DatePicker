import React from 'react';

import { Modal as NativeModal, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { colors, fonts } from './globals';
import { Typography } from './Typography';
import { CloseIcon } from './CloseIcon';

interface Props {
  visible?: boolean;
  setVisibility?: any;
  title?: string;
  children?: React.ReactNode;
  height?: number;
  titleSize?: number;
  closeIcon?: boolean;
}

export const Modal: React.FC<Props> = ({
  children,
  visible = false,
  setVisibility,
  title,
  height = 512,
  titleSize = 20,
  closeIcon=true,
}) => {
  const onClose = () => setVisibility(!visible);

  return (
    <NativeModal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <Overlay activeOpacity={0.3} onPress={onClose} />

      <Container modelHeight={height}>
        <SafeAreaView>
        {!closeIcon && <HandelModal onPress={onClose} />}
          <Row>
            {title && <Title size={titleSize}>{title}</Title>}

            {closeIcon && (
              <Button onPress={onClose}>
                <CloseIcon />
              </Button>
            )}
          </Row>
          {children}
        </SafeAreaView>
      </Container>
    </NativeModal>
  );
};

const Container = styled.View<{ modelHeight }>`
  width: 100%;
  height: ${({ modelHeight }) => modelHeight}px
  background: ${colors.white};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  position: absolute;
  bottom: 0;
`;

const Overlay = styled.TouchableOpacity`
  width: 100%;
  height:100%
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${colors.black};
  opacity: 0.3;
  
`;

const Row = styled.View`
  padding: 20px 20px 0px 20px;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
`;

const Title = styled(Typography)`
  font-family: ${fonts.NeueBold};
  flex: 1;
`;

const Button = styled.TouchableOpacity``;
const HandelModal = styled.TouchableOpacity`
  background-color: ${colors.darkGrey};
  height: 4px;
  width: 56px;
  border-radius: 3px;
  align-self: center;
  margin-top: 10px;
  opacity: 0.29;
`;
