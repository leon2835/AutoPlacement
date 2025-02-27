import React, {useContext} from 'react';
import {View, FlatList, TouchableOpacity, Text, Image} from 'react-native';

//Library
import {SafeAreaView} from 'react-native-safe-area-context';
import CardView from 'react-native-cardview';
import Moment from 'moment';

//Context
import {ThemeContext} from '../../context/provider/ThemeProvider';
import {TranslationContext} from '../../context/provider/TranslationProvider';
import {LocationContext} from '../../context/provider/LocationProvider';

//Custom Components / files
import TopHeader from '../../components/TopHeader';
import EmptyComponent from '../../components/EmptyComponent';

export default function ViewHistory(props) {
  const {style} = useContext(ThemeContext);
  const {translations} = useContext(TranslationContext);
  const {locationList, deleteLocation} = useContext(LocationContext);

  function generateInfo(label, value) {
    return (
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={[style.normalText, {flex: 1}]}>{translations[label]}</Text>
        <Text style={[style.normalText, {flex: 1, textAlign: 'right'}]}>
          {value}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[style.mainContainer, {backgroundColor: 'red'}]}>
        <TopHeader
          title={translations['view_history']}
          leftIcon={require('../../assets/images/icon_back.png')}
          leftOnPress={() => props.navigation.goBack()}
        />
        <View style={style.container}>
          <FlatList
            data={locationList}
            contentContainerStyle={{padding: 10}}
            renderItem={({item, index}) => (
              <CardView
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginBottom: 20,
                    padding: 10,
                  },
                ]}
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={10}>
                <View style={{flex: 1, marginRight: 10}}>
                  {generateInfo('place_name', item.placeName)}
                  {generateInfo(
                    'searched_time',
                    Moment(item.searchedTime).format('DD-MM-YYYY HH:mm:ss'),
                  )}
                  {generateInfo('latitude', item.latitude)}
                  {generateInfo('longitude', item.longitude)}
                </View>
                <TouchableOpacity onPress={() => deleteLocation(index)}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../assets/images/icon_delete.png')}
                  />
                </TouchableOpacity>
              </CardView>
            )}
            ListEmptyComponent={<EmptyComponent />}
            showsVerticalScrollIndicator={false}
            listKey={(item, index) => index.toString()}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
