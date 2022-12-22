import React, { useState } from 'react'
import { Button, Container } from '../../atoms'

const Switch = ({ option1, option2 }) => {
  const [selected, setSelected] = useState(option1)
  return (
    <Container styleParams={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        text={option1}
        stylesParams={{
          backgroundColor: selected === option1 ? '#00a680' : '#fff',
          color: selected === option1 ? '#fff' : '#00a680',
        }}
        onPress={() => setSelected(option1)}
      />
      <Button
        text={option2}
        stylesParams={{
          backgroundColor: selected === option2 ? '#00a680' : '#fff',
          color: selected === option2 ? '#fff' : '#00a680',
        }}
        onPress={() => setSelected(option2)}
      />
    </Container>
  )
}

export default Switch