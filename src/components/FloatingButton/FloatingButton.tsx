import { View, Text, TouchableOpacity } from 'react-native'
import React,{FC} from 'react'
import styles from './style'

interface IButtonProps{
  onPress:()=> void;
}

const FloatingButton:FC<IButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.icon}>+</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FloatingButton