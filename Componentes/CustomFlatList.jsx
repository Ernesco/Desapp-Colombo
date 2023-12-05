import { View, FlatList } from 'react-native'
import React from 'react'

const CustomFlatList = ({
    dataProp,
    renderListItem,
    itemProp
}) => {
    return (
        <View>
            <FlatList
                dataProp={dataProp}
                renderItem={renderListItem}
                keyExtractor={itemProp}
            />
        </View>
    )
}

export default CustomFlatList