import React, {useContext} from 'react';
import {View, Image, Text, Dimensions} from 'react-native';

//Context
import {ThemeContext} from '../context/provider/ThemeProvider';
import {TranslationContext} from '../context/provider/TranslationProvider';

export default function ConfirmationDialog() {
  const {style} = useContext(ThemeContext);
  const {translations} = useContext(TranslationContext);

  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{
          width: Dimensions.get('window').width * 0.3,
          height: Dimensions.get('window').width * 0.3,
          marginBottom: 20,
        }}
        source={require('../assets/images/no_data.png')}
      />
      <Text style={style.titleTextBold}>
        {translations['sorry_no_data_available']}
      </Text>
    </View>
  );
}
