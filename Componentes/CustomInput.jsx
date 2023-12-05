import { StyleSheet, TextInput, View, Button } from 'react-native'

const CustomInput = ({
    placeholder,
    textItem,
    onChangeTextHandlerEvent,
    addItemToList

}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={(onChangeTextHandlerEvent)}
                value={textItem}
            />
            <Button styles={styles.btnContainer}
                title='Ingresar'
                color={"#344e41"}
                onPress={addItemToList}
                value={textItem}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#dad7cd",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 20,
        marginTop: 20,
        padding: 10,
        borderRadius: 10
    },
    textInput: {
        width: 200,
        borderBottomColor: "#344e41",
        borderBottomWidth: 1,
        fontSize: 20,
        color: "#344e41"
    },

})