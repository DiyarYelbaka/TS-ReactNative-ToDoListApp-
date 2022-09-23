import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import Modal from "react-native-modal";
import styles from './AddTaskModal.style'

interface IModalProps {
    isVisible: boolean;
    onClose: () => void;
    onAddTask: (taskContent: string) => void;
}

const AddTaskModal: FC<IModalProps> = ({ isVisible, onClose, onAddTask }) => {
    const [taskInputValue, setTaskInputValue] = useState<string>()

    function handleAddTask() {
        if (taskInputValue) {
            onAddTask(taskInputValue)
            setTaskInputValue('')
        }
    }
    return (
        <Modal
            style={styles.modalContainer}
            isVisible={isVisible}
            onBackdropPress={onClose}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Add a task to your list</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Task...'
                    placeholderTextColor='white'
                    onChangeText={setTaskInputValue}
                    value={taskInputValue}
                />
                <TouchableOpacity
                    onPress={handleAddTask}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonTitle}>Add the task</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>

    )
}

export default AddTaskModal