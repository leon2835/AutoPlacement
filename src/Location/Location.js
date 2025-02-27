import React, {useRef, useContext, useEffect, useState} from 'react';
import {View, TouchableOpacity, Image, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

//Library
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';

//Context
import {ThemeContext} from '../../context/provider/ThemeProvider';
import {TranslationContext} from '../../context/provider/TranslationProvider';
import {primaryColor} from '../../assets/styles/Colors';
import {LocationContext} from '../../context/provider/LocationProvider';

//Custom components / files
import TopHeader from '../../components/TopHeader';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import ConfigSingleton from '../../server/ConfigSingleton';

//API
import useSearchByName from '../../api/useSearchByName';
import useSearchByPlaceID from '../../api/useSearchByPlaceID';

export default function Location(props) {
  const googleApiKey = ConfigSingleton.getValueForKey('googleApiKey');

  const googleRef = useRef(null);

  const {style} = useContext(ThemeContext);
  const {translations} = useContext(TranslationContext);
  const {insertLocation} = useContext(LocationContext);

  const [displayModal, setDisplayModal] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('');

  const [selectedLatitude, setSelectedLatitude] = useState(3.1106019);
  const [selectedLongitude, setSelectedLongitude] = useState(101.6662729);

  const {
    data: searchByNameData,
    error: searchByNameError,
    getSearchByName,
  } = useSearchByName();

  const {
    data: searchByPlaceIdData,
    error: searchByPlaceIdError,
    getSearchByPlaceId,
  } = useSearchByPlaceID();

  useEffect(() => {
    if (searchByNameData) {
      getSearchByPlaceId(searchByNameData[0].place_id);
    }
  }, [searchByNameData]);

  useEffect(() => {
    if (searchByNameError) {
      googleRef.current.clear();
      setDisplayModal(true);
      setDisplayMessage(
        translations['no_result_available_please_try_with_different_name'],
      );
    }
  }, [searchByNameError]);

  useEffect(() => {
    if (searchByPlaceIdData) {
      const {lat, lng} = searchByPlaceIdData.geometry.location;

      insertLocation({
        placeName: searchByPlaceIdData.name,
        searchedTime: new Date(),
        latitude: lat,
        longitude: lng,
      });
      setSelectedLatitude(lat);
      setSelectedLongitude(lng);
    }
  }, [searchByPlaceIdData]);

  useEffect(() => {
    if (searchByPlaceIdError) {
      setDisplayModal(true);
      setDisplayMessage(
        translations['no_result_available_please_try_with_different_name'],
      );
    }
  }, [searchByPlaceIdError]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[style.mainContainer, {backgroundColor: 'red'}]}>
        <TopHeader
          title={translations['location']}
          leftIcon={require('../../assets/images/icon_back.png')}
          leftOnPress={() => props.navigation.goBack()}
          rightIcon={require('../../assets/images/icon_information.png')}
          rightOnPress={() => props.navigation.navigate('ManualInfo')}
        />
        <GooglePlacesAutocomplete
          ref={googleRef}
          minLength={2}
          autoFocus={false}
          listViewDisplayed="auto"
          fetchDetails={true}
          onPress={(data, details) => {
            const {lat, lng} = details.geometry.location;

            insertLocation({
              placeName: details.formatted_address,
              searchedTime: new Date(),
              latitude: lat,
              longitude: lng,
            });
            setSelectedLatitude(lat);
            setSelectedLongitude(lng);
          }}
          textInputProps={{
            textComp: TextInput,
            onChangeText: text => googleRef.current.setAddressText(text),
            style: {
              width: '100%',
              backgroundColor: 'white',
              padding: 20,
            },
            placeholder: translations['please_insert_place_name'],
            clearButtonMode: 'while-editing',
            onEndEditing: () => {
              const text = googleRef.current.getAddressText();
              text && getSearchByName(text);
            },
          }}
          styles={{
            container: {
              position: 'absolute',
              top: 80,
              left: 10,
              right: 10,
              zIndex: 1,
            },
          }}
          query={{
            key: googleApiKey,
            language: 'en',
            types: 'address',
          }}
          debounce={200}
        />
        <MapView
          style={{
            flex: 1,
          }}
          region={{
            latitude: selectedLatitude,
            longitude: selectedLongitude,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryColor,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: 'black',
            overflow: 'hidden',
            position: 'absolute',
            bottom: 50,
            right: 20,
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
            }}
            onPress={() => {
              props.navigation.navigate('ViewHistory');
            }}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/images/icon_history_log.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ConfirmationDialog
        displayModal={displayModal}
        displayMessage={displayMessage}
        okLabel={translations['ok']}
        okAction={() => {
          setDisplayModal(false);
        }}
      />
    </SafeAreaView>
  );
}
