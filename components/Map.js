import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GOOGLE_MAPS_APIKEY } from '@env';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';


const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    console.log('EEEEEEEEEEEEEEEEEEEEEE', mapRef)

    useEffect(() => {
      console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
      if (!origin || !destination) return;
      mapRef.current.fitToSuppliedMarkers(['origin','destination'], {
        edgePadding: {top:50, bottom:50, left:50, right:50}
      })
    },[origin, destination])

    return (
    <MapView
    ref={mapRef}
    style={tw`flex-1`}
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
    >
      
    {origin && destination && 
    (<MapViewDirections 
    origin={origin.description}
    destination={destination.description}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor='black'
    />)}

    {origin?.location && <Marker
    coordinate={{
        latitude: origin.location.lat,
        longitude: origin.location.lng
    }}
    title='origin'
    description={origin.description}
    identifier='origin'
    />}

    {destination?.location && <Marker
    coordinate={{
        latitude: destination.location.lat,
        longitude: destination.location.lng
    }}
    title='destination'
    description={destination.description}
    identifier='destination'
    />}

    </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})
