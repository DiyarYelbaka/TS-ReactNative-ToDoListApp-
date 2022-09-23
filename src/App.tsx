import { View, Text, StyleSheet,ScrollView,FlatList,Alert } from 'react-native'
import React,{useState} from 'react'
import Colors from './styles/Colors'
import Fonts from './styles/Fonts'
import FloatingButton from './components/FloatingButton'
import AddTaskModal from './components/AddTaskModal'
import TaskCard from './components/TaskCard'



const App = () => {
  const [modalVisible,setModalVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<any>([])

  function handleModalVisible(){
    setModalVisible(!modalVisible);
  }
  function addTask(taskContent:string){
    console.log(taskContent)

    const tasksContentCheck= taskContent.trim().toLowerCase();
    const checkDublicate = toDoList.find((todo:any)=> todo.task.trim().toLowerCase()===tasksContentCheck)
    console.log(checkDublicate)

    if(tasksContentCheck=='') {
      Alert.alert('Opps','Boş geçmeyiniz')
      return;
    }
    
    if(!checkDublicate){
      const newTask = {
        id:toDoList.length+1,
        task:taskContent,
        isCompleted:false
      }
      setToDoList((oldTasks:any)=>[...oldTasks,newTask])
      setModalVisible(false)
    }else{
        Alert.alert('Opps','Bu görevi daha önce eklediniz')
    }

   
  }
  function deleteTask(item:any){
    if(item.isCompleted===false){
        const newList = toDoList.map((todo:any)=>{
          if(todo.id==item.id){
             todo.isCompleted=true;
          }
          return todo; 
        });
      setToDoList(newList);
    }else{
       setToDoList(toDoList.filter((itemm:any)=>itemm.id!==item.id))
    }
  }

  const renderToDoList = ({item}:any) =>{
    return <TaskCard item={item} isCompleted={item.isCompleted} onDelete={()=>deleteTask(item)} />
  }

  return (
  
    <View style={styles.container}>
    
      <Text style={styles.title}>My ToDo App</Text>
      
      <FlatList data={toDoList}  renderItem={renderToDoList}  />
      <FloatingButton onPress={handleModalVisible} />
      <AddTaskModal isVisible={modalVisible} onClose={handleModalVisible} onAddTask={addTask} />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultDarkColor,
    flex: 1
  },
  title: {
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 25
  }
})

export default App