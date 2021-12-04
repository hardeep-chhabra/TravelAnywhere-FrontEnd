import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setdestination } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';


const HomeScreen = () => {
    
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
            <Image
                style={{
                    height:100,
                    width:100,
                    resizeMode:'contain'
                }}
                source={{
                    uri: 'https://links.papareact.com/gzs'
                }}
            />
            <GooglePlacesAutocomplete 
            placeholder='Where from?'
            onPress={(data, details = null) => {
                dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description
                }))
            }}
            fetchDetails={true}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en'
            }}
            styles={{
                container: {
                    flex: 0,
                },
                textInput: {
                    fontSize: 10,
                }
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            returnKeyType={'search'}
            debounce={400}
            minLength={2}
            enablePoweredByContainer={false}
            />
            <NavOptions />
            <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
