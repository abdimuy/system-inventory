import { Text } from 'react-native'
import React from 'react'

const TextCustom = ({ children, size = 16, center = false, color = '#000' }) => {
  return (
    <Text
      style={{
        fontSize: size,
        textAlign: center ? 'center' : 'left',
        textAlignVertical: center ? 'center' : 'top',
        flex: 1,
        color,
      }}
    >{children}</Text>
  )
}

export default TextCustom