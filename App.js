import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal} from 'react-native';
import { useState } from 'react';

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
      <Button title='x' onPress={() => onSelectItemHandler(item.id)} />
    </View>
  )

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Ingresar Tarea'
            onChangeText={(onChangeTextHandler)}
          />
          <Button styles={styles.BtnContainer}
            title='+'
            onPress={addItemToList}
            value={textItem}
          />
        </View>
        <View>
          <FlatList
            data={intemList}
            renderItem={renderListItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <Modal animationType='slide' visible={modalVisible}>
        <View style={styles.modalMsgContainer}>
          <Text>Se eliminara:</Text>
          <Text>{itemSelectedDelete.value}</Text>
        </View>
        <View style={styles.modalBtnContainer}>
          <Button title="Cancelar" color={"#bc4749"} onPress={() => setModalVisible(!modalVisible)} />
          <Button title='Aceptar' color={"#6a994e"} onPress={() => onDeleteItemHandler()} />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003049',
    padding: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
    marginTop: 20,
  },
  textInput: {
    width: 200,
    borderBottomColor: "#fdf0d5",
    borderBottomWidth: 1,
    fontSize: 18,
    color: "#fdf0d5"
  },
  BtnContainer: {
    fontSize: 40,
    backgroundColor: "#9b2226"
  },
  intemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#669bbc",
    borderRadius: 10,
    color: "#fdf0d5"
  },
  textList: {
    color: "#fdf0d5",
    fontSize: 18,
  },
  modalMsgContainer: {
    marginTop: 50,
    alignItems: "center"
  },
  modalBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20
  }
});
