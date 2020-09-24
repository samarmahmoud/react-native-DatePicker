import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import moment from 'moment';

import { Modal } from './Modal';

interface Props {
  visible?: boolean;
  setVisibility: any;
  maxYear: number;
  onValueChange?: (date: string) => string;
}

export const DatePicker: React.FC<Props> = ({
  visible,
  setVisibility,
  onValueChange,
  maxYear = 50,
}) => {
  const [month, setMonth] = useState(moment(new Date()).format('M') - 1);
  const [yearIndex, setYearIndex] = useState(0);
  const [years, setYears] = useState<Array<string>>([]);
  const months = moment(new Date())._locale._months;

  const getYears = (max: number) => {
    let allYears = [];
    for (let i = 0; i <= max; i++) {
      allYears.push((new Date().getFullYear() + i).toString());
    }
    setYears(allYears);
  };
  useEffect(() => {
    getYears(maxYear);
  }, []);

  const submit = () => {
    setVisibility();
    onValueChange(`${month < 9 ? `0${month + 1}` : month + 1} / ${years[yearIndex]}`);
  };
  return (
    <Modal height={280} visible={visible} title={'MM / YY'} setVisibility={() => submit()}>
      <Row>
        <WheelPicker
          selectedItem={month}
          data={months}
          hideIndicator={true}
          onItemSelected={index => setMonth(index)}
        />
        <WheelPicker
          selectedItem={yearIndex}
          hideIndicator={true}
          data={years}
          onItemSelected={index => setYearIndex(index)}
        />
      </Row>
    </Modal>
  );
};

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
