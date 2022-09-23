import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './taskCard.stye'

interface ICardProps {
  isCompleted: boolean;
  item: any;
  onDelete:()=> void
}

const TaskCard: FC<ICardProps> = ({ isCompleted, item,onDelete }) => {
  return (
    isCompleted ?
      (<TouchableOpacity onLongPress={onDelete} >
        <View style={styles.completedContainer}>
          <Text style={styles.completedTaskText}>{item.task}</Text>
        </View>
      </TouchableOpacity>
      ):(
      <TouchableOpacity onLongPress={onDelete}  >
        <View style={styles.container}>
          <Text style={styles.taskText}>{item.task}</Text>
        </View>
      </TouchableOpacity>)
  )
}

export default TaskCard