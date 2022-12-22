import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { Pressable } from 'react-native';
import { Button, Container, TextCustom } from '../../atoms';
import { PRIMARY_COLOR } from '../../../styles/colors';
import moment from 'moment'

const PickerDate = ({ stateFecha }) => {
  const [date, setDate] = stateFecha;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
      >
        <Container
          styleParams={{
            borderWidth: 1,
            borderColor: PRIMARY_COLOR,
            flex: 1,
          }}
        >
          <TextCustom center size={22}>{moment(date).format('DD/MM/YYYY')}</TextCustom>
        </Container>
      </Pressable>
      <DatePicker
        // style={{ width: 200 }}
        date={date}
        modal
        mode='date'
        open={open}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  )
}

export default PickerDate