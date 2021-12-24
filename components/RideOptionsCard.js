import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import { selectTraveltimeInformation } from '../slices/navSlice';
import 'intl';
import 'intl/locale-data/jsonp/en';


const data = [
    {
        id:"Ola-123",
        title:"OlaX",
        image:"https://links.papareact.com/3pn",
        multiplier: 1,
    },
    {
        id:"Ola-456",
        title:"Ola XL",
        image:"https://links.papareact.com/5w8",
        multiplier: 1.2,
    },
    {
        id:"Ola-789",
        title:"Ola Deluxe",
        image:"https://links.papareact.com/7pf",
        multiplier: 1.75,
    },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const [selected, setSelected] = useState(null);
    const traveltimeInformation = useSelector(selectTraveltimeInformation)


    return (
        <SafeAreaView style={tw`flex-grow bg-white`}>
            <View>
                {/* <TouchableOpacity style={tw`absolute px-3 py-3`}>
                    <Icon name='chevron-left' type='fontawesome' />
                </TouchableOpacity> */}
                <Text style={tw`text-center py-2 text-xl`}>
                    Select a Ride - {traveltimeInformation?.distance?.text}
                </Text>
            </View>

            <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item: {title,id,multiplier,image}, item}) => {
                return (
                <TouchableOpacity onPress={() => setSelected(item)} style={tw`flex-row items-center justify-between px-7 ${id === selected?.id && 'bg-gray-200'}`}>
                    <Image style={{height: 100, width: 100, resizeMode: 'contain'}} 
                    source={{uri : image}}
                    />
                    <View style={tw`-ml-8`}>
                    <Text style={tw`font-semibold`}>
                        {title}
                    </Text>
                    <Text>
                        {traveltimeInformation?.duration?.text}
                    </Text>
                    </View>
                    <Text style={tw`font-semibold`}>
                        {new Intl.NumberFormat('en-gb', {
                            style:'currency',
                            currency:'INR'
                        }).format((traveltimeInformation?.duration?.value*multiplier)/10)
                        }
                    </Text>
                </TouchableOpacity>
            )}}
            />

            <View style={{marginBottom:400}}>
                <TouchableOpacity disabled={true ? !selected : false} 
                style={tw`bg-black m-3 ${!selected && 'bg-gray-200'}`}>
                    <Text style={tw`text-xl text-center text-white`}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
