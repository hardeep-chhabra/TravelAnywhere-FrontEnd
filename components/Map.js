import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GOOGLE_MAPS_APIKEY } from '@env';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, settraveltimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';


const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const dispatch = useDispatch();
    console.log('MAP')

    useEffect(() => {
      if (!origin || !destination) return;
      mapRef.current.fitToSuppliedMarkers(['origin','destination'], {
        edgePadding: {top:50, bottom:50, left:200, right:200}
      })
    },[origin, destination])

    useEffect(() => {
      console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZzz')
      if (!origin || !destination) return;

      const getTravelTime = async () => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperials&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
        const json_data = await response.json();
        console.log('111111111111111111111', json_data.rows[0].elements[0])
        dispatch(settraveltimeInformation(json_data.rows[0].elements[0]))
    }

    getTravelTime();
    
  }, [origin, destination])


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
