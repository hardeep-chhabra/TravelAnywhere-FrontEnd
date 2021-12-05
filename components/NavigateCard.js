import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { setdestination } from '../slices/navSlice';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements/dist/icons/Icon';


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    console.log('NAVIGATE CARD')

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-2 text-xl`}>Good Morning, Hardeep</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <GooglePlacesAutocomplete 
                placeholder='Where To Go?'
                styles={DestinationStyles}
                fetchDetails={true}
                returnKeyType={'search'}
                enablePoweredByContainer={false}
                onPress={(data, details=null) => {
                    dispatch(setdestination({
                        location: details.geometry.location,
                        description: data.description
                    }))
                    navigation.navigate('RideOptionsCard')
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                />
            </View>
            <NavFavourites />

            <View style={tw`flex flex-row bg-white justify-evenly py-4 border-t border-gray-100`}>
            <TouchableOpacity style={tw`flex flex-row bg-black w-20 px-4 py-3 rounded-full`} onPress={(eee) => navigation.navigate('RideOptionsCard') } >
                {/* <Icon 
                name='car'
                type='font-awesome'
                color='white'
                size={16}
                /> */}
                <Text style={tw`text-white text-center`}>Rides</Text>
            </TouchableOpacity>
        </View>

        </SafeAreaView>
    )
}

export default NavigateCard

const DestinationStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 10,
        flex:0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 15
    },
    textInputContainer: {
        paddingHorizontal: 0
    }
})
