import React, {useRef, useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';

//Library
import {SafeAreaView} from 'react-native-safe-area-context';
import {Modalize} from 'react-native-modalize';
//Context
import {ThemeContext} from '../../context/provider/ThemeProvider';
import {TranslationContext} from '../../context/provider/TranslationProvider';

//Custom Components / files
import CardViewButton from '../../components/CardViewButton';
import {LibraryUsed} from '../../field/LibraryUsed';

export default function Home(props) {
  const modalizeRef = useRef(null);

  const {style} = useContext(ThemeContext);
  const {translations} = useContext(TranslationContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.mainContainer}>
        <ScrollView style={{flex: 1, padding: 20}}>
          <Text
            style={[style.largeText, {textAlign: 'center', marginBottom: 30}]}>
            {translations['you_may_test_from_button_below']}
          </Text>
          <CardViewButton
            buttonTitle={'location'}
            action={() => props.navigation.navigate('Location')}
          />
          <CardViewButton
            buttonTitle={'view_history'}
            action={() => props.navigation.navigate('ViewHistory')}
          />
          <CardViewButton
            buttonTitle={'change_language'}
            action={() => props.navigation.navigate('ChangeLanguage')}
          />
          <CardViewButton
            buttonTitle={'third_library_used'}
            action={() => modalizeRef.current.open()}
          />
        </ScrollView>
      </View>
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight={true}
        childrenStyle={{
          backgroundColor: 'white',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 20,
        }}
        flatListProps={{
          data: LibraryUsed,
          listHeaderComponent: (
            <Text style={style.normalTextBold}>
              {translations['library_used']}
            </Text>
          ),
          renderItem: ({item}) => {
            return (
              <Text style={[style.normalText, {marginBottom: 10}]}>{item}</Text>
            );
          },
          showsVerticalScrollIndicator: false,
          listKey: (item, index) => index.toString(),
          keyExtractor: (item, index) => index.toString(),
        }}
        avoidKeyboardLikeIOS={true}
      />
    </SafeAreaView>
  );
}
