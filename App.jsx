import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import { useState } from 'react';
import CustomModal from './Componentes/CustomModal';
import CustomInput from './Componentes/CustomInput';

export default function App() {
  const [textItem, setTextItem] = useState("")
  const [intemList, setItemList] = useState([])
  const [itemSelectedDelete, setItemSelectedDelete] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    setItemList(prevState => [...intemList, { id: Math.random().toString(), value: textItem }])
    setTextItem("")
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedDelete(intemList.find((item) => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(intemList.filter((item) => item.id !== itemSelectedDelete.id))
    setModalVisible(!modalVisible)
  }

  const renderListItem = ({ item }) => (
    <View style={styles.intemList}>
      <Text style={styles.textList}>
        {item.value}
      </Text>
      <Button title='X' onPress={() => onSelectItemHandler(item.id)} color="#344e41" />
    </View>
  )

  return (
    <>
      <View style={styles.container}>
        <CustomInput 
          placeholder="Ingrear Tarea"
          textItem={textItem}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToList={addItemToList}
        />
        <View>
          <FlatList
            data={intemList}
            renderItem={renderListItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <CustomModal 
        animationType="slide"
        isVisible={modalVisible}
        itemSelected={itemSelectedDelete}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3b18a',
    padding: 30,
  },
  intemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#dad7cd",
    borderRadius: 10,
    color: "#fdf0d5"
  },
  textList: {
    color: "#344e41",
    fontSize: 18,
  },
});
