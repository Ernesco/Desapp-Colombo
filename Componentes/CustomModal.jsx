import { StyleSheet, Text, View, Modal, Button} from 'react-native'

const CustomModal = ({
    animationType,
    isVisible,
    itemSelected,
    onDeleteItemHandlerEvent,
    setModalVisibleEvent



}) => {
    return (
        <Modal animationType={animationType} visible={isVisible}>
            <View style={styles.modalMsgContainer}>
                <Text style={styles.modalTextPr}>Desea Eliminar:</Text>
                <Text style={styles.modalTextSe}>{itemSelected.value}?</Text>
            </View>
            <View style={styles.modalBtnContainer}>
                <Button title="Cancelar" color={"#bc4749"} onPress={() => setModalVisibleEvent(!isVisible)} />
                <Button title='Aceptar' color={"#6a994e"} onPress={onDeleteItemHandlerEvent} />
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalMsgContainer: {
        marginTop: 50,
        alignItems: "center",
        fontSize: 20
    },
    modalBtnContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 20,
        borderRadius: 10
    },
    modalTextPr: {
        fontSize: 20
    },
    modalTextSe: {
        fontSize: 16
    },
})