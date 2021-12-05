import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { FlatList } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id:"123",
        icon:"home",
        location:"Home",
        destination:"Trilok Apartments, Sumeru",
    }
];

const NavFavourites = () => {
    return (
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: {location,destination,icon} }) =>
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon 
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type='ionicon'
                color='white'
                size={10}
                />
                <View>
                    <Text>{location}</Text>
                    <Text>{destination}</Text>
                </View>
            </TouchableOpacity>
        }
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
