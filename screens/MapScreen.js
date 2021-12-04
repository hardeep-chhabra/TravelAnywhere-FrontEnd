import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';


const MapScreen = () => {
    const stack = createStackNavigator();
    console.log('33333333333333333333333333')

    return (
        <View>
        <View style={tw`h-1/2`}>
            <Map />
        </View>

        <View style={tw`h-1/2`}>
        <stack.Navigator>
            <stack.Screen 
            name='NavigateCard'
            component={NavigateCard}
            options={{headerShown:false}}
            />
            <stack.Screen 
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{headerShown:false}}
            />
        </stack.Navigator>
        </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
