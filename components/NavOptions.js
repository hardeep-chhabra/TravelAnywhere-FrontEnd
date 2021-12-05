import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
    {
        id:"123",
        title:"Get a Ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
];

const NavOptions = () => {

    const origin = useSelector(selectOrigin)
    const navigation = useNavigation()

    return (
        <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
            disabled={!origin && 'false'}
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pr-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image
                    style={{width:120, height:120, resizeMode:'contain'}}
                    source={{uri:item.image}}
                    />
                    <Text>{item.title}</Text>
                    <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    type='antdesign' name='arrowright' color='white' />
                </View>
                
            </TouchableOpacity>
        )
    }
        />
    )
}

export default NavOptions
