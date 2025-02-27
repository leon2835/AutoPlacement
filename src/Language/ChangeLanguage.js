import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

//Library
import {SafeAreaView} from 'react-native-safe-area-context';

//Context
import {ThemeContext} from '../../context/provider/ThemeProvider';
import {TranslationContext} from '../../context/provider/TranslationProvider';

//Custom Components / Files
import TopHeader from '../../components/TopHeader';

export default function ChangeLanguage(props) {
  const {style} = useContext(ThemeContext);
  const {languageIndex, translations, changeLanguage} =
    useContext(TranslationContext);

  const languageList = [
    {label: 'english'},
    {label: 'malay'},
    {label: 'chinese'},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[style.mainContainer, {backgroundColor: 'red'}]}>
        <TopHeader
          title={translations['change_language']}
          leftIcon={require('../../assets/images/icon_back.png')}
          leftOnPress={() => props.navigation.goBack()}
        />
        <View style={style.container}>
          <FlatList
            data={languageList}
            contentContainerStyle={{paddingVertical: 20}}
            renderItem={({item, index}) => (
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                  }}
                  onPress={() => changeLanguage(index)}>
                  <Text style={[style.normalText, {flex: 1}]}>
                    {translations[item.label]}
                  </Text>
                  {languageIndex == index && (
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('../../assets/images/icon_green_ticked.png')}
                    />
                  )}
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: 'grey',
                    marginVertical: 20,
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
