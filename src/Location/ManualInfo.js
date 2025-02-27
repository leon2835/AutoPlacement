import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';

//Library
import {SafeAreaView} from 'react-native-safe-area-context';

//Context
import {ThemeContext} from '../../context/provider/ThemeProvider';
import {TranslationContext} from '../../context/provider/TranslationProvider';

//Custom Components / Files
import TopHeader from '../../components/TopHeader';

export default function ManualInfo(props) {
  const {style} = useContext(ThemeContext);
  const {translations} = useContext(TranslationContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[style.mainContainer, {backgroundColor: 'red'}]}>
        <TopHeader
          title={translations['manual_info']}
          leftIcon={require('../../assets/images/icon_back.png')}
          leftOnPress={() => props.navigation.goBack()}
        />
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={[style.container, {padding: 20}]}>
            <Text style={style.normalText}>
              {' * Please note that the search bar only trigger when user insert at least 2 words' +
                '\n\n' +
                '* When user click any of the suggested selection, it will automatic stored the selected data' +
                '\n\n' +
                '* When user insert any random words, either click search button or unfocus from the text input, it will trigger Google API call' +
                '\n\n' +
                '* If successfully get the place ID based on the searching words from Google API, it will automatic navigate to the location' +
                '\n\n' +
                '* If no result return from Google API, it will show an error message' +
                '\n\n' +
                '* User may either watch the history by clicking the right bottom button from Location page, or navigate to History page from Home page.'}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
